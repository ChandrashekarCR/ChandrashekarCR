import React from 'react';
import { Award } from 'lucide-react';
import { publications } from '../data';
import Section from '../components/Section';

function Publications() {
  return (
    <Section title="Publications & IP" id="publications">
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <a key={i} href={pub.link} target="_blank" rel="noreferrer" className="block p-5 bg-card rounded-xl border border-border hover:border-primary transition-colors group shadow-sm">
            <div className="flex gap-4 items-start">
              <Award className="text-secondary-foreground shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight text-foreground">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {pub.venue}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

export default Publications;
