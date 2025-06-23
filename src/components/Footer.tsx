
import React from 'react';
import type { PersonalInfo } from '../types';


interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="py-8 text-center text-slate font-mono text-sm">
      <div className="flex justify-center space-x-6 mb-4 md:hidden"></div>
      <p className="mb-2">
        Built with <span className="text-green">&hearts;</span> by{" "}
        {personalInfo.name}
      </p>
  
      <p>&copy; {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
