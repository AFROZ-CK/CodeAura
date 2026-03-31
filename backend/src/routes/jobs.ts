import { Router } from 'express';
import type { Request, Response } from 'express';
import type { Job } from '../models/types.js';

const router = Router();

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Engineer (React/TypeScript)',
    company: 'TechStart Inc.',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable React applications with TypeScript. Join our growing team working on cutting-edge web products.',
    requirements: ['3+ years React experience', 'TypeScript proficiency', 'REST API integration', 'Git workflow'],
    salary: '$80,000 - $110,000',
    applyUrl: 'https://example.com/apply/1',
    postedBy: { id: 'u2', username: 'code_ninja', displayName: 'Code Ninja', avatarUrl: '' },
    tags: ['react', 'typescript', 'frontend', 'remote'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Backend Node.js Developer',
    company: 'CloudBase',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Design and build RESTful APIs using Node.js, Express, and MongoDB for a cloud-native SaaS platform.',
    requirements: ['Node.js & Express', 'MongoDB or PostgreSQL', 'Docker basics', 'CI/CD pipelines'],
    salary: '₹12L - ₹20L per annum',
    applyUrl: 'https://example.com/apply/2',
    postedBy: { id: 'u4', username: 'ts_wizard', displayName: 'TS Wizard', avatarUrl: '' },
    tags: ['nodejs', 'backend', 'mongodb', 'api'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Full Stack Internship',
    company: 'CodeAura Labs',
    location: 'Remote',
    type: 'Internship',
    description: 'Work on real projects using React and Node.js. Perfect for students looking to gain industry experience.',
    requirements: ['Basic JavaScript/TypeScript', 'Familiarity with React', 'Eagerness to learn'],
    salary: '$500/month stipend',
    applyUrl: 'https://example.com/apply/3',
    postedBy: { id: 'u1', username: 'afroz_dev', displayName: 'Afroz', avatarUrl: '' },
    tags: ['internship', 'fullstack', 'react', 'nodejs'],
    createdAt: new Date().toISOString(),
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: jobs, total: jobs.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const job = jobs.find((j) => j.id === req.params['id']);
  if (!job) {
    res.status(404).json({ success: false, message: 'Job not found' });
    return;
  }
  res.json({ success: true, data: job });
});

router.post('/', (req: Request, res: Response) => {
  const newJob: Job = {
    id: String(jobs.length + 1),
    ...req.body as Omit<Job, 'id' | 'createdAt'>,
    createdAt: new Date().toISOString(),
  };
  jobs.push(newJob);
  res.status(201).json({ success: true, data: newJob });
});

export default router;
