import React from 'react';
import { Timer, Award, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react';

export interface PollProps {
  id: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
  };
  category: string;
  rewardPool: string;
  votes: number;
  comments: number;
  timeLeft: string;
  isPremium?: boolean;
  isTrending?: boolean;
}

const PollCard = ({ poll }: { poll: PollProps }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 group">
      <div className="p-6">
        {/* Status badges */}
        <div className="flex gap-2 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
            {poll.category}
          </span>
          
          {poll.isPremium && (
            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center gap-1">
              <Award size={12} />
              Premium
            </span>
          )}
          
          {poll.isTrending && (
            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center gap-1">
              <ThumbsUp size={12} />
              Trending
            </span>
          )}
        </div>
        
        {/* Poll Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
          {poll.title}
        </h3>
        
        {/* Creator info */}
        <div className="flex items-center gap-2 mb-4">
          <img 
            src={poll.creator.avatar} 
            alt={poll.creator.name} 
            className="w-8 h-8 rounded-full border border-gray-600"
          />
          <span className="text-sm text-gray-400">Created by</span>
          <span className="text-sm font-medium">{poll.creator.name}</span>
        </div>
        
        {/* Poll stats */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MessageCircle size={16} />
            <span>{poll.comments}</span>
            <span className="mx-2">•</span>
            <ThumbsUp size={16} />
            <span>{poll.votes}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400">
              <Award size={16} />
              <span className="font-semibold">{poll.rewardPool}</span>
            </div>
            
            <div className="flex items-center gap-1 text-red-400">
              <Timer size={16} />
              <span className="font-semibold">{poll.timeLeft}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card footer */}
      <div className="bg-gray-700/30 p-3 flex justify-between items-center border-t border-gray-700">
        <button className="text-sm text-gray-300 hover:text-white transition-colors">
          <span>View Details</span>
        </button>
        
        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
          <span>Vote Now</span>
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default PollCard;