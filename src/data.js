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
    "I don't see bioinformatics as a collection of tools — but as the design of end-to-end systems that connect biological questions to machine learning, and ML back to experimental decision-making.",
    "My long-term direction is to work as a bioinformatics solution architect — building AI-native platforms where generative models, biological data, and experimental feedback integrate into reproducible, production-grade discovery pipelines.",
    "My interest in proteins began in undergrad with structural biology and mutational analysis at NCBS. At Lund, I pivoted to omics — genomics, transcriptomics, metagenomics — and began designing the computational infrastructure around biology rather than just running analyses.",
    "My MSc thesis at Dr. Eran Elhaik's lab reflects this: a complete microbial-forensics platform combining Snakemake workflows, GPU-accelerated ML, FastAPI backend, and RAG-based automated reporting — using metagenomic signatures to predict geographic origin."
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
