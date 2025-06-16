
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SOCIAL_LINKS, YOUR_NAME, YOUR_TITLE, YOUR_BIO_SHORT } from '../constants';
import { SocialLink } from '../types';
import { Link as ScrollLink } from 'react-scroll';


interface HeroProps {
  className?: string; // This className comes from App.tsx for alternating backgrounds
}

export const Hero: React.FC<HeroProps> = ({ className: bgClassNameFromApp }) => {
  // Combine the specific Hero styling with the background class from App.tsx
  const combinedClassName = `min-h-screen flex items-center justify-center !py-0 bg-cover bg-center ${bgClassNameFromApp}`;

  const heroSectionStyle: React.CSSProperties = {
    // Adding a subtle texture for the hero section, different from the main body pattern
    // This could also be a class if preferred
    backgroundImage: `radial-gradient(circle, rgba(200,200,220,0.03) 1px, transparent 1px),
                        radial-gradient(circle, rgba(200,200,220,0.03) 1px, transparent 1px)`,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0, 15px 15px',
  };

  return (
    <SectionWrapper 
      id="hero" 
      className={combinedClassName} // Pass combined classes
      style={heroSectionStyle}
    >
      <div className="text-center p-6 bg-slate-50/70 backdrop-blur-lg rounded-xl shadow-2xl max-w-3xl mx-auto">
        <img
          src="https://picsum.photos/seed/sayanprofile/200/200" // More specific seed for Sayan
          alt={YOUR_NAME}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-xl object-cover"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-600">{YOUR_NAME}</span>
        </h1>
        <p className="text-xl md:text-2xl text-sky-700 mb-6">{YOUR_TITLE}</p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">{YOUR_BIO_SHORT}</p>
        <div className="flex justify-center space-x-6 mb-10">
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              {React.cloneElement(link.icon, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
        <ScrollLink 
          to="projects" // ID of the Projects section
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 text-lg transform hover:scale-105 cursor-pointer"
        >
          View My Work
        </ScrollLink>
      </div>
    </SectionWrapper>
  );
};
