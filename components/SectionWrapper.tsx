
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js'; // Added .js

interface SectionWrapperProps {
  id: string;
  title?: string; // Optional title to display within the section
  children: React.ReactNode;
  className?: string; // To accept background class, padding overrides, or other specific styling
  titleIcon?: React.ReactNode;
  style?: React.CSSProperties;
  noInternalPadding?: boolean; // New prop to control internal padding
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  children, 
  className: passedClassName = '', 
  titleIcon, 
  style,
  noInternalPadding = false // Default to having internal padding
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: id === 'hero' ? 0.05 : 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`min-h-screen snap-start flex items-center justify-center ${passedClassName} section-animate ${isVisible ? 'visible' : ''}`} 
      style={style}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {/* Inner container for content padding and max-width */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl w-full ${noInternalPadding ? '' : 'py-16 md:py-24'}`}>
        <div> {/* Wrapper for title and children */}
          {title && (
            <div className="mb-12 text-center">
              <h2 id={`${id}-title`} className="text-3xl md:text-4xl font-bold text-emerald-600 flex items-center justify-center space-x-3">
                {titleIcon && <span className="text-purple-500" aria-hidden="true">{titleIcon}</span>}
                <span>{title}</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};