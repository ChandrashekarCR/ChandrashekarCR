import React from 'react';
import { ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { aboutSection } from '../data';

function About() {
  return (
    <Section title={aboutSection.title} id="about">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {aboutSection.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="image-slot">
            <strong>Add a profile/lab image</strong>
            Portrait, conference, or lab overview
          </div>
          <h3 className="text-sm font-mono text-secondary-foreground uppercase tracking-widest mb-4">
            Quick facts
          </h3>
          <ul className="space-y-3">
            {aboutSection.quickFacts.map((fact, index) => (
              <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

export default About;
