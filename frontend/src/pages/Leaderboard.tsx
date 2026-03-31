import React, { useEffect, useState } from 'react';
import { api } from '../api';
import type { LeaderboardEntry } from '../types';

const Leaderboard: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [mode, setMode] = useState<'all-time' | 'weekly'>('all-time');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetch = mode === 'weekly' ? api.leaderboard.weekly() : api.leaderboard.list();
    fetch
      .then((res) => {
        setEntries(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load leaderboard. Make sure the backend is running.');
        setLoading(false);
      });
  }, [mode]);

  if (loading) return <div className="loading">Loading leaderboard…</div>;
  if (error) return <div className="error-msg">{error}</div>;

  const RANK_ICONS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

  return (
    <div className="page">
      <h2 className="page-title">🏆 Leaderboard</h2>
      <p className="page-subtitle">Top coders ranked by contributions and challenge scores</p>

      <div className="tab-group">
        <button
          className={`tab-btn ${mode === 'all-time' ? 'active' : ''}`}
          onClick={() => setMode('all-time')}
        >
          All Time
        </button>
        <button
          className={`tab-btn ${mode === 'weekly' ? 'active' : ''}`}
          onClick={() => setMode('weekly')}
        >
          This Week
        </button>
      </div>

      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <span>Rank</span>
          <span>Developer</span>
          <span>Points</span>
          <span>Streak 🔥</span>
          <span>Challenges</span>
          <span>Posts</span>
        </div>
        {entries.map((entry) => (
          <div
            key={entry.user.id}
            className={`leaderboard-row ${entry.rank <= 3 ? 'top-rank' : ''}`}
          >
            <span className="rank-cell">
              {RANK_ICONS[entry.rank] ?? `#${entry.rank}`}
            </span>
            <span className="user-cell">
              <div className="avatar small">{entry.user.displayName.charAt(0).toUpperCase()}</div>
              <div>
                <div className="author-name">{entry.user.displayName}</div>
                <div className="author-username">@{entry.user.username}</div>
              </div>
            </span>
            <span className="points-cell">{entry.points.toLocaleString()}</span>
            <span>{entry.streak} days</span>
            <span>{entry.challengesSolved}</span>
            <span>{entry.postsCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
