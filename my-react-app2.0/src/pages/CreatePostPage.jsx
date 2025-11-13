import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage({ blogPosts, setBlogPosts }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both fields");
      return;
    }

    const newPost = {
      title,
      content,
      author: "Precious Quinn",
      date: new Date().toLocaleDateString(),
    };

    setBlogPosts([...blogPosts, newPost]);

    navigate("/"); // ✅ Return to home after posting
  };

  return (
    <div className="post-form-container">
      <h2>Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="post-input"
        />

        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="post-textarea"
        ></textarea>

        <button type="submit" className="submit-btn">
          Publish Post 🌼
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
