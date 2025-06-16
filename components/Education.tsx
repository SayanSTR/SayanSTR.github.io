
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { EDUCATION_DATA, AcademicCapIcon } from '../constants';
import { EducationItem } from '../types';

interface EducationProps {
  className?: string;
}

export const Education: React.FC<EducationProps> = ({ className }) => {
  return (
    <SectionWrapper id="education" title="Education & Certifications" titleIcon={<AcademicCapIcon className="w-8 h-8" />} className={className}>
      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((item: EducationItem) => (
          <Card key={item.id}>
            <div className="flex items-center mb-3">
              <AcademicCapIcon className="w-8 h-8 text-purple-500 mr-3 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-sky-700">{item.degree}</h3>
                <p className="text-md text-slate-600">{item.institution}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-2">{item.period}</p>
            {item.description && <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>}
          </Card>
        ))}
      </div>
      <p className="text-center mt-12 text-slate-600">
        Note: Education details are placeholders. Please update them with your actual credentials in <code>constants.tsx</code>.
      </p>
    </SectionWrapper>
  );
};