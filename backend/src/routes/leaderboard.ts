import { Router } from 'express';
import type { Request, Response } from 'express';
import type { LeaderboardEntry } from '../models/types.js';

const router = Router();

const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    user: { id: 'u1', username: 'afroz_dev', displayName: 'Afroz', avatarUrl: '' },
    points: 4850,
    streak: 42,
    challengesSolved: 97,
    postsCount: 34,
  },
  {
    rank: 2,
    user: { id: 'u3', username: 'react_queen', displayName: 'React Queen', avatarUrl: '' },
    points: 4210,
    streak: 30,
    challengesSolved: 84,
    postsCount: 61,
  },
  {
    rank: 3,
    user: { id: 'u2', username: 'code_ninja', displayName: 'Code Ninja', avatarUrl: '' },
    points: 3990,
    streak: 21,
    challengesSolved: 79,
    postsCount: 45,
  },
  {
    rank: 4,
    user: { id: 'u4', username: 'ts_wizard', displayName: 'TS Wizard', avatarUrl: '' },
    points: 3500,
    streak: 15,
    challengesSolved: 70,
    postsCount: 28,
  },
  {
    rank: 5,
    user: { id: 'u5', username: 'algo_king', displayName: 'Algo King', avatarUrl: '' },
    points: 3100,
    streak: 9,
    challengesSolved: 63,
    postsCount: 19,
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: leaderboard, total: leaderboard.length });
});

router.get('/weekly', (_req: Request, res: Response) => {
  const weekly = leaderboard.map((entry) => ({
    ...entry,
    points: Math.floor(entry.points * 0.2),
  }));
  res.json({ success: true, data: weekly, total: weekly.length });
});

export default router;
