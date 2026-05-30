import React, { useMemo, useState } from 'react';
import { ExternalLink, Code2, FileText, Sparkles } from 'lucide-react';
import Section from '../components/Section';

function Experience() {
  const projects = useMemo(
    () => [
      {
        id: 'microbiome-forensic-tracker',
        rank: '01',
        title: 'Microbiome Forensic Tracker',
        tagline: 'Predicting where a sample came from — from its microbes alone.',
        role: 'MSc Thesis · BINP51',
        org: 'Dr. Eran Elhaik Lab, Lund University',
        period: 'Dec 2025 – Present',
        status: 'active',
        flagship: true,
        github: 'https://github.com/ChandrashekarCR/microbiome-forensic-tracker',
        paper: null,
        problem:
          "Every environment leaves a microbial fingerprint. A swab, a soil core, a metagenome — each carries a community shaped by where it came from. The question was: can an unknown sample's microbiome predict geographic origin, and can that prediction be explained clearly for real forensic use?",
        solution:
          'I built this as an end-to-end platform: Snakemake pipeline (FASTQ → QC → host-read depletion → Kraken2/Bracken profiling → MEGAHIT assembly → DNABERT-S embeddings), a GPU-accelerated ML layer with MLflow tracking, a FastAPI + SQLite backend with map-driven workflows, and an Ollama-powered RAG layer for automated forensic reporting.',
        engineering:
          'This project is designed as software architecture, not a one-off analysis: switchable pipeline stages, per-rule HPC resources, Apptainer containers, tests with pytest, and CI gates (Ruff, Black, snakefmt, GitHub Actions) for reproducibility and maintainability.',
        stack: [
          'Snakemake',
          'Kraken2 / Bracken',
          'MEGAHIT',
          'DNABERT-S',
          'PyTorch',
          'FastAPI',
          'SQLite',
          'Ollama / RAG',
          'Apptainer',
          'SLURM / HPC'
        ]
      },
      {
        id: 'viral',
        rank: '02',
        title: 'Predicting Viral Mutations Before They Emerge',
        tagline: "A genetic score that anticipates pandemic mutations.",
        role: 'Project Intern (~1 year)',
        org: 'NCBS, Bengaluru',
        period: 'Jul 2023 – Jun 2024',
        status: 'published',
        github: 'https://github.com/ChandrashekarCR/foldx',
        paper: 'https://www.sciencedirect.com/science/article/pii/S0022283624003255',
        paperVenue: 'Journal of Molecular Biology (2024)',
        problem:
          'Single-stranded RNA viruses mutate quickly. For pandemic preparedness, the key question is: among all possible mutations, which ones are likely to emerge in reality?',
        solution:
          'I implemented a workflow around a codon-level genetic score and integrated it with FoldX structural impact modeling (ΔΔG, stability, interfaces), then validated it across SARS-CoV-2, Influenza, Ebola, Dengue, and Chikungunya.',
        engineering:
          'The critical work was computational robustness: a parallelized and fault-tolerant FoldX driver that auto-generates mutation jobs, distributes them across CPUs, runs triplicates, flags unstable runs, and aggregates clean outputs for analysis.',
        stack: ['Python', 'FoldX', 'Structural bioinformatics', 'pandas', 'Codon analysis']
      },
      {
        id: 'mgps',
        rank: '03',
        title: 'mGPS Optimization',
        tagline: 'Metagenomic geolocation, 10× sharper than prior baselines.',
        role: 'Research Project · BINP37',
        org: 'Elhaik Lab, Lund University',
        period: 'Apr 2025 – Aug 2025',
        status: 'report',
        github: 'https://github.com/ChandrashekarCR/mgps_optimization',
        paper: null,
        problem:
          'Given microbial profiles from urban transit systems worldwide (MetaSUB), can we predict continent, city, and precise coordinates from composition alone?',
        solution:
          'I reframed it as a hierarchical prediction system (continent → city → coordinates) and built an ensemble stack with XGBoost, LightGBM, CatBoost, TabPFN, GrowNet, and neural models, with Optuna tuning and feature selection.',
        engineering:
          'The pipeline is modular and experiment-first: models are independently swappable, cross-validation and pruning are automated, and stacking/meta-learning is repeatable for large-scale iterations.',
        metrics: [
          { label: 'Median coordinate error', value: '13.7 km', note: 'vs 137 km baseline' },
          { label: 'Continent accuracy', value: '95%' },
          { label: 'City accuracy', value: '93%' }
        ],
        stack: ['PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'TabPFN', 'Optuna', 'GeoPandas']
      },
      {
        id: 'tpmt',
        rank: '04',
        title: 'TPMT Pharmacogenomics',
        tagline: 'Where computation met a clinically relevant biological question.',
        role: 'Undergraduate Research',
        org: 'MS Ramaiah Institute of Technology',
        period: 'Apr 2021 – Aug 2021',
        status: 'published',
        github: null,
        paper: 'https://www.nature.com/articles/s41598-022-23488-z',
        paperVenue: 'Scientific Reports (2022)',
        problem:
          'TPMT variants strongly affect thiopurine drug metabolism and toxicity risk. The task was to identify previously uncharacterized high-risk variants.',
        solution:
          'I built a validated in-silico screening funnel combining sequence-level predictors, structure-based stability analysis, conservation, binding-pocket assessment, and molecular dynamics to prioritize pathogenic SNPs.',
        engineering:
          'This project taught a core principle I still follow: validate the pipeline on known cases first, then trust new predictions. Reproducibility before claims.',
        stack: ['GROMACS', 'PyMOL', 'Sequence/structure predictors', 'Conservation analysis']
      }
    ],
    []
  );

  const researchProjects = useMemo(
    () => projects.filter((project) => project.id !== 'viral'),
    [projects]
  );
  const paidExperience = useMemo(
    () => projects.find((project) => project.id === 'viral'),
    [projects]
  );

  const [activeId, setActiveId] = useState(researchProjects[0].id);
  const activeProject = researchProjects.find((project) => project.id === activeId) ?? researchProjects[0];

  return (
    <Section title="Experience & Projects" id="experience">
      <div className="space-y-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-secondary-foreground">// projects</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            A biological story, told through software.
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Four projects, one philosophy: convert a biological question into a reproducible,
            interpretable, and deployable computational system.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Research Projects</h4>
          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <nav className="space-y-2 md:sticky md:top-24 self-start">
            {researchProjects.map((project) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-secondary-foreground">{project.rank}</span>
                    <div>
                      <p className="text-sm font-semibold">{project.title}</p>
                      <p className="mt-1 text-xs">{project.role}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold text-foreground">{activeProject.title}</h4>
                <p className="mt-1 text-secondary-foreground">{activeProject.tagline}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activeProject.org} · {activeProject.period}
                </p>
              </div>

              {activeProject.status === 'active' ? (
                <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
                  ● Active thesis
                </span>
              ) : activeProject.status === 'published' ? (
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  Published
                </span>
              ) : null}
            </div>

            {activeProject.metrics && (
              <div className="grid gap-3 sm:grid-cols-3">
                {activeProject.metrics.map((metric, index) => (
                  <div key={index} className="rounded-xl border border-border bg-background/50 p-4">
                    <p className="text-2xl font-extrabold text-primary">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                    {metric.note && <p className="mt-1 text-[11px] text-secondary-foreground">{metric.note}</p>}
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-primary" /> The biological problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.problem}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-secondary-foreground" /> The engineering solution
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.solution}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-purple-300" /> Why it matters as software
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.engineering}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-transparent hover:text-primary transition-colors"
                >
                  <Code2 size={16} /> View code
                </a>
              )}
              {activeProject.paper && (
                <a
                  href={activeProject.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <FileText size={16} />
                  {activeProject.paperVenue ? `Read paper · ${activeProject.paperVenue}` : 'Read paper'}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </article>
          </div>
        </div>

        {paidExperience && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Professional Experience</h4>
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">{paidExperience.title}</h4>
                  <p className="mt-1 text-secondary-foreground">{paidExperience.tagline}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {paidExperience.org} · {paidExperience.period}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{paidExperience.role}</p>
                </div>

                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  Paid internship
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-primary" /> The biological problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.problem}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-secondary-foreground" /> The engineering solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.solution}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-purple-300" /> Why it matters as software
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.engineering}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {paidExperience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {paidExperience.github && (
                  <a
                    href={paidExperience.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-transparent hover:text-primary transition-colors"
                  >
                    <Code2 size={16} /> View code
                  </a>
                )}
                {paidExperience.paper && (
                  <a
                    href={paidExperience.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    <FileText size={16} />
                    {paidExperience.paperVenue
                      ? `Read paper · ${paidExperience.paperVenue}`
                      : 'Read paper'}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          </div>
        )}
      </div>
    </Section>
  );
}

export default Experience;
