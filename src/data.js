export const personalInfo = {
  name: "Chandrashekar CR",
  role: "Bioinformatics Solution Architect",
  tagline: "Bioinformatics, built as end-to-end systems.",
  about: "Bioinformatician with experience in applying machine learning to biological problems, from predicting viral mutations in pandemic response to building ensemble models for metagenomic analysis. Comfortable working across the data science pipeline—feature engineering, model selection, hyperparameter tuning, and error analysis.",
  email: "shekarlp18@gmail.com",
  phone: "+91-8431982577 / +46-768953677",
  linkedin: "https://www.linkedin.com/in/chandrashekar-c-r/",
  github: "https://github.com/ChandrashekarCR",
  location: "Lund, Sweden / Bengaluru, India"
};

export const aboutSection = {
title: "Bioinformatics as systems design",
paragraphs: [
"I am a computational bioinformatics engineer focused on building scalable, reproducible, and system-oriented solutions for biological research.",


"My work sits at the intersection of bioinformatics, machine learning, scientific computing, and software engineering, with a strong emphasis on designing computational systems that can support modern data-intensive biology.",
"With formal training in biotechnology during my bachelor's degree, I developed a strong foundation in molecular biology, genetics, microbiology, and biological systems. This biological understanding allows me to adapt quickly across domains and develop bioinformatics-driven solutions for diverse biological problems.",
"My core philosophy is that bioinformatics itself is a computational framework and set of tools, while the real scientific objective is solving meaningful biological questions. This perspective has allowed me to remain domain-agnostic and adapt effectively to new biological problems, datasets, and research environments.",
"During my time at Lund University, and especially through my work in Dr. Eran Elhaik's lab, I developed a systems-first approach toward computational biology — focusing on reproducibility, scalability, maintainability, and architectural thinking while designing scientific workflows and analytical platforms.",
"I specialize in developing end-to-end computational workflows for omics and biological data, integrating workflow orchestration, machine learning pipelines, backend systems, APIs, and scientific infrastructure into unified research platforms.",

"My experience includes:",
" - HPC-native workflow development using Nextflow and Slurm",
" - Machine learning systems for biological and geospatial data",
" - Reproducible bioinformatics pipelines",
" - Backend architecture and API-driven scientific systems",
" - Scalable data processing and orchestration",
" - Multi-omics and microbiome data analysis",
" - Research software engineering for computational biology",

"What differentiates my approach is the combination of biological understanding with systems-level engineering thinking. I focus on creating computational frameworks that are extensible, reproducible, and capable of supporting large-scale biological research across HPC and cloud-compatible environments.",
"I am continuously working to improve my understanding of modern software engineering practices, scalable computational infrastructure, and advanced bioinformatics methodologies to build robust solutions for complex biological research problems.",
"My long-term interests lie in computational infrastructure for biology, AI-driven bioinformatics systems, workflow orchestration, scientific platform engineering, and scalable research architectures that bridge biological science with modern software engineering."


],

quickFacts: [
"Based in Lund, Sweden",
"MSc Bioinformatics, Lund University (2024–2026)",
"BE Biotechnology, MSRIT — CGPA 9.2/10",
"Teaching Assistant — Python, Bash, sequence analysis",
"Carnatic classical violinist — concerts across Scandinavia",
"VTU Central Zone football winners"
]
};


export const education = [
  {
    institution: "Lund University",
    location: "Lund, Sweden",
    degree: "MSc Bioinformatics",
    duration: "2024 - 2026",
  },
  {
    institution: "MS Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    degree: "BE Biotechnology",
    duration: "2019 - 2023",
    details: "CGPA: 9.2/10.0"
  }
];

