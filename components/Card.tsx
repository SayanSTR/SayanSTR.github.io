
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-purple-500/30 hover:ring-1 hover:ring-purple-500 ${className}`} // Changed background
    >
      {children}
    </div>
  );
};