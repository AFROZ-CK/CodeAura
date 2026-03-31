import React, { useEffect, useState } from 'react';
import ReelCard from '../components/ReelCard';
import { api } from '../api';
import type { Reel } from '../types';

const Reels: React.FC = () => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.reels
      .list()
      .then((res) => {
        setReels(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load reels. Make sure the backend is running.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading reels…</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="page">
      <h2 className="page-title">🎬 Code Reels</h2>
      <p className="page-subtitle">Short code demos and tutorials from the community</p>
      <div className="cards-grid reels-grid">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default Reels;
