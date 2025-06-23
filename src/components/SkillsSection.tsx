
import React from 'react';
import Section from './Section';
import type { Skills } from '../types';
import { IconCodeBracket, IconSparkles } from './icons';

interface SkillCategoryProps {
  title: string;
  skillsList: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skillsList }) => (
  <div className="bg-light-navy p-6 rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold text-green mb-3 font-mono flex items-center">
      <IconSparkles className="h-5 w-5 mr-2" /> {title}
    </h3>
    <ul className="flex flex-wrap gap-2">
      {skillsList.map((skill) => (
        <li key={skill} className="bg-navy px-3 py-1.5 rounded-full text-sm text-light-slate shadow-sm hover:bg-lightest-navy transition-colors">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section id="skills" title="My Toolkit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.programmingLanguages.length > 0 && (
          <SkillCategory title="Programming Languages" skillsList={skills.programmingLanguages} />
        )}
        {skills.frameworksLibraries.length > 0 && (
          <SkillCategory title="Frameworks & Libraries" skillsList={skills.frameworksLibraries} />
        )}
        {skills.tools.length > 0 && (
          <SkillCategory title="Tools & Platforms" skillsList={skills.tools} />
        )}
        {skills.other.length > 0 && (
           <SkillCategory title="Concepts & Methodologies" skillsList={skills.other} />
        )}
        {skills.microsoftOffice.length > 0 && (
          <SkillCategory title="Microsoft Office" skillsList={skills.microsoftOffice} />
        )}
      </div>
    </Section>
  );
};

export default SkillsSection;
