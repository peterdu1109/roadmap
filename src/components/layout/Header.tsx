import React from 'react';
import { RocketIcon, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RocketIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl font-bold">Project Roadmap</h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track the development progress of our ambitious space simulation project.
            Discover upcoming features, improvements, and major milestones.
          </p>
        </div>
      </div>
      
      {/* Login Button */}
      <div className="absolute top-4 right-4 z-20">
        {!isAuthenticated ? (
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-lg backdrop-blur-sm flex items-center gap-2 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Admin Login
          </Link>
        ) : (
          <button
            onClick={() => navigate('/admin')}
            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-lg backdrop-blur-sm transition-colors"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
}