import { Router } from 'express';
import type { Request, Response } from 'express';
import type { Reel } from '../models/types.js';

const router = Router();

const sampleReels: Reel[] = [
  {
    id: '1',
    authorId: 'u1',
    author: { id: 'u1', username: 'afroz_dev', displayName: 'Afroz', avatarUrl: '' },
    title: 'Build a REST API in 60 seconds',
    description: 'Quick demo of setting up Express with TypeScript',
    codeSnippet: "import express from 'express';\nconst app = express();\napp.get('/', (_, res) => res.json({ msg: 'Hello!' }));\napp.listen(3000);",
    language: 'typescript',
    duration: 60,
    viewsCount: 1240,
    likesCount: 310,
    commentsCount: 22,
    tags: ['express', 'typescript', 'api'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    authorId: 'u3',
    author: { id: 'u3', username: 'react_queen', displayName: 'React Queen', avatarUrl: '' },
    title: 'Custom Hook in 30s',
    description: 'How to build a reusable useFetch hook',
    codeSnippet: "function useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);\n  return data;\n}",
    language: 'typescript',
    duration: 30,
    viewsCount: 5600,
    likesCount: 892,
    commentsCount: 67,
    tags: ['react', 'hooks', 'typescript'],
    createdAt: new Date().toISOString(),
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: sampleReels, total: sampleReels.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const reel = sampleReels.find((r) => r.id === req.params['id']);
  if (!reel) {
    res.status(404).json({ success: false, message: 'Reel not found' });
    return;
  }
  res.json({ success: true, data: reel });
});

router.post('/', (req: Request, res: Response) => {
  const newReel: Reel = {
    id: String(sampleReels.length + 1),
    ...req.body as Omit<Reel, 'id' | 'viewsCount' | 'likesCount' | 'commentsCount' | 'createdAt'>,
    viewsCount: 0,
    likesCount: 0,
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  };
  sampleReels.push(newReel);
  res.status(201).json({ success: true, data: newReel });
});

export default router;
