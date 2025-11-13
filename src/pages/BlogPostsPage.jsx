import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  // Custom text previews to replace the lorem ipsum
  const customPreviews = {
    1: "Discover how nature inspires peace, balance, and reflection in everyday life.",
    2: "Personal growth begins with mindset — learn how small habits shape your future.",
    3: "Explore the power of positivity and how it transforms challenges into strength.",
    4: "Mindfulness and slow living can help create space for clarity and creativity.",
    5: "Creating a life filled with intention and gratitude starts with simple daily choices.",
    6: "Learn why self-care is essential for maintaining mental clarity and emotional health.",
    7: "Overcoming challenges builds emotional resilience and inner strength.",
    8: "Creativity blooms when you allow curiosity and imagination to lead the way.",
    9: "Finding beauty in everyday moments can improve happiness and wellbeing.",
    10: "The journey to becoming your best self starts with self-belief and patience."
  };

  return (
    <div className="posts-page">
      <h1>Blog Posts</h1>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>

          {/* Show custom preview text */}
          <p>{customPreviews[post.id] || post.body.slice(0, 120)}...</p>

          <Link to={`/posts/${post.id}`} style={{ color: "blue" }}>
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
