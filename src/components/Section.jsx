import React from 'react';
import { Terminal } from 'lucide-react';

function Section({ title, id, children }) {
  return (
    <section id={id} className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary flex items-center gap-3">
          <Terminal className="text-secondary-foreground" size={32} />
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
