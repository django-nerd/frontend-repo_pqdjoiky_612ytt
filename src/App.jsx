import React from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import HeroSpline from './components/HeroSpline';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 text-gray-900">
      <TopBar />
      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        <HeroSpline />
        <div className="mt-6 flex gap-6">
          <Sidebar />
          <section className="flex-1">
            <Dashboard />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
