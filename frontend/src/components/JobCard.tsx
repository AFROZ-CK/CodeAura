import React from 'react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JOB_TYPE_COLORS: Record<string, string> = {
  'Full-time': '#22c55e',
  'Part-time': '#3b82f6',
  'Contract': '#f59e0b',
  'Internship': '#a855f7',
  'Remote': '#06b6d4',
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="card job-card">
      <div className="card-header">
        <div className="company-logo">{job.company.charAt(0).toUpperCase()}</div>
        <div className="author-info">
          <span className="author-name">{job.title}</span>
          <span className="author-username">{job.company} · {job.location}</span>
        </div>
        <span
          className="badge"
          style={{ backgroundColor: JOB_TYPE_COLORS[job.type] ?? '#6366f1', color: '#fff' }}
        >
          {job.type}
        </span>
      </div>
      <div className="card-body">
        <p className="card-content">{job.description}</p>
        <ul className="requirements-list">
          {job.requirements.map((req, i) => (
            <li key={i}>✓ {req}</li>
          ))}
        </ul>
        {job.salary && (
          <p className="salary">💰 {job.salary}</p>
        )}
        <div className="tags">
          {job.tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apply Now →
        </a>
        <span className="posted-by">Posted by @{job.postedBy.username}</span>
      </div>
    </div>
  );
};

export default JobCard;
