
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 min-h-[calc(70vh)] ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-8 md:mb-12 flex items-center ${titleClassName}`}>
            <span className="text-green font-mono text-xl md:text-2xl mr-3">#</span>
            {title}
            <span className="flex-grow h-px bg-lightest-navy ml-4"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
