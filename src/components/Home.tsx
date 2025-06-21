import React from 'react';
import type { PersonalInfo } from "../types";

interface HomeProps {
  personalInfo: PersonalInfo;
}

const HomeSection: React.FC<HomeProps> = ({ personalInfo }) => {
  const scrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start py-20 md:py-32 relative"
    >
      <div className="max-w-3xl">
        <p className="text-green font-mono text-md md:text-lg mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4">
          {personalInfo.name}.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
          {personalInfo.tagline}.
        </h2>
        <p className="text-slate text-lg md:text-xl max-w-xl mb-12">
          I'm an Electrical and Computer Engineer specializing in bridging
          hardware and software. Currently, I'm focused on designing innovative
          solutions and tackling complex technological challenges.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-4 border border-green text-green rounded hover:bg-green-tint transition-colors duration-300 text-lg font-mono text-center"
          >
            Get In Touch
          </a>
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-green text-green rounded hover:bg-green-tint transition-colors duration-300 text-lg font-mono text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
