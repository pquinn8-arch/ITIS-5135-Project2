import { useParams } from "react-router-dom";
import Post from "../components/Post";
import CommentBox from "../components/CommentBox";

function IndividualPostPage({ blogPosts, comments, addComment }) {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) return <h2>Post not found</h2>;

  return (
    <div style={{ padding: "1rem" }}>
      <Post
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
      />

      <div style={{ background: "rgba(255,255,255,0.85)", padding: "15px", borderRadius: "8px" }}>
        <h3>Comments</h3>

        {(comments[id] || []).length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments[id].map((c, i) => (
            <p key={i}>
              <strong>{c.name}:</strong> {c.comment}
            </p>
          ))
        )}

        <CommentBox onAddComment={(name, comment) => addComment(id, name, comment)} />
      </div>
    </div>
  );
}

export default IndividualPostPage;
