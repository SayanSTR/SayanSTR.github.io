
import React from 'react';
import { YOUR_NAME } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-200 text-center py-8 border-t border-slate-300"> {/* Changed background and border color */}
      <div className="container mx-auto px-4">
        <p className="text-sm text-slate-600"> {/* Changed text color */}
          &copy; {currentYear} {YOUR_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 mt-2"> {/* Changed text color */}
          Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">Tailwind CSS</a>. Hosted on GitHub Pages. {/* Kept purple hover for links */}
        </p>
      </div>
    </footer>
  );
};