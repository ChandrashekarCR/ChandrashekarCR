import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data';
import Section from '../components/Section';

function Experience() {
  return (
    <Section title="Experience & Research" id="experience">
      <div className="space-y-12">
        {experience.map((exp, i) => (
          <div key={i} className="group flex flex-col md:flex-row gap-4 md:gap-8 transition-all">
            <div className="md:w-1/4 pt-1 flex flex-col">
              <span className="text-sm font-mono text-muted-foreground">{exp.duration}</span>
              <span className="text-xs font-medium text-secondary-foreground flex items-center gap-1 mt-1">
                <MapPin size={12} /> {exp.location}
              </span>
            </div>
            <div className="md:w-3/4 space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {exp.role} · {exp.company}
              </h3>
              <h4 className="text-md font-medium italic text-muted-foreground pb-2">
                {exp.project}
              </h4>
              <ul className="space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <ChevronRight size={18} className="text-secondary-foreground shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
