import React from 'react';
import { BookOpen, Activity, ChevronRight } from 'lucide-react';
import { teaching, extracurriculars } from '../data';
import Section from '../components/Section';

function More() {
  return (
    <Section title="Beyond the Code" id="more">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BookOpen className="text-secondary-foreground" /> Teaching
          </h3>
          <div className="space-y-6">
            {teaching.map((teach, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-lg font-bold text-foreground">{teach.role}</h4>
                <p className="text-sm font-mono text-muted-foreground mb-3">{teach.institution} | {teach.duration}</p>
                <ul className="space-y-2">
                  {teach.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                      <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Activity className="text-secondary-foreground" /> Extracurriculars
          </h3>
          <div className="space-y-6">
            {extracurriculars.map((extra, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border hover:border-secondary-foreground/50 transition-colors shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-2">{extra.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default More;
