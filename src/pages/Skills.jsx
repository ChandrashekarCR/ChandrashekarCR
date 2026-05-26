import React from 'react';
import { skills } from '../data';
import Section from '../components/Section';

function Skills() {
  return (
    <Section title="Technical Arsenal" id="skills">
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-1/2 after:h-px after:bg-primary">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <span key={j} className="px-3 py-1.5 bg-card border border-border text-muted-foreground text-sm font-medium rounded-md hover:text-primary hover:border-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
