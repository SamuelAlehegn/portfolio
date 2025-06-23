
import React from 'react';
import Section from './Section';
import type { PersonalInfo } from '../types';
import { IconEmail, IconLinkedin, IconGithub } from './icons';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ personalInfo }) => {
  return (
    <Section id="contact" title="Get In Touch" className="text-center">
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-slate mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, 
          feel free to reach out. My inbox is always open!
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-10 py-4 mb-12 border border-green text-green rounded hover:bg-green-tint transition-colors duration-300 text-lg font-mono"
        >
          Say Hello
        </a>
{/* 
        <form className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-slate">Full Name</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-lightest-navy border border-slate rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm text-lightest-slate" />
          </div>
          <div>
            <label htmlFor="email_form" className="block text-sm font-medium text-light-slate">Email</label>
            <input type="email" name="email_form" id="email_form" className="mt-1 block w-full px-3 py-2 bg-lightest-navy border border-slate rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm text-lightest-slate" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-slate">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-lightest-navy border border-slate rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm text-lightest-slate"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy bg-green hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-green">
              Send Message
            </button>
          </div>
        </form> 
        */}
      
        
        <div className="mt-16 flex justify-center space-x-6 md:hidden">
           {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
              <IconGithub className="h-8 w-8" />
            </a>
          )}
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
            <IconLinkedin className="h-8 w-8" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate hover:text-green transition-colors">
            <IconEmail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
