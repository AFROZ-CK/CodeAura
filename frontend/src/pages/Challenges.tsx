import React, { useEffect, useState } from 'react';
import { api } from '../api';
import type { DailyChallenge } from '../types';

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
};

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState<DailyChallenge[]>([]);
  const [selected, setSelected] = useState<DailyChallenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.challenges
      .list()
      .then((res) => {
        setChallenges(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load challenges. Make sure the backend is running.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading challenges…</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="page">
      <h2 className="page-title">🧩 Daily Code Challenges</h2>
      <p className="page-subtitle">Sharpen your skills with daily coding problems</p>

      {selected ? (
        <div className="challenge-detail card">
          <button className="btn-secondary" onClick={() => setSelected(null)}>← Back</button>
          <div className="card-header" style={{ marginTop: '1rem' }}>
            <h3 className="card-title">{selected.title}</h3>
            <span
              className="badge"
              style={{ backgroundColor: DIFFICULTY_COLORS[selected.difficulty] ?? '#6366f1', color: '#fff' }}
            >
              {selected.difficulty}
            </span>
            <span className="badge badge-language">{selected.language}</span>
            <span className="badge" style={{ backgroundColor: '#6366f1', color: '#fff' }}>
              🏆 {selected.points} pts
            </span>
          </div>
          <p className="card-content">{selected.description}</p>
          <div className="example-box">
            <strong>Input:</strong> <code>{selected.exampleInput}</code><br />
            <strong>Output:</strong> <code>{selected.exampleOutput}</code>
          </div>
          <h4>Starter Code:</h4>
          <pre className="code-block">
            <code>{selected.starterCode}</code>
          </pre>
          <div className="card-footer">
            <span className="stat">👥 {selected.solvedCount.toLocaleString()} solved</span>
            <button className="btn-primary">🚀 Submit Solution</button>
          </div>
        </div>
      ) : (
        <div className="cards-grid">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="card challenge-card" onClick={() => setSelected(challenge)}>
              <div className="card-header">
                <h3 className="card-title">{challenge.title}</h3>
                <span
                  className="badge"
                  style={{ backgroundColor: DIFFICULTY_COLORS[challenge.difficulty] ?? '#6366f1', color: '#fff' }}
                >
                  {challenge.difficulty}
                </span>
              </div>
              <div className="card-body">
                <p className="card-content">{challenge.description.substring(0, 100)}…</p>
                <span className="badge badge-language">{challenge.language}</span>
              </div>
              <div className="card-footer">
                <span className="stat">🏆 {challenge.points} pts</span>
                <span className="stat">👥 {challenge.solvedCount.toLocaleString()} solved</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
