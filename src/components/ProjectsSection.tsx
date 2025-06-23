
import React from 'react';
import Section from './Section';
import type { ProjectItem } from '../types';
import { IconGithub, IconExternalLink } from './icons';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-light-navy rounded-md shadow-xl p-6 flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center mb-4">
        <svg className="w-10 h-10 text-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        <div className="flex space-x-3">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
              <IconGithub className="h-6 w-6" />
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
              <IconExternalLink className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-lightest-slate mb-2 group-hover:text-green transition-colors">{project.title}</h3>
      <p className="text-slate text-sm mb-1 font-mono">{project.period}</p>
      <p className="text-slate text-sm mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2 text-xs font-mono">
          {project.technologies.map((tech) => (
            <li key={tech} className="text-slate bg-navy px-2 py-1 rounded-full">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Some Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
