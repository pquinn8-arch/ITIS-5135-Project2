import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.jsx";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={styles.header}>
      <h1>Precious Garden Blog</h1>

      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
          <li>
  <Link to="/new-post" style={styles.navLink}>Create Post</Link>
</li>


          {/* 🌙 Theme Toggle Button */}
          <li>
            <button onClick={toggleTheme} style={styles.toggleBtn}>
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>
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
    alignItems: "center"
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
};

export default Header;
