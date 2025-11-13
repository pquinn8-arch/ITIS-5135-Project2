import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      postId,
      name,
      email: "placeholder@email.com",
      body
    };

    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment)
    });

    setComments([newComment, ...comments]);
    setName("");
    setBody("");
  };

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

    <h3>Leave a Comment</h3>
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        placeholder="Your comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows="4"
        required
      />

      <button type="submit">Post Comment</button>
    </form>

  </div>
);
}