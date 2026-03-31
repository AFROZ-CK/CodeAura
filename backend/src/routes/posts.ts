import { Router } from 'express';
import type { Request, Response } from 'express';
import type { Post } from '../models/types.js';

const router = Router();

const samplePosts: Post[] = [
  {
    id: '1',
    authorId: 'u1',
    author: { id: 'u1', username: 'afroz_dev', displayName: 'Afroz', avatarUrl: '' },
    title: 'Mastering TypeScript Generics',
    content: 'Generics let you write flexible, reusable components. Here\'s a quick example:',
    language: 'typescript',
    codeSnippet: 'function identity<T>(arg: T): T {\n  return arg;\n}\nconst result = identity<string>("CodeAura");',
    tags: ['typescript', 'generics', 'tips'],
    likesCount: 42,
    commentsCount: 7,
    isPublic: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    authorId: 'u2',
    author: { id: 'u2', username: 'code_ninja', displayName: 'Code Ninja', avatarUrl: '' },
    title: 'React useEffect Tips',
    content: 'Avoid unnecessary re-renders with proper dependency arrays.',
    language: 'javascript',
    codeSnippet: 'useEffect(() => {\n  fetchData();\n}, [userId]); // only re-run when userId changes',
    tags: ['react', 'hooks', 'performance'],
    likesCount: 89,
    commentsCount: 14,
    isPublic: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: samplePosts, total: samplePosts.length });
});

router.get('/:id', (req: Request, res: Response) => {
  const post = samplePosts.find((p) => p.id === req.params['id']);
  if (!post) {
    res.status(404).json({ success: false, message: 'Post not found' });
    return;
  }
  res.json({ success: true, data: post });
});

router.post('/', (req: Request, res: Response) => {
  const newPost: Post = {
    id: String(samplePosts.length + 1),
    ...req.body as Omit<Post, 'id' | 'createdAt' | 'updatedAt'>,
    likesCount: 0,
    commentsCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  samplePosts.push(newPost);
  res.status(201).json({ success: true, data: newPost });
});

router.delete('/:id', (req: Request, res: Response) => {
  const index = samplePosts.findIndex((p) => p.id === req.params['id']);
  if (index === -1) {
    res.status(404).json({ success: false, message: 'Post not found' });
    return;
  }
  samplePosts.splice(index, 1);
  res.json({ success: true, message: 'Post deleted' });
});

export default router;
