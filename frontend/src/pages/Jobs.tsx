import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import { api } from '../api';
import type { Job } from '../types';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const JOB_TYPES = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];

  useEffect(() => {
    api.jobs
      .list()
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load jobs. Make sure the backend is running.');
        setLoading(false);
      });
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter((j) => j.type === filter);

  if (loading) return <div className="loading">Loading jobs…</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="page">
      <h2 className="page-title">💼 Developer Jobs</h2>
      <p className="page-subtitle">Hand-picked job opportunities shared by the community</p>

      <div className="tab-group">
        {JOB_TYPES.map((type) => (
          <button
            key={type}
            className={`tab-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="empty-state">No jobs found for this filter.</p>
      )}
    </div>
  );
};

export default Jobs;
