import React from 'react';
import { Clock, Users, CheckCircle2 } from 'lucide-react';

interface RoadmapCardProps {
  title: string;
  description: string;
  progress: number;
  team: string;
  targetDate: string;
  status: 'in-progress' | 'completed' | 'planned';
}

export function RoadmapCard({ title, description, progress, team, targetDate, status }: RoadmapCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'completed' ? 'bg-green-500/20 text-green-400' :
          status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
          'bg-gray-500/20 text-gray-400'
        }`}>
          {status === 'completed' ? 'Completed' : 
           status === 'in-progress' ? 'In Progress' : 'Planned'}
        </span>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="space-y-4">
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>{team}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{targetDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}