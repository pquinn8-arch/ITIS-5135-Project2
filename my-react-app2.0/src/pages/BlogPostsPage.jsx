import { Link } from "react-router-dom";
import Post from "../components/Post";
import CommentBox from "../components/CommentBox";

function BlogPostsPage({ blogPosts, comments, addComment, likes, addLike }) {
  return (
    <>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <Link
            to={`/post/${index}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Post
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              likes={likes[index] || 0}
              onLike={() => addLike(index)}
            />
          </Link>

          <div style={{ background: "rgba(255,255,255,0.8)", padding: "10px", borderRadius: "8px" }}>
            <h4>Comments</h4>

            {(comments[index] && comments[index].length > 0) ? (
              comments[index].map((c, i) => (
                <p 
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    padding: "6px",
                    borderRadius: "5px",
                    marginBottom: "6px"
                  }}
                >
                  <strong>{c.name}:</strong> {c.comment}
                </p>
              ))
            ) : (
              <p style={{ fontStyle: "italic", color: "#333" }}>
                No comments yet. Be the first to comment!
              </p>
            )}

            <CommentBox onAddComment={(name, comment) => addComment(index, name, comment)} />
          </div>

          <hr />
        </div>
      ))}
    </>
  );
}

export default BlogPostsPage;
