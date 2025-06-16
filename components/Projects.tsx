
import React from 'react';
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { PROJECTS_DATA, GitHubIcon } from '../constants.js'; // Added .js
import { Project } from '../types.js'; // Added .js

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5 ml-1"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project: Project) => (
          <Card key={project.id} className="flex flex-col">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-t-lg mb-4" 
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-sky-700 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <p className="text-xs text-emerald-700 font-semibold mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full border border-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-300 flex justify-end space-x-4">
              {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-purple-500 transition-colors flex items-center text-sm"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GitHubIcon className="w-5 h-5 mr-1" /> Code
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && ( // Only show if liveUrl is present and not just "#"
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-purple-500 transition-colors flex items-center text-sm"
                  aria-label={`Live demo of ${project.title}`}
                >
                  <ExternalLinkIcon className="w-5 h-5 mr-1" /> Live Demo
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
       <p className="text-center mt-12 text-slate-600">
        Note: Project details are placeholders. Please update them with your actual work in <code>constants.tsx</code>.
      </p>
    </SectionWrapper>
  );
};