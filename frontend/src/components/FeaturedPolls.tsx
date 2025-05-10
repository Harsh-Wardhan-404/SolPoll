import React, { useState } from 'react';
import { Sparkle, TrendingUp, Award } from 'lucide-react';
import PollCard, { PollProps } from './PollCard';
import { featuredPolls } from '../data/mockData';

const FeaturedPolls = () => {
  const [activeTab, setActiveTab] = useState('trending');
  
  const filteredPolls = featuredPolls.filter(poll => {
    if (activeTab === 'trending') return poll.isTrending;
    if (activeTab === 'premium') return poll.isPremium;
    return true;
  });

  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Sparkle className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold">Featured Polls</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex border border-gray-700 rounded-lg overflow-hidden">
          <TabButton 
            isActive={activeTab === 'trending'} 
            onClick={() => setActiveTab('trending')}
            icon={<TrendingUp size={16} />}
            label="Trending"
          />
          <TabButton 
            isActive={activeTab === 'premium'} 
            onClick={() => setActiveTab('premium')}
            icon={<Award size={16} />}
            label="Premium"
          />
          <TabButton 
            isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
            icon={<Sparkle size={16} />}
            label="All"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPolls.map(poll => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-200">
          View All Polls
        </button>
      </div>
    </section>
  );
};

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton = ({ isActive, onClick, icon, label }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 flex items-center gap-2 transition-colors ${
      isActive 
        ? 'bg-gray-700 text-white' 
        : 'bg-transparent text-gray-400 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default FeaturedPolls;