
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { SKILLS_DATA, CodeBracketIcon } from '../constants';
import { Skill } from '../types';

interface SkillsProps {
  className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className }) => {
  const categories = Array.from(new Set(SKILLS_DATA.map(skill => skill.category)));

  return (
    <SectionWrapper id="skills" title="My Skills & Expertise" titleIcon={<CodeBracketIcon className="w-8 h-8" />} className={className}>
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-sky-600 mb-6 text-center md:text-left">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {SKILLS_DATA.filter(skill => skill.category === category).map((skill: Skill) => (
                <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center !rounded-lg !shadow-lg hover:!shadow-emerald-500/30 hover:!ring-emerald-500">
                  {skill.icon && React.isValidElement(skill.icon) ? React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-5 h-5 mr-0 mb-2 text-sky-600" }) : skill.icon}
                  <p className="text-sm font-medium text-emerald-700">{skill.name}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};