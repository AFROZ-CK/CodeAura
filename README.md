# ⚡ CodeAura

> A social coding platform — share code reels, tackle daily challenges, climb the leaderboard, and discover developer jobs.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Feed** | Browse and share code posts with syntax-highlighted snippets |
| 🎬 **Code Reels** | Short-form code demos and tutorials (like TikTok for devs) |
| 🧩 **Daily Challenges** | Solve a new coding challenge every day and earn points |
| 🏆 **Leaderboard** | All-time and weekly rankings by points, streaks, and contributions |
| 💼 **Jobs Board** | Community-shared developer job listings and opportunities |
| 👤 **Profile** | Track your rank, streak, followers, and coding stats |

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| **Frontend** | React 19 + TypeScript, Create React App |
| **Backend** | Node.js + Express 5 + TypeScript |
| **Dev Tools** | `ts-node-dev` (hot reload), `concurrently` (run both servers) |
| **Runtime** | Node.js 18+ |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** — [download](https://nodejs.org/)
- **npm 9+** (bundled with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/AFROZ-CK/CodeAura.git
cd CodeAura
```

### 2. Install all dependencies (root + backend + frontend)

```bash
npm run install:all
```

### 3. Set up environment variables

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

Edit the `.env` files as needed (see [Environment Variables](#-environment-variables)).

### 4. Run both servers in development mode

```bash
npm run dev
```

This starts:
- 🟣 **Backend** → `http://localhost:4000`
- 🔵 **Frontend** → `http://localhost:3000`

---

## 📜 Available Scripts

Run from the **root** directory:

| Script | Description |
|---|---|
| `npm run install:all` | Install dependencies for root, backend, and frontend |
| `npm run dev` | Start both backend and frontend in development mode |
| `npm run dev:backend` | Start backend only (`ts-node-dev` with hot reload) |
| `npm run dev:frontend` | Start frontend only (`react-scripts start`) |
| `npm run build` | Build both backend and frontend for production |
| `npm run build:backend` | Compile backend TypeScript to `backend/dist/` |
| `npm run build:frontend` | Create optimized frontend build in `frontend/build/` |
| `npm run test:frontend` | Run frontend tests (non-interactive) |

---

## 🌐 API Endpoints

Base URL: `http://localhost:4000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/posts` | List all posts |
| GET | `/api/posts/:id` | Get a post |
| POST | `/api/posts` | Create a post |
| GET | `/api/reels` | List all reels |
| GET | `/api/reels/:id` | Get a reel |
| POST | `/api/reels` | Create a reel |
| GET | `/api/challenges` | List all challenges |
| GET | `/api/challenges/today` | Get today's challenge |
| GET | `/api/leaderboard` | All-time leaderboard |
| GET | `/api/leaderboard/weekly` | Weekly leaderboard |
| GET | `/api/jobs` | List all jobs |
| GET | `/api/jobs/:id` | Get a job |
| POST | `/api/jobs` | Post a job |
| GET | `/api/users` | List users |
| GET | `/api/users/:username` | Get a user profile |

---

## 🔐 Environment Variables

### `backend/.env`

| Variable | Default | Description |
|---|---|---|
| `PORT` | `4000` | Port the backend server listens on |
| `CORS_ORIGIN` | `http://localhost:3000` | Allowed frontend origin |
| `NODE_ENV` | `development` | Environment (`development`/`production`) |
| `MONGODB_URI` | _(optional)_ | MongoDB connection string (for future persistence) |
| `JWT_SECRET` | _(optional)_ | Secret key for JWT auth tokens |

### `frontend/.env`

| Variable | Default | Description |
|---|---|---|
| `REACT_APP_API_URL` | `http://localhost:4000/api` | Backend API base URL |
| `REACT_APP_NAME` | `CodeAura` | Application display name |

---

## 📁 Project Structure

```
CodeAura/
├── package.json              ← Root scripts (concurrently, install:all)
├── .gitignore
├── README.md
│
├── backend/
│   ├── src/
│   │   ├── index.ts          ← Express app entry point
│   │   ├── models/
│   │   │   └── types.ts      ← TypeScript interfaces
│   │   └── routes/
│   │       ├── posts.ts
│   │       ├── reels.ts
│   │       ├── challenges.ts
│   │       ├── leaderboard.ts
│   │       ├── jobs.ts
│   │       └── users.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.tsx            ← Root component with navigation
    │   ├── App.css            ← Global styles & CodeAura theme
    │   ├── api/
    │   │   └── index.ts       ← API client functions
    │   ├── types/
    │   │   └── index.ts       ← Shared TypeScript types
    │   ├── components/
    │   │   ├── Navbar.tsx
    │   │   ├── PostCard.tsx
    │   │   ├── ReelCard.tsx
    │   │   └── JobCard.tsx
    │   └── pages/
    │       ├── Feed.tsx
    │       ├── Reels.tsx
    │       ├── Challenges.tsx
    │       ├── Leaderboard.tsx
    │       ├── Jobs.tsx
    │       └── Profile.tsx
    ├── .env.example
    ├── package.json
    └── tsconfig.json
```

---

## 🧪 Testing

### Frontend tests

```bash
npm run test:frontend
```

### Manual API testing (with curl)

```bash
# Health check
curl http://localhost:4000/health

# Get all posts
curl http://localhost:4000/api/posts

# Get today's challenge
curl http://localhost:4000/api/challenges/today

# Get leaderboard
curl http://localhost:4000/api/leaderboard
```

---

## 🛣️ Roadmap

- [ ] MongoDB persistence layer (Mongoose models)
- [ ] JWT authentication & user registration/login
- [ ] GitHub OAuth login
- [ ] Real-time notifications (Socket.io)
- [ ] In-browser code editor (Monaco Editor)
- [ ] Video upload for Code Reels
- [ ] Comments on posts & reels
- [ ] Follow / unfollow users
- [ ] Push notifications
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

ISC © [AFROZ-CK](https://github.com/AFROZ-CK)
