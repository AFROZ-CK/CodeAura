import React from 'react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'feed', label: '🏠 Feed' },
  { id: 'reels', label: '🎬 Reels' },
  { id: 'challenges', label: '🧩 Challenges' },
  { id: 'leaderboard', label: '🏆 Leaderboard' },
  { id: 'jobs', label: '💼 Jobs' },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('feed')}>
        <span className="brand-logo">⚡</span>
        <span className="brand-name">CodeAura</span>
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="navbar-actions">
        <button className="btn-primary" onClick={() => onNavigate('profile')}>
          👤 Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
