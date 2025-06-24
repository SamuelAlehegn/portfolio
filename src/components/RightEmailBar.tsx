
import React from 'react';

interface RightEmailBarProps {
  email: string;
}

const RightEmailBar: React.FC<RightEmailBarProps> = ({ email }) => {
  return (
    <div className="hidden md:flex fixed bottom-0 right-8 lg:right-10 w-10 flex-col items-center z-10">
      <div className="flex flex-col items-center space-y-6 p-0 m-0 list-none">
        <a
          href={`mailto:${email}`}
          className="font-mono text-xs text-light-slate hover:text-green tracking-widest transition-transform duration-300 transform hover:-translate-y-1 inline-block"
          style={{ writingMode: 'vertical-rl' }}
        >
          {email}
        </a>
      </div>
      <div className="w-px h-24 bg-slate mt-6"></div>
    </div>
  );
};

export default RightEmailBar;
