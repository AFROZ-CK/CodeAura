import { Router } from 'express';
import type { Request, Response } from 'express';
import type { DailyChallenge } from '../models/types.js';

const router = Router();

const challenges: DailyChallenge[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.',
    difficulty: 'Easy',
    language: 'typescript',
    starterCode: 'function twoSum(nums: number[], target: number): number[] {\n  // your code here\n}',
    solutionCode: 'function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - (nums[i] ?? 0);\n    if (map.has(complement)) return [map.get(complement)!, i];\n    map.set(nums[i] ?? 0, i);\n  }\n  return [];\n}',
    exampleInput: 'nums = [2,7,11,15], target = 9',
    exampleOutput: '[0, 1]',
    points: 50,
    solvedCount: 1234,
    date: new Date().toISOString().split('T')[0] ?? new Date().toISOString(),
  },
  {
    id: '2',
    title: 'FizzBuzz',
    description: 'Write a function that returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.',
    difficulty: 'Easy',
    language: 'typescript',
    starterCode: 'function fizzBuzz(n: number): string[] {\n  // your code here\n}',
    solutionCode: 'function fizzBuzz(n: number): string[] {\n  return Array.from({ length: n }, (_, i) => {\n    const v = i + 1;\n    if (v % 15 === 0) return "FizzBuzz";\n    if (v % 3 === 0) return "Fizz";\n    if (v % 5 === 0) return "Buzz";\n    return String(v);\n  });\n}',
    exampleInput: 'n = 5',
    exampleOutput: '["1","2","Fizz","4","Buzz"]',
    points: 30,
    solvedCount: 4567,
    date: new Date().toISOString().split('T')[0] ?? new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Valid Parentheses',
    description: 'Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.',
    difficulty: 'Medium',
    language: 'typescript',
    starterCode: 'function isValid(s: string): boolean {\n  // your code here\n}',
    exampleInput: 's = "()[]{}"',
    exampleOutput: 'true',
    points: 100,
    solvedCount: 891,
    date: new Date().toISOString().split('T')[0] ?? new Date().toISOString(),
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: challenges, total: challenges.length });
});

router.get('/today', (_req: Request, res: Response) => {
  const today = new Date().toISOString().split('T')[0];
  const todayChallenge = challenges.find((c) => c.date === today) ?? challenges[0];
  res.json({ success: true, data: todayChallenge });
});

router.get('/:id', (req: Request, res: Response) => {
  const challenge = challenges.find((c) => c.id === req.params['id']);
  if (!challenge) {
    res.status(404).json({ success: false, message: 'Challenge not found' });
    return;
  }
  res.json({ success: true, data: challenge });
});

export default router;
