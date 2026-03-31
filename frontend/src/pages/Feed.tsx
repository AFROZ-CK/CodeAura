import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { api } from '../api';
import type { Post } from '../types';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.posts
      .list()
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load posts. Make sure the backend is running.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading feed…</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="page">
      <h2 className="page-title">🏠 Developer Feed</h2>
      <p className="page-subtitle">Latest code posts from the community</p>
      <div className="cards-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
