import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import BlogPostsPage from "./pages/BlogPostsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {

  // ✅ Blog posts state
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "The Beauty of Nature",
      content:
        "Tranquil beach, a meadow filled with wildflowers, or a garden surrounded by blooming plants...",
      author: "Precious Quinn",
      date: "October 24, 2025",
    },
    {
      title: "Embracing Growth",
      content:
        "Personal growth happens when we step out of our comfort zones...",
      author: "Precious Quinn",
      date: "October 22, 2025",
    },
    {
      title: "The Power of Positivity",
      content:
        "A positive mindset can turn obstacles into stepping stones...",
      author: "Precious Quinn",
      date: "October 20, 2025",
    },
  ]);

  // ✅ Comments state
  const [comments, setComments] = useState({});

  const addComment = (postId, name, comment) => {
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), { name, comment }],
    }));
  };

  // ✅ Likes state
  const [likes, setLikes] = useState(() => {
    return JSON.parse(localStorage.getItem("likes")) || {};
  });

  const addLike = (postId) => {
    const updated = { ...likes, [postId]: (likes[postId] || 0) + 1 };
    setLikes(updated);
    localStorage.setItem("likes", JSON.stringify(updated));
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />

          <main style={styles.main}>
            <Routes>

              {/* ✅ Home / Blog Page */}
              <Route 
                path="/" 
                element={
                  <BlogPostsPage
                    blogPosts={blogPosts}
                    comments={comments}
                    addComment={addComment}
                    likes={likes}
                    addLike={addLike}
                  />
                } 
              />

              {/* ✅ Create Post Page */}
              <Route 
                path="/new-post" 
                element={
                  <CreatePostPage 
                    blogPosts={blogPosts} 
                    setBlogPosts={setBlogPosts} 
                  />
                } 
              />

              {/* ✅ About & Contact */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* ✅ Individual Post Page */}
              <Route 
                path="/post/:id"
                element={
                  <IndividualPostPage
                    blogPosts={blogPosts}
                    comments={comments}
                    addComment={addComment}
                    likes={likes}
                    addLike={addLike}
                  />
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

const styles = {
  main: {
    width: "90%",
    maxWidth: "800px",
    margin: "2rem auto",
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;
