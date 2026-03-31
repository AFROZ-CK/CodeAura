import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import postsRouter from './routes/posts.js';
import reelsRouter from './routes/reels.js';
import challengesRouter from './routes/challenges.js';
import leaderboardRouter from './routes/leaderboard.js';
import jobsRouter from './routes/jobs.js';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000' }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'CodeAura API' });
});

app.use('/api/posts', postsRouter);
app.use('/api/reels', reelsRouter);
app.use('/api/challenges', challengesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`CodeAura backend running on http://localhost:${PORT}`);
});

export default app;
