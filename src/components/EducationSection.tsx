
import React from 'react';
import Section from './Section';
import type { EducationItem } from '../types';
import { IconAcademicCap, IconExternalLink } from './icons';

interface EducationItemDisplayProps {
  item: EducationItem;
}

const EducationItemDisplay: React.FC<EducationItemDisplayProps> = ({ item }) => {
  return (
    <div className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-green/20 transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <IconAcademicCap className="h-8 w-8 text-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-lightest-slate">{item.degree}</h3>
          <p className="text-md text-green mb-1">{item.institution}</p>
          <p className="text-sm font-mono text-slate mb-1">{item.period} | {item.location}</p>
          {item.details && <p className="text-sm text-slate mb-2">{item.details}</p>}
          {item.website && (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-green hover:underline font-mono"
            >
              Visit Website <IconExternalLink className="h-4 w-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


interface EducationSectionProps {
  education: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <EducationItemDisplay key={index} item={edu} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
