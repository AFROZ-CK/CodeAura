import React from 'react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="card post-card">
      <div className="card-header">
        <div className="avatar">{post.author.displayName.charAt(0).toUpperCase()}</div>
        <div className="author-info">
          <span className="author-name">{post.author.displayName}</span>
          <span className="author-username">@{post.author.username}</span>
        </div>
        <span className="badge badge-language">{post.language}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-content">{post.content}</p>
        {post.codeSnippet && (
          <pre className="code-block">
            <code>{post.codeSnippet}</code>
          </pre>
        )}
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <button className="action-btn">❤️ {post.likesCount}</button>
        <button className="action-btn">💬 {post.commentsCount}</button>
        <button className="action-btn">🔗 Share</button>
      </div>
    </div>
  );
};

export default PostCard;
