
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { YOUR_ABOUT_ME, YOUR_NAME } from '../constants'; // YOUR_NAME for replacement

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <SectionWrapper id="about" title="About Me" className={className}>
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
          {YOUR_ABOUT_ME.map((paragraph, index) => (
            // The replacement of "[Your Name]" should ideally be done in constants.tsx if it's static
            // or handled if the name needs to be dynamic. For now, assuming constants.tsx is updated.
            <p key={index}>{paragraph.replace("[Your Name]", YOUR_NAME.split(' ')[0])}</p> 
          ))}
        </div>
        <div className="mt-10 text-center">
            <a 
              href="https://github.com/SayanSTR/resume/raw/main/Sayan_Ghosh_Resume.pdf" // Example: Link to a resume PDF in a GitHub repo
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-300 text-lg transform hover:scale-105"
            >
              Download Resume (PDF)
            </a>
        </div>
      </div>
    </SectionWrapper>
  );
};