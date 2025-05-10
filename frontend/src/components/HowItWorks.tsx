import React from 'react';
import { LightbulbIcon, Vote, Wallet } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <LightbulbIcon className="text-purple-400" size={24} />
        How SolPoll Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StepCard 
          number={1}
          title="Create a Poll"
          description="Set up your decision poll with specific options. Add a reward pool to increase engagement and visibility."
          icon={<LightbulbIcon size={32} className="text-purple-400" />}
        />
        
        <StepCard 
          number={2}
          title="Community Votes"
          description="The community casts votes on your poll, providing valuable insights and different perspectives."
          icon={<Vote size={32} className="text-blue-400" />}
        />
        
        <StepCard 
          number={3}
          title="Earn Rewards"
          description="Voters receive rewards from the pool based on participation. Poll creators earn karma for quality polls."
          icon={<Wallet size={32} className="text-green-400" />}
        />
      </div>
    </section>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => (
  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
      <span className="font-bold text-xl">{number}</span>
    </div>
    
    <div className="mb-4">
      {icon}
    </div>
    
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    
    <p className="text-gray-400">
      {description}
    </p>
  </div>
);

export default HowItWorks;