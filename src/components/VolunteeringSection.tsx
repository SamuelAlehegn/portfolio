
import React from 'react';
import Section from './Section';
import type { VolunteeringItem } from '../types';
import { IconHeart, IconExternalLink } from './icons';

interface VolunteeringItemDisplayProps {
  item: VolunteeringItem;
}

const VolunteeringItemDisplay: React.FC<VolunteeringItemDisplayProps> = ({ item }) => {
  return (
    <div className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-green/20 transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <IconHeart className="h-8 w-8 text-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-lightest-slate">{item.role}</h3>
          <p className="text-md text-green mb-1">{item.organization}</p>
          <p className="text-sm font-mono text-slate mb-3">{item.period} | {item.location}</p>
          <ul className="space-y-2 text-slate list-none pl-0 mb-3">
            {item.description.map((desc, i) => (
              <li key={i} className="relative pl-6">
                <span className="absolute left-0 top-1 text-green">▹</span>
                {desc}
              </li>
            ))}
          </ul>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-green hover:underline font-mono"
            >
              Learn More <IconExternalLink className="h-4 w-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface VolunteeringSectionProps {
  volunteering: VolunteeringItem[];
}

const VolunteeringSection: React.FC<VolunteeringSectionProps> = ({ volunteering }) => {
  if (!volunteering || volunteering.length === 0) return null;

  return (
    <Section id="volunteering" title="Volunteering">
      <div className="space-y-8">
        {volunteering.map((item, index) => (
          <VolunteeringItemDisplay key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default VolunteeringSection;
