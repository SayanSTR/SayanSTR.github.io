import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Adjusted path

interface SectionWrapperProps {
  id: string;
  title?: string; // Optional title to display within the section
  children: React.ReactNode;
  className?: string; // To accept background class, padding overrides, or other specific styling
  titleIcon?: React.ReactNode;
  style?: React.CSSProperties;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  children, 
  className: passedClassName = '', // Renamed for clarity within the component
  titleIcon, 
  style 
}) => {
  const sectionRef = useRef<HTMLElement>(null); // Ref for the section element
  // Trigger animation when 10% of the section is visible, and only once.
  // For Hero, it might be desirable to have a threshold of 0.01 or always visible if at top.
  // However, a small delay/scroll can make the first animation noticeable.
  const isVisible = useIntersectionObserver(sectionRef, { threshold: id === 'hero' ? 0.05 : 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`py-16 md:py-24 ${passedClassName} section-animate ${isVisible ? 'visible' : ''}`} 
      style={style}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 flex items-center justify-center space-x-3">
              {titleIcon && <span className="text-purple-500">{titleIcon}</span>}
              <span>{title}</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
