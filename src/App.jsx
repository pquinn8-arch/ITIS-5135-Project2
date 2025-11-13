import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import BlogPostsPage from "./pages/BlogPostsPage"; // now API-based list page
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndividualPostPage from "./pages/IndividualPostPage"; // API-based single post page
import CreatePostPage from "./pages/CreatePostPage"; // keep this (assignment didn't require removal)

function App() {
  
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />

          <main style={styles.main}>
            <Routes>

              {/* ✅ Home -> Redirect to blog posts */}
              <Route path="/" element={<BlogPostsPage />} />

              {/* ✅ Blog Posts List */}
              <Route path="/posts" element={<BlogPostsPage />} />

              {/* ✅ Individual Post Page */}
              <Route path="/posts/:postId" element={<IndividualPostPage />} />

              {/* ✅ Create Post Page (your existing feature) */}
              <Route path="/new-post" element={<CreatePostPage />} />

              {/* ✅ About & Contact Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

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
