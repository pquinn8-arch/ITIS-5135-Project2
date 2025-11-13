import { useState } from 'react';

function Post({ title, content, author, date }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><em>{date}</em></p>

      <button onClick={() => setLikes(likes + 1)} className="like-btn">
        ❤️ Like ({likes})
      </button>
    </div>
  );
}

export default Post;
