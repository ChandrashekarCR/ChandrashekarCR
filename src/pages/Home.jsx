import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';
import { GitBranch, Link2, Mail, ArrowRight, Dna, Cpu, Microscope, Sparkles } from 'lucide-react';

function Home() {
  return (
    <main className="px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="hero-grid lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6 animate-fade-in-up">
          <span className="kicker">
            <Sparkles size={14} /> Bioinformatics + ML Systems
          </span>
          <p className="text-secondary-foreground font-mono font-medium tracking-wide">
            Hej! I am
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            {personalInfo.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground max-w-3xl leading-tight">
            {personalInfo.tagline}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed pt-2">
            {personalInfo.about}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="pill"><Dna size={14} /> Omics</span>
            <span className="pill"><Cpu size={14} /> AI Pipelines</span>
            <span className="pill"><Microscope size={14} /> Wet Lab ↔ ML</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border">
              <GitBranch size={20} />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border">
              <Link2 size={20} />
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glow-card hover-lift p-6">
            <div className="image-slot">
              <strong>Add a hero portrait</strong>
              3:4 photo · studio or lab setting
            </div>
          </div>
          <div className="bio-grid md:grid-cols-2">
            <div className="glow-card hover-lift p-5">
              <div className="image-slot">
                <strong>Lab / Wet-lab image</strong>
                Bench, instrumentation, or microscopy
              </div>
            </div>
            <div className="glow-card hover-lift p-5">
              <div className="image-slot">
                <strong>Systems / Code image</strong>
                Pipeline, model, or compute cluster
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <Link to="/experience" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
          <p className="text-sm text-muted-foreground mb-4">Research, internships, and applied ML work.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/skills" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Skills</h3>
          <p className="text-sm text-muted-foreground mb-4">Bioinformatics, ML, software, and wet lab.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/publications" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Publications</h3>
          <p className="text-sm text-muted-foreground mb-4">Peer-reviewed work and IP.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </main>
  );
}

export default Home;
