
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { EXPERIENCE_DATA, BriefcaseIcon } from '../constants';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  className?: string;
}

export const Experience: React.FC<ExperienceProps> = ({ className }) => {
  // Determine ring color based on the background. If bg-white, use slate-50. If sky-50, use white.
  // This is a simplification; for more complex logic, pass the specific bg color.
  const ringColorClass = className?.includes('bg-white') ? 'ring-slate-50' : 'ring-white';

  return (
    <SectionWrapper id="experience" title="Professional Experience" titleIcon={<BriefcaseIcon className="w-8 h-8"/>} className={className}>
      <div className="space-y-12 relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block transform -translate-x-1/2"></div>

        {EXPERIENCE_DATA.map((item: ExperienceItem, index: number) => (
          <div key={item.id} className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8 md:mb-0`}>
            {/* Connector Dot for larger screens */}
            <div className={`hidden md:flex flex-col items-center mx-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
              <div className={`w-4 h-4 bg-purple-500 rounded-full ring-4 ${ringColorClass} z-10`}></div>
            </div>

             {/* Spacer div for alignment (no visible content) */}
            <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-left order-1 md:pr-8' : 'md:text-right order-2 md:pl-8'}`}>
              {/* This div helps align the cards correctly on the timeline but contains no visible content itself */}
            </div>

            <Card className={`w-full md:max-w-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
              <div className="flex items-start space-x-4 mb-3">
                {item.logoUrl && <img src={item.logoUrl} alt={`${item.company} logo`} className="w-10 h-10 rounded-full object-contain bg-white p-1 shadow-sm" />}
                <div>
                  <h3 className="text-xl font-semibold text-sky-700">{item.role}</h3>
                  <p className="text-md text-purple-500">{item.company}</p>
                  <p className="text-sm text-slate-500">{item.period}</p>
                </div>
              </div>
              <ul className="list-disc list-outside space-y-2 text-slate-700 text-sm pl-5">
                {item.responsibilities.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-slate-600">
        Note: Experience details are placeholders. Please update them with your actual work in <code>constants.tsx</code>.
      </p>
    </SectionWrapper>
  );
};