export const experience = [
  {
    role: "Master's Thesis / Student Intern",
    company: "Lund University",
    location: "Lund, Sweden",
    duration: "Dec 2025 - Present",
    project: "eDNA Applications for Biogeography / mGPS Optimization",
    points: [
      "Developing an end-to-end AI-enabled microbial forensics platform integrating Snakemake-based bioinformatics workflows, FastAPI backend infrastructure, MLflow-driven experiment tracking, and GPU-accelerated deep learning pipelines for biologically informed geospatial prediction.",
      "Exploring transformer-based biological representation learning using DNABERT-S and RAG systems powered by Ollama.",
      "Addressed limitations of the mGPS XGBoost-based hierarchical model, handling MetaSUB urban metagenomic dataset (~4,000+ samples).",
      "Built a three-layer ensemble with Cartesian 3D coordinate regression, achieving 95% continent and 93% city accuracy while reducing median geodesic error from 137 km to 13.7 km."
    ]
  },
  {
    role: "Summer Intern",
    company: "Biomedical Centre (BMC)",
    location: "Lund, Sweden",
    duration: "Jun 2025 - Sept 2025",
    project: "Multi-omics Investigation of Anti-inflammatory Peptide Response",
    points: [
      "Analyzed dose- and time-resolved RNA-Seq data from mouse lung tissue to characterize transcriptional responses.",
      "Identified 17-gene core signature exhibiting logarithmic dose-response kinetics and biphasic immune trajectory.",
      "Integrated transcriptomic findings with Western blot validation of key signaling proteins (NF-κB, IRF3, IRAK4, TLR4, MyD88)."
    ]
  },
  {
    role: "Project Intern",
    company: "National Centre for Biological Sciences (NCBS)",
    location: "Bengaluru, India",
    duration: "Jul 2023 - Jun 2024",
    project: "Computational Analysis of Mutation Dynamics in RNA Viral Proteins",
    points: [
      "Developed a computational pipeline to track and quantify mutations in SARS-CoV-2 and other ssRNA viruses from global repositories (GISAID, BVBRC).",
      "Introduced a normalized genetic score as a quantitative marker of mutation emergence, demonstrating its generalisability to ssRNA viruses."
    ]
  },
  {
    role: "Student Intern",
    company: "National Centre for Biological Sciences (NCBS)",
    location: "Bengaluru, India",
    duration: "Feb 2023 - May 2023",
    project: "Sequence and Evolutionary Analysis of Protein Folds",
    points: [
      "Performed sequence, structural, and evolutionary analysis of hotdog-fold proteins using MSA, Shannon entropy, and phylogenetics.",
      "Engineered machine learning pipelines incorporating structural similarity and quaternary association features for functional annotation."
    ]
  },
  {
    role: "Undergraduate Researcher",
    company: "MS Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    duration: "Apr 2021 - Aug 2021",
    project: "Identification of novel deleterious mutations of human TPMT",
    points: [
      "Identified five novel deleterious missense SNPs in TPMT and evaluated their structural and energetic effects using in-silico screening and molecular dynamics."
    ]
  }
];

export const skills = {
  "Bioinformatics & Workflows": ["Nextflow", "Snakemake", "Genomics", "Transcriptomics", "Metagenomics", "Proteomics", "Variant Analysis", "Structural Bioinformatics"],
  "Machine Learning & Data Science": ["PyTorch", "scikit-learn", "pandas", "NumPy", "RAG", "LLMs", "MLflow"],
  "Development & Tools": ["Python", "Bash", "R", "SQL", "Linux", "SLURM", "Git/GitHub", "Docker/Singularity", "FastAPI", "SQLite", "Celery", "Redis"],
  "Wet Laboratory": ["Western blot", "SDS-PAGE", "ELISA", "PCR", "Protein purification", "Spectrophotometry"]
};

export const publications = [
  {
    title: "Computational Analysis of the Accumulation of Mutations in Therapeutically Important RNA Viral Proteins During Pandemics with Special Emphasis on SARS-CoV-2",
    venue: "Journal of Molecular Biology",
    link: "https://doi.org/10.1016/j.jmb.2024.168716"
  },
  {
    title: "A bioinformatics approach to the identification of novel deleterious mutations of human TPMT through validated screening and molecular dynamics",
    venue: "Scientific Reports",
    link: "https://doi.org/10.1038/s41598-022-23488-z"
  },
  {
    title: "Comparative Analysis of Fungal Secretomes and Host-Pathogen Defense Response Validation",
    venue: "Indian Journal of Biochemistry and Biophysics",
    link: "https://or.niscpr.res.in/index.php/IJBB/article/view/18676"
  },
  {
    title: "Computer Software Work: in-silico prediction of secreted effector and elicitor candidates",
    venue: "Copyright (SW-19912/2024, Govt. of India)",
    link: "https://www.linkedin.com/in/chandrashekar-c-r/overlay/Certifications/748200192/treasury/?profileId=ACoAAD5q9vEBWir9eNRpi6J13qfFp_syJ4epY6c"
  }
];

export const teaching = [
  {
    role: "Teaching Assistant (Technical Support & Mentorship)",
    institution: "Lund University",
    duration: "Aug 2025 - Present",
    points: [
      "Provided direct technical support to 30+ students in Python, Bash scripting, and sequence analysis.",
      "Trained users on industry-standard tools (PLINK, Git) and reproducible research standards.",
      "Guided students in algorithmic frameworks for population genetics and deploying Streamlit apps."
    ]
  }
];

export const extracurriculars = [
  {
    title: "Carnatic Classical Violinist",
    description: "Student of renowned violinist Shri HK Venkatram. Performed in concerts for Raagamalika in Sweden, Art to Heart Institute in Norway, Sadhakam and Nrityapada in Denmark."
  },
  {
    title: "Football",
    description: "Played for Blitz 'C' division and Ramaiah Institute of Technology. Winners of VTU Central Zone and Runners-up in State-level Engineering Tournament."
  },
  {
    title: "Martial Arts (Kickboxing & Muay Thai)",
    description: "Won an intra-level amateur Kickboxing championship at Raw Combat Fitness, Mathikere. Trained intensively for two years."
  }
];
