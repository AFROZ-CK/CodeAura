import React from 'react';
import type { Reel } from '../types';

interface ReelCardProps {
  reel: Reel;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
  return (
    <div className="card reel-card">
      <div className="reel-thumbnail">
        <div className="reel-play-icon">▶</div>
        <span className="reel-duration">{reel.duration}s</span>
      </div>
      <div className="card-body">
        <div className="card-header" style={{ padding: 0, marginBottom: '0.5rem' }}>
          <div className="avatar small">{reel.author.displayName.charAt(0).toUpperCase()}</div>
          <div className="author-info">
            <span className="author-name">{reel.author.displayName}</span>
            <span className="author-username">@{reel.author.username}</span>
          </div>
          <span className="badge badge-language">{reel.language}</span>
        </div>
        <h3 className="card-title">{reel.title}</h3>
        <p className="card-content">{reel.description}</p>
        <pre className="code-block">
          <code>{reel.codeSnippet}</code>
        </pre>
        <div className="tags">
          {reel.tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <span className="action-btn">👁️ {reel.viewsCount.toLocaleString()}</span>
        <button className="action-btn">❤️ {reel.likesCount}</button>
        <button className="action-btn">💬 {reel.commentsCount}</button>
        <button className="action-btn">🔗 Share</button>
      </div>
    </div>
  );
};

export default ReelCard;
