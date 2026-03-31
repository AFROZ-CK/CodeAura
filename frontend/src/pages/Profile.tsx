import React from 'react';

const Profile: React.FC = () => {
  const user = {
    displayName: 'Afroz',
    username: 'afroz_dev',
    bio: 'Full-stack developer | TypeScript enthusiast | Building CodeAura',
    rank: 1,
    points: 4850,
    streak: 42,
    followersCount: 1200,
    followingCount: 340,
  };

  return (
    <div className="page">
      <div className="profile-card card">
        <div className="profile-avatar">
          {user.displayName.charAt(0).toUpperCase()}
        </div>
        <h2 className="profile-name">{user.displayName}</h2>
        <p className="author-username">@{user.username}</p>
        <p className="profile-bio">{user.bio}</p>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.points.toLocaleString()}</span>
            <span className="stat-label">Points</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">#{user.rank}</span>
            <span className="stat-label">Rank</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.streak} 🔥</span>
            <span className="stat-label">Day Streak</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.followersCount.toLocaleString()}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.followingCount}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary">✏️ Edit Profile</button>
          <button className="btn-secondary">📤 Share Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
