import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Reels from './pages/Reels';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';

type Page = 'feed' | 'reels' | 'challenges' | 'leaderboard' | 'jobs' | 'profile';

function App() {
  const [activePage, setActivePage] = useState<Page>('feed');

  const renderPage = () => {
    switch (activePage) {
      case 'feed': return <Feed />;
      case 'reels': return <Reels />;
      case 'challenges': return <Challenges />;
      case 'leaderboard': return <Leaderboard />;
      case 'jobs': return <Jobs />;
      case 'profile': return <Profile />;
      default: return <Feed />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} onNavigate={(p) => setActivePage(p as Page)} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
