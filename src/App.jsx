// src/App.jsx
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import BlogPostsPage from "./pages/BlogPostsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import CreatePostPage from "./pages/CreatePostPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";

// Auth
import { AuthProvider } from "./Context/AuthContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />

            <main style={styles.main}>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/posts" element={<BlogPostsPage />} />
                  <Route path="/posts/:postId" element={<IndividualPostPage />} />
                  <Route path="/new-post" element={<CreatePostPage />} />
                </Route>

                {/* Fallback for unknown paths */}
                <Route path="*" element={<Homepage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = {
  main: {
    width: "90%",
    maxWidth: "900px",
    margin: "2rem auto",
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;
