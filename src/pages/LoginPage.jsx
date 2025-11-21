// src/pages/LoginPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";

export default function LoginPage() {
  const { isAuthenticated, login, user, logout } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // If already logged in, we can send them to the posts page
    if (isAuthenticated) {
      // Small delay so user can see the message if we want
      // navigate("/posts", { replace: true });
    }
  }, [isAuthenticated]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const { username, password } = formData;
    const result = login(username.trim(), password.trim());

    if (!result.success) {
      setError(result.message || "Login failed.");
      return;
    }

    // On successful login, go to the protected blog posts page
    navigate("/posts");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Sign in to explore your blog, create posts, and join the conversation.
        </p>

        {isAuthenticated && (
          <div className="login-info">
            <p>
              You are currently logged in as{" "}
              <strong>{user?.username}</strong>.
            </p>
            <button
              type="button"
              className="btn-outline btn-sm"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Log out
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="btn-primary login-button">
            Log In
          </button>
        </form>

        <p className="login-footer">
        </p>
      </div>
    </div>
  );
}
