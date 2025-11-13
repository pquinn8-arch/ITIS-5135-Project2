import { useState } from "react";

function CommentBox({ onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    // Send comment to parent component
    onAddComment(name, comment);

    // Clear input fields
    setName("");
    setComment("");
  };

  return (
    <div className="comment-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="comment-input"
        />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          className="comment-textarea"
        ></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default CommentBox;
