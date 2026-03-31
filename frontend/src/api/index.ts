import type { ApiResponse, Post, Reel, DailyChallenge, LeaderboardEntry, Job, User } from '../types';

const BASE_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:4000/api';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  posts: {
    list: () => get<ApiResponse<Post[]>>('/posts'),
    get: (id: string) => get<ApiResponse<Post>>(`/posts/${id}`),
  },
  reels: {
    list: () => get<ApiResponse<Reel[]>>('/reels'),
    get: (id: string) => get<ApiResponse<Reel>>(`/reels/${id}`),
  },
  challenges: {
    list: () => get<ApiResponse<DailyChallenge[]>>('/challenges'),
    today: () => get<ApiResponse<DailyChallenge>>('/challenges/today'),
    get: (id: string) => get<ApiResponse<DailyChallenge>>(`/challenges/${id}`),
  },
  leaderboard: {
    list: () => get<ApiResponse<LeaderboardEntry[]>>('/leaderboard'),
    weekly: () => get<ApiResponse<LeaderboardEntry[]>>('/leaderboard/weekly'),
  },
  jobs: {
    list: () => get<ApiResponse<Job[]>>('/jobs'),
    get: (id: string) => get<ApiResponse<Job>>(`/jobs/${id}`),
  },
  users: {
    list: () => get<ApiResponse<User[]>>('/users'),
    get: (username: string) => get<ApiResponse<User>>(`/users/${username}`),
  },
};
