import { Router } from 'express';
import type { Request, Response } from 'express';
import type { User } from '../models/types.js';

const router = Router();

const users: User[] = [
  {
    id: 'u1',
    username: 'afroz_dev',
    displayName: 'Afroz',
    avatarUrl: '',
    bio: 'Full-stack developer | TypeScript enthusiast | Building CodeAura',
    rank: 1,
    points: 4850,
    streak: 42,
    followersCount: 1200,
    followingCount: 340,
    createdAt: new Date('2024-01-15').toISOString(),
  },
  {
    id: 'u2',
    username: 'code_ninja',
    displayName: 'Code Ninja',
    avatarUrl: '',
    bio: 'Algorithms & Data Structures nerd. LeetCode grinder.',
    rank: 3,
    points: 3990,
    streak: 21,
    followersCount: 870,
    followingCount: 210,
    createdAt: new Date('2024-02-01').toISOString(),
  },
  {
    id: 'u3',
    username: 'react_queen',
    displayName: 'React Queen',
    avatarUrl: '',
    bio: 'UI/UX obsessed React developer. CSS wizard.',
    rank: 2,
    points: 4210,
    streak: 30,
    followersCount: 2100,
    followingCount: 450,
    createdAt: new Date('2024-01-28').toISOString(),
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: users, total: users.length });
});

router.get('/:username', (req: Request, res: Response) => {
  const user = users.find((u) => u.username === req.params['username']);
  if (!user) {
    res.status(404).json({ success: false, message: 'User not found' });
    return;
  }
  res.json({ success: true, data: user });
});

export default router;
