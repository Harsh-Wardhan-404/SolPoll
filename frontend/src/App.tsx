import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPolls from './components/FeaturedPolls';
import HowItWorks from './components/HowItWorks';
import PollCategories from './components/PollCategories';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Hero />
        <FeaturedPolls />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          <div className="lg:col-span-2">
            <HowItWorks />
            <PollCategories />
          </div>
          <div>
            <Leaderboard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;