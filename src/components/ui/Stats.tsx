import React from 'react';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

interface StatsProps {
  completed: number;
  inProgress: number;
  planned: number;
}

export function Stats({ completed, inProgress, planned }: StatsProps) {
  const stats = [
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle2,
      color: 'text-green-400',
    },
    {
      label: 'In Progress',
      value: inProgress,
      icon: Clock,
      color: 'text-blue-400',
    },
    {
      label: 'Planned',
      value: planned,
      icon: Calendar,
      color: 'text-gray-400',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`w-5 h-5 ${color}`} />
            <span className="text-sm text-gray-400">{label}</span>
          </div>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}