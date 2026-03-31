export interface User {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  rank: number;
  points: number;
  streak: number;
  followersCount: number;
  followingCount: number;
  createdAt: string;
}

export interface Post {
  id: string;
  authorId: string;
  author: Pick<User, 'id' | 'username' | 'displayName' | 'avatarUrl'>;
  title: string;
  content: string;
  language: string;
  codeSnippet?: string;
  tags: string[];
  likesCount: number;
  commentsCount: number;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Reel {
  id: string;
  authorId: string;
  author: Pick<User, 'id' | 'username' | 'displayName' | 'avatarUrl'>;
  title: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  codeSnippet: string;
  language: string;
  duration: number;
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  tags: string[];
  createdAt: string;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  language: string;
  starterCode: string;
  solutionCode?: string;
  exampleInput: string;
  exampleOutput: string;
  points: number;
  solvedCount: number;
  date: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatarUrl'>;
  points: number;
  streak: number;
  challengesSolved: number;
  postsCount: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  description: string;
  requirements: string[];
  salary?: string;
  applyUrl: string;
  postedBy: Pick<User, 'id' | 'username' | 'displayName' | 'avatarUrl'>;
  tags: string[];
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  message?: string;
}
