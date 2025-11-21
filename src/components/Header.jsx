import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { useAuth } from "../Context/AuthContext.jsx";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();            // clear user
    navigate("/");       // send them back home
  }

  return (
    <header style={styles.header}>
      <h1>Precious Garden Blog</h1>

      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
          <li><Link to="/new-post" style={styles.navLink}>Create Post</Link></li>

          {/* 🌙 Theme Toggle Button */}
          <li>
            <button onClick={toggleTheme} style={styles.toggleBtn}>
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>

          {/* 🔐 Logout Button – only when logged in */}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout} style={styles.logoutBtn}>
                Log Out ({user?.username})
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "rgba(40, 44, 52, 0.9)",
    color: "white",
    padding: "1rem 0",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    alignItems: "center",
    flexWrap: "wrap"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  toggleBtn: {
    background: "transparent",
    border: "1px solid white",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "0.3s",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #e1b574",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "#e1b574",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    transition: "0.3s",
  },
};

export default Header;
