
import React from 'react';
import Section from '../components/Section';
import type { PersonalInfo } from '../types';

interface AboutSectionProps {
  aboutMe: string;
  personalInfo: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutMe, personalInfo }) => {
  const skills = [
    "JavaScript (ES6+)", "React", "Angular", "Node.js", 
    "Python", "Java", "C/C++", "TypeScript", "Embedded Systems"
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3 text-slate space-y-4 text-lg leading-relaxed">
          <p>{aboutMe}</p>
          <p>
            My journey in technology has equipped me with a versatile skill set, allowing me to approach problems from various angles, 
            whether it's low-level hardware interfacing or high-level application development. 
            I thrive in environments that demand continuous learning and innovation.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-light-slate">
            {skills.map((skill) => (
              <li key={skill} className="before:content-['▹'] before:text-green before:mr-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 relative group">
          <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-square">
            <img
              src={personalInfo.profilePictureUrl}
              alt={personalInfo.name}
              className="rounded-md w-full h-full object-cover z-10 relative shadow-xl"
            />
            <div className="absolute inset-0 border-2 border-green rounded-md transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
