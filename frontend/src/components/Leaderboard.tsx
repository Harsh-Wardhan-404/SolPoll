import React from 'react';
import { Trophy } from 'lucide-react';
import UserCard from './UserCard';
import { topUsers } from '../data/mockData';

const Leaderboard = () => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="text-amber-400" size={20} />
          <h3 className="text-xl font-bold">Top Contributors</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Users with the highest karma from quality polls and participation.
        </p>
      </div>
      
      <div className="divide-y divide-gray-700/60">
        {topUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      
      <div className="p-4 text-center border-t border-gray-700">
        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;