import React from 'react';
import { Award, ArrowUp } from 'lucide-react';

export interface UserProps {
  id: string;
  name: string;
  avatar: string;
  karma: number;
  rank: number;
  polls: number;
  change: number;
}

const UserCard = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-800/60 rounded-lg transition-colors">
      <div className="flex-shrink-0 w-10 text-center">
        <span className={`font-semibold ${
          user.rank <= 3 ? 'text-amber-400' : 'text-gray-400'
        }`}>
          #{user.rank}
        </span>
      </div>
      
      <div className="flex-shrink-0">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-10 h-10 rounded-full border border-gray-700"
        />
      </div>
      
      <div className="flex-grow">
        <h4 className="font-medium">{user.name}</h4>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Award size={14} />
            {user.karma} karma
          </span>
          <span>{user.polls} polls</span>
        </div>
      </div>
      
      <div className={`flex items-center gap-1 ${
        user.change > 0 ? 'text-green-400' : 'text-red-400'
      }`}>
        <ArrowUp size={14} className={user.change < 0 ? 'rotate-180' : ''} />
        <span>{Math.abs(user.change)}%</span>
      </div>
    </div>
  );
};

export default UserCard;