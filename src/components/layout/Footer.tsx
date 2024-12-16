import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Project Roadmap. All rights reserved.</p>
      </div>
    </footer>
  );
}