// src/components/CommentBox.jsx
import { useState } from "react";
import { useAuth } from "../Context/AuthContext.jsx";

export default function CommentBox() {
  const { isAuthenticated, user } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // If user is NOT logged in, show message only
  if (!isAuthenticated) {
    return (
      <div className="comment-locked">
        <p>
          You must be <strong>logged in</strong> to leave a comment.
        </p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      author: user?.username || "Anonymous",
      text: comment.trim(),
    };

    setComments((prev) => [newComment, ...prev]);
    setComment("");
  }

  return (
    <div className="comment-box">
      <h3>Comments</h3>

      <form onSubmit={handleSubmit} className="comment-form">
        {/* REMOVE the name input entirely */}
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          rows={3}
          required
        />

        <button type="submit" className="btn-primary btn-sm">
          Post Comment
        </button>
      </form>

      {comments.length === 0 ? (
        <p className="comment-empty">No comments yet. Be the first to share!</p>
      ) : (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id} className="comment-item">
              <p className="comment-text">{c.text}</p>
              <p className="comment-meta">— {c.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
