import React, { useState } from 'react';
import { Grid } from 'lucide-react';
import PollCard from './PollCard';
import { categoryPolls } from '../data/mockData';

const categories = [
  { id: 'career', label: 'Career' },
  { id: 'life', label: 'Life' },
  { id: 'tech', label: 'Tech' },
  { id: 'finance', label: 'Finance' },
  { id: 'health', label: 'Health' },
  { id: 'entertainment', label: 'Entertainment' },
];

const PollCategories = () => {
  const [activeCategory, setActiveCategory] = useState('career');
  
  const filteredPolls = categoryPolls.filter(
    poll => poll.category.toLowerCase() === activeCategory
  );

  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-8">
        <Grid className="text-purple-400" size={24} />
        <h2 className="text-2xl font-bold">Explore Categories</h2>
      </div>
      
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPolls.map(poll => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="px-6 py-2 text-blue-400 hover:text-blue-300 transition-colors">
          See more in {categories.find(c => c.id === activeCategory)?.label}
        </button>
      </div>
    </section>
  );
};

export default PollCategories;