import { useState, ChangeEvent, FormEvent } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Handle change in comment input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  // Handle comment submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment(''); // Clear input field after submission
    }
  };

  return (
    <div className="comment-section">
      <div className="comments-list">
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <style jsx>{`
        .comment-section {
          padding: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .comments-list {
          margin-bottom: 16px;
        }
        .comment-item {
          margin-bottom: 8px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .comment-form {
          display: flex;
          gap: 8px;
        }
        .comment-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .submit-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #F35C7A;
          color: white;
          cursor: pointer;
        }
        .submit-button:hover {
          background-color:#F35C7A;
        }
      `}</style>
    </div>
  );
};

export default CommentSection;
