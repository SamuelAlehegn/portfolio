
import React, { useState } from 'react';
import Section from './Section';
import type { WorkExperienceItem } from '../types';
import { IconBriefcase } from './icons';

interface ExperienceSectionProps {
  workExperience: WorkExperienceItem[];
}

const ExperienceItemDisplay: React.FC<{ item: WorkExperienceItem }> = ({ item }) => {
  return (
    <div className="transition-opacity duration-500">
      <h3 className="text-xl font-semibold text-lightest-slate mb-1">
        {item.role} <span className="text-green">@ {item.company}</span>
      </h3>
      <p className="text-sm font-mono text-slate mb-3">{item.period} | {item.location}</p>
      <ul className="space-y-2 text-slate list-none pl-0">
        {item.responsibilities.map((resp, i) => (
          <li key={i} className="relative pl-6">
            <span className="absolute left-0 top-1 text-green">▹</span>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ workExperience }) => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  if (!workExperience || workExperience.length === 0) {
    return <Section id="experience" title="Where I've Worked">No experience data available.</Section>;
  }
  
  return (
    <Section id="experience" title="Where I've Worked">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {workExperience.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedJobIndex(index)}
              className={`w-full text-left px-4 py-3 whitespace-nowrap md:whitespace-normal font-mono text-sm border-b-2 md:border-b-0 md:border-l-2 hover:bg-lightest-navy hover:text-green transition-all duration-300
                ${index === selectedJobIndex ? 'text-green border-green bg-lightest-navy' : 'text-slate border-light-navy'}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="md:w-3/4">
          {workExperience[selectedJobIndex] && <ExperienceItemDisplay item={workExperience[selectedJobIndex]} />}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
