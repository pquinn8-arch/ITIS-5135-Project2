// src/pages/Homepage.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";

export default function Homepage() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="landing-page">
      <div className="landing-inner">
        <p className="landing-tagline">Precious Quinn • Personal Blog</p>

        <h1 className="landing-title">
          Luminous thoughts,
          <span> curated with care.</span>
        </h1>

        <p className="landing-subtitle">
          Welcome to your blog space — a calm corner for reflection, growth,
          and positivity. Log in to explore posts, share your voice, and connect
          through your words.
        </p>

        {isAuthenticated && (
          <p className="landing-welcome">
            Signed in as <strong>{user?.username}</strong>. Ready to keep
            exploring?
          </p>
        )}

        <div className="landing-actions">
          <button
            className="btn-primary"
            onClick={() => navigate(isAuthenticated ? "/posts" : "/login")}
          >
            {isAuthenticated ? "Go to Blog" : "Log In"}
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/posts")}
          >
            Explore Blog
          </button>
        </div>

        <div className="landing-highlight">
          <h2>What you can do here</h2>
          <ul>
            <li>✨ Browse thoughtful blog posts</li>
            <li>📝 Create new posts when inspiration hits</li>
            <li>💬 Join the conversation with comments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
