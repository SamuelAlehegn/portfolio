
import React from 'react';
import type { PersonalInfo } from '../types';
import { IconGithub, IconLinkedin, IconEmail } from './icons';

interface LeftSocialBarProps {
  personalInfo: PersonalInfo;
}

const LeftSocialBar: React.FC<LeftSocialBarProps> = ({ personalInfo }) => {
  return (
    <div className="hidden md:flex fixed bottom-0 left-8 lg:left-10 w-10 flex-col items-center z-10">
      <ul className="flex flex-col items-center space-y-6 p-0 m-0 list-none">
        {personalInfo.github && (
          <li>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-light-slate hover:text-green transition-transform duration-300 transform hover:-translate-y-1 inline-block"
            >
              <IconGithub className="h-5 w-5" />
            </a>
          </li>
        )}
        {personalInfo.linkedin && (
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-light-slate hover:text-green transition-transform duration-300 transform hover:-translate-y-1 inline-block"
            >
              <IconLinkedin className="h-5 w-5" />
            </a>
          </li>
        )}
         <li>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-light-slate hover:text-green transition-transform duration-300 transform hover:-translate-y-1 inline-block"
            >
              <IconEmail className="h-5 w-5" />
            </a>
          </li>
      </ul>
      <div className="w-px h-24 bg-slate mt-6"></div>
    </div>
  );
};

export default LeftSocialBar;
