// Skills list, grouped by category. Each entry is backed by something real —
// university coursework (see app/data/education.ts), DataCamp coursework, or
// a technique/technology actually used in a shipped project (see
// app/data/projects.ts) — rather than a generic self-rating. `icon` keys
// into the icon set in app/components/skills-list.tsx.
export interface SkillCategory {
  category: string;
  icon: 'code' | 'chart' | 'pipeline' | 'web' | 'map' | 'tools';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Querying',
    icon: 'code',
    // Python, R, SQL: Bachelor's coursework + DataCamp (Introduction to R,
    // Python Developer track). TypeScript: this site.
    skills: ['Python', 'R', 'SQL', 'TypeScript'],
  },
  {
    category: 'Data Analysis & Statistics',
    icon: 'chart',
    // Statistical Data Analysis: Bachelor's coursework. The rest: methods
    // actually applied in Stock & Culture (Pearson/Spearman correlation),
    // 2 vs 3 and the thesis (Pareto/multi-objective optimization), the
    // Freedom-Prosperity Nexus (panel regression), and the longevity
    // simulator (Monte Carlo simulation).
    skills: [
      'Statistical Analysis',
      'Pareto / Multi-Objective Optimization',
      'Panel Regression',
      'Monte Carlo Simulation',
      'Microsoft Excel',
    ],
  },
  {
    category: 'Data Engineering & Pipelines',
    icon: 'pipeline',
    // Data Engineering and Data Governance: Bachelor's coursework. The rest:
    // civicus-api's monthly scheduled scrape/refresh, and Notion Flashcards'
    // GitHub Actions gather step.
    skills: ['ETL & Data Governance', 'Scheduled Pipelines (GitHub Actions)', 'REST API Design'],
  },
  {
    category: 'Web Development',
    icon: 'web',
    // This site (Next.js/TypeScript/Tailwind) and the Album Recommender
    // (FastAPI backend, Supabase — Postgres under the hood — for storage).
    skills: ['Next.js / React', 'FastAPI', 'Supabase / PostgreSQL', 'Tailwind CSS'],
  },
  {
    category: 'Geospatial & Network Analysis',
    icon: 'map',
    // City Walkability: OSMnx/NetworkX graph extraction, GeoPandas spatial
    // dataframes, elevation/terrain-grade enrichment. Citation & Diffusion
    // Network Analysis: the CERN Knowledge Transfer citation-spillover
    // project (forward-citation diffusion graphs built from OpenAlex data).
    skills: [
      'OSMnx / NetworkX',
      'GeoPandas',
      'Elevation & Terrain Modeling',
      'Citation & Diffusion Network Analysis',
    ],
  },
  {
    category: 'Tools & Practices',
    icon: 'tools',
    // Git/GitHub across every project repo; Notion API (Flashcards); AI
    // tooling from DataCamp's "Understanding ChatGPT" plus the longevity
    // simulator's LLM integration; critical analysis from the Bachelor's
    // course "An Analytical Approach to Separating Fact from Fiction" (put
    // into practice catching the spurious correlation in Stock & Culture).
    skills: ['Git / GitHub', 'Notion API', 'AI-Assisted Research (LLMs)', 'Critical / Statistical Reasoning'],
  },
];

// Flat name list, kept for anything that just wants "all skills" (e.g. the
// JSON-LD knowsAbout field in app/data/structured-data.ts).
export const skills = skillCategories.flatMap((c) => c.skills);
