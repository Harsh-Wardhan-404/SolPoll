import React from 'react';
import { TrendingUp, Plus } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Decentralized Decisions
          </span>
          <br />
          <span>Powered by Community</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Create polls, vote on decisions, and earn rewards in a transparent, 
          decentralized environment. Your opinion matters and now it pays too.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
            <Plus size={20} />
            Create a Poll
          </button>
          <button className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
            <TrendingUp size={20} />
            Explore Polls
          </button>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <div>
            <p className="text-3xl font-bold text-white">1.2K+</p>
            <p>Active Polls</p>
          </div>
          <div className="border-l border-gray-700"></div>
          <div>
            <p className="text-3xl font-bold text-white">240K+</p>
            <p>Community Votes</p>
          </div>
          <div className="border-l border-gray-700"></div>
          <div>
            <p className="text-3xl font-bold text-white">135K</p>
            <p>SOL Awarded</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;