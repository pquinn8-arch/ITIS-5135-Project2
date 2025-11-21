import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentBox from "../components/CommentBox.jsx";  // ← IMPORT NEW COMMENT BOX

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postData = await postRes.json();
      setPost(postData);

      const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      setUser(await userRes.json());

      const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      setComments(await commentsRes.json());
    }
    fetchData();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="single-post-container">

      <Link to="/posts" className="back-link">← Back to Posts</Link>

      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>

      <p className="post-author">
        <strong>Author:</strong> {user?.name} ({user?.email})
      </p>

      <h3>Comments</h3>
      {comments.length > 0 ? (
        comments.map((c, i) => (
          <div key={i} className="comment-box">
            <strong>{c.name}</strong>
            <p>{c.body}</p>
          </div>
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}

      {/* ⭐ REPLACE OLD COMMENT FORM WITH NEW COMPONENT */}
      <h3>Leave a Comment</h3>
      <CommentBox />

    </div>
  );
}
