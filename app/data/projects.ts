export type ProjectStatus = 'live' | 'in-progress' | 'completed' | 'archived';
export type ProjectType = 'tool' | 'webapp' | 'research' | 'api' | 'thesis';

export interface Project {
  slug: string;            // used for the URL: /projects/[slug]
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  oneLiner: string;        // shown on the card
  description: string;     // longer text for the deep-dive page (markdown-friendly string)
  tags?: string[];         // skill/technology chips shown on the card, sourced from what the
                           // project actually used — see app/data/skills.ts for the same
                           // vocabulary applied site-wide
  liveUrl?: string;
  repoUrl?: string;
  repoLabel?: string;      // override the default "Code" link text — use when there's more
                           // than one repo, so it's clear which is which (paired with extraRepos)
  extraRepos?: { label: string; url: string }[]; // additional related repos (e.g. a separate backend/data repo)
  image?: string;          // path in /public for a real screenshot, or a /project-thumb
                           // route URL for a generated branded fallback (no live demo)
  featured?: boolean;      // show on homepage
  // thesis-only fields
  abstract?: string;
  pdfPath?: string;        // e.g. /thesis.pdf
}

export const projects: Project[] = [
  {
    slug: 'thesis',
    title: 'Finding the Balance Between Efficiency and Green',
    type: 'thesis',
    status: 'completed',
    oneLiner:
      "A Bachelor's thesis quantifying the exact trade-off between travel time and CO2 emissions in time-sensitive B2B logistics.",
    description:
      'A multi-objective optimization thesis for Maastricht University\'s School of Business and Economics, supervised by Dr. Burak Can, tackling the operational trade-off between time-based efficiency and environmental sustainability in time-sensitive B2B logistics. Built a white-box simulation framework — combining the ISO 23795 standard, WLTP drive-cycle classification, and a Random Forest classifier — over a granular GPS dataset of 19 trips across Europe and Aruba, then ran a segment-based physics engine across 100 driver profiles to trace the Pareto frontier between speed and emissions. The results identify an eco-driving "frontier knee" (α ∈ [0.4, 0.6]) as the optimal trade-off: a 7.74% emissions reduction unladen, rising to 9.36% fully loaded and up to 16.51% in congested urban corridors, all while keeping fleets within contractual SLA windows — directly relevant as EU ETS-2 regulations put a price on freight carbon.',
    abstract:
      'Investigates how logistics companies can cut delivery-fleet carbon emissions without missing service deadlines, using real GPS trip data and a physics-based driving simulation. Finds an eco-driving "sweet spot" that cuts emissions by up to 16.5% on congested urban routes while still meeting delivery-time commitments.',
    tags: ['Pareto / Multi-Objective Optimization', 'Machine Learning (Random Forest)', 'Python', 'Statistical Data Analysis', 'Simulation Modeling'],
    pdfPath: '/Christian%20Crivelli%20Thesis.pdf',
    image: '/project-thumb?title=Finding%20the%20Balance%20Between%20Efficiency%20and%20Green&type=thesis',
    featured: true,
  },
  {
    slug: 'album-recommender',
    title: 'Music Recommendation Webapp',
    type: 'webapp',
    status: 'in-progress', // beta live
    oneLiner: 'A music recommender that suggests albums based on audio feature similarity.',
    description:
      'A Supabase-backed recommendation engine that computes cosine similarity across a feature matrix of albums, wrapped in a FastAPI backend and a lightweight static frontend styled like a library card catalog. A public beta is live, split across two repos: one handling data ingestion and the recommendation engine, the other serving the read-only public app.',
    tags: ['Database Management (Supabase / PostgreSQL)', 'FastAPI', 'REST API Design', 'Recommendation Systems', 'Python'],
    liveUrl: 'https://recommender.christiancrivelli.xyz',
    repoUrl: 'https://github.com/ChristianCrivelli/music-recommendation-webapp',
    repoLabel: 'App Code',
    extraRepos: [
      { label: 'Data & Recommender Engine', url: 'https://github.com/ChristianCrivelli/music-recommendation-pipeline' },
    ],
    image: '/thumbnails/album-recommender.png',
    featured: true,
  },
  {
    slug: 'stock-culture',
    title: 'Fast Food & Gaming Stock Correlation Study',
    type: 'research',
    status: 'in-progress',
    oneLiner: 'An analysis of how public health and cultural indicators relate to stock performance — and a case study in catching a spurious correlation.',
    description:
      'A Python-based research project testing whether population health metrics (obesity prevalence) show a measurable relationship with equity market performance, correlating 45 years of returns (1980–2024) across 65 individual restaurant and fast-food tickers against national obesity trends in six countries plus a global aggregate, using both Pearson and Spearman correlation. The headline numbers are also the trap here: obesity prevalence and the stock index level move almost in lockstep (r = 0.97 globally, up to r = 0.99 in the US) — but that\'s two series trending upward together over 45 years, not evidence either one drives the other. Switching to year-over-year changes — the actual test for a real relationship — collapses the correlation to a statistically insignificant r ≈ 0.13 (p > 0.4). The project deliberately reports both: the impressive-looking level correlation, and the honest year-over-year one that debunks it.',
    tags: ['Statistical Analysis (Pearson/Spearman)', 'Python', 'Critical / Statistical Reasoning', 'Data Analysis'],
    repoUrl: 'https://github.com/ChristianCrivelli/fastfood-gaming-stock-correlation-study',
    // Real chart from the repo (obesity_x_stock/obesity_stock_correlation_level_vs_diff.html):
    // level correlation vs. the honest year-over-year one, by country — the
    // project's actual headline finding, not a generated placeholder.
    image: '/thumbnails/stock-culture.png',
  },
  {
    slug: 'civicus-api',
    title: 'Civic Data API',
    type: 'api',
    status: 'in-progress',
    oneLiner: 'An orchestrated ETL pipeline packaging civic-space ratings for 197 countries into a free, versioned JSON API.',
    description:
      'An ETL pipeline — extracting CIVICUS Monitor\'s civic-space ratings, transforming them into normalized per-country records, and loading them as static JSON — orchestrated by a scheduled GitHub Actions workflow that runs monthly, with zero servers, zero database, and zero API keys; output is served straight off GitHub\'s raw-content CDN (mirrored on jsDelivr for edge caching). Data-quality validation runs at two points: every output record validates against a published JSON Schema, and the pipeline itself runs through CI (black, ruff, pytest) on every change. The source repo is private while a couple of data-source permissions are finalized, but the live endpoints — a global snapshot, per-country records, and an append-only change history — are already public and queryable today.',
    tags: ['Scheduled Pipelines (GitHub Actions)', 'REST API Design', 'Python', 'CI/CD'],
    image: '/project-thumb?title=Civic%20Data%20API&type=api',
    // no repoUrl / liveUrl on purpose — source is private while access is
    // finalized, even though the JSON endpoints themselves are public
  },
  {
    slug: 'demographic-studies',
    title: 'Civic Freedom & Socioeconomic Development Nexus',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'Investigates whether civic freedom is a leading indicator of economic development and SDG/MPI progress.',
    description:
      'A country-panel study testing whether civic freedom acts as a leading indicator of socioeconomic development — pooling CIVICUS Monitor and V-Dem civil-liberties scores against the UN Human Development Index, the Multidimensional Poverty Index, and UN SDG progress indicators. The test itself is two-stage: time-lagged correlation between civic-freedom scores and outcomes at 5-, 10-, and 15-year horizons, followed by a country-and-year fixed-effects panel regression controlling for GDP per capita, region, and starting conditions — so any leading-indicator claim has to survive basic confounding, not just a raw correlation. Restarted in September 2026 as a clean rebuild after the original analysis was tangled up with a different project\'s repo; currently building the ETL pipeline that extracts and merges five source datasets (CIVICUS, V-Dem, HDR/MPI, WDI, UN SDG) into one tidy country-year panel — reconciling three incompatible country-code schemes (ISO3, V-Dem\'s own codes, and the UN\'s M49) is the current data-quality validation step, done before modeling begins.',
    tags: ['Panel Regression', 'Statistical Analysis', 'Python'],
    image: '/project-thumb?title=Civic%20Freedom%20%26%20Socioeconomic%20Development%20Nexus&type=research',
    // no repoUrl on purpose — the rebuilt repo (freedom-prosperity-nexus)
    // is private
  },
  {
    slug: 'knowledge-spillover',
    title: 'CERN Knowledge Transfer Spillover Graph',
    type: 'research',
    status: 'in-progress',
    oneLiner: 'Maps how CERN research diffuses outward through forward citations and disclosed knowledge-transfer deals.',
    description:
      'A citation-diffusion pipeline built for a CERN Knowledge Transfer audience. It fetches CERN KT highlights via the WordPress REST API and builds a directed forward-citation spillover graph via the OpenAlex API, tracking which fields and countries later cite CERN publications — combined with disclosed KT contracts/partners as a second spillover signal. Renders an interactive Pyvis network visualization end-to-end.',
    tags: ['Citation & Diffusion Network Analysis', 'REST API Design', 'Python', 'Network Visualization'],
    repoUrl: 'https://github.com/ChristianCrivelli/knowledge_spillover',
    // No committed chart output to screenshot (citation_graph.html is a
    // pipeline run artifact, not checked in) — falls back to the repo page.
    image: '/thumbnails/knowledge-spillover.png',
  },
  {
    slug: 'city-walkability',
    title: 'Geospatial Walkability Analytics',
    type: 'research',
    status: 'in-progress',
    oneLiner: 'Analyzes pedestrian infrastructure networks to score urban walkability.',
    description:
      'A network-analysis project that models pedestrian nodes across a city to evaluate and compare walkability. Phase 1 is an ETL pipeline — extracting street networks from OpenStreetMap via OSMnx, transforming them with elevation and terrain-grade enrichment from the Open-Elevation API, and loading the result into per-city cached GraphML/GeoPackage/CSV outputs — complete across five study cities (Maastricht, Matosinhos, Sabancı University in Istanbul, Lanaken, and Mindelo), covering roughly 32,000 pedestrian nodes, 87,000 edges, and 5,150 km of mapped network. One real data-quality validation catch along the way: the original pedestrian-edge filter treated an explicit sidewalk=no OpenStreetMap tag as evidence a sidewalk exists, because it checked tag presence rather than value — found and fixed during implementation.',
    tags: ['OSMnx / NetworkX', 'GeoPandas', 'Elevation & Terrain Modeling', 'Python'],
    repoUrl: 'https://github.com/ChristianCrivelli/geospatial-walkability-analytics',
    // Real output figure from the repo (figures/all_locations_overview.png):
    // the pedestrian node maps for all five study cities.
    image: '/thumbnails/city-walkability.png',
  },
  {
    slug: '2vs3',
    title: 'NBA Shot Efficiency Pareto Model',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'Treats the basketball court as a portfolio to find the optimal risk/reward frontier for shot selection.',
    description:
      'A mathematical optimization project inspired by the "Moreyball" analytics revolution, which frames shot selection as a multi-objective problem: maximizing expected value while accounting for variance. By treating the court as an asset portfolio, the model calculates the exact break-even frontier where a team cannot increase expected point return without increasing the risk of missing the shot — directly applying Pareto optimization to sports analytics. Zone-level efficiency is trained on 218,701 logged shots from the 2023–24 NBA season; a separate era-comparison view plots the 100 highest-scoring player-seasons since 1979–80 — the first season with a 3-point line, and 47 seasons of box-score data — to show how the risk/reward frontier has drifted as the league has shifted toward 3-point shooting.',
    tags: ['Pareto / Multi-Objective Optimization', 'Statistical Analysis', 'Python', 'Data Analysis'],
    repoUrl: 'https://github.com/ChristianCrivelli/nba-shot-efficiency-pareto-model',
    // Real output figure from the repo (outputs/zone_efficiency_full.png):
    // the Pareto-efficient vs. dominated shot-zone court charts.
    image: '/thumbnails/2vs3.png',
    featured: true,
  },
  {
    slug: 'aging-simulator',
    title: 'Silver Tsunami Simulator',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'A Gompertz-Makeham mortality model feeding a national pension and healthcare fiscal-risk simulator.',
    description:
      'A demographic-aging and fiscal-risk simulator built around Gompertz-Makeham mortality curves feeding a national pension and healthcare cost model — chosen over a pure-fiscal or pure-biodemography angle for the hybrid view it gives. The current build walks through a single country (Japan) as a first pass, framed honestly as an illustrative case study rather than a validated cross-country result. A Tableau dashboard and a BRD, framed as a request from a pension-regulator/ministry-of-finance stakeholder, are in progress.',
    tags: ['Demographic / Population Modeling (Gompertz-Makeham)', 'Statistical Analysis', 'Python', 'Fiscal / Policy Simulation'],
    repoUrl: 'https://github.com/ChristianCrivelli/longevity-fiscal-risk-simulator',
    image: '/project-thumb?title=Silver%20Tsunami%20Simulator&type=research',
    featured: true,
  },
  {
    slug: 'flashcards',
    title: 'Notion Anki Flashcard Sync',
    type: 'tool',
    status: 'completed',
    oneLiner: 'Turns a Notion vocabulary database into a local flashcard study tool.',
    description:
      'An ETL pipeline that turns vocabulary sitting in a Notion database into Anki flashcards automatically. A GitHub Actions job orchestrates a daily run that extracts new Notion entries and transforms each into a definition through a three-tier fallback chain (Free Dictionary API → Merriam-Webster → Gemini), then queues the result; a local delivery step loads that queue into Anki via AnkiConnect as reversible cards, so one vocabulary entry becomes both a word→definition and a definition→word review card. Anki\'s own duplicate detection acts as the pipeline\'s data-quality validation step, keeping re-runs safe.',
    tags: ['Notion API', 'Scheduled Pipelines (GitHub Actions)', 'REST API Design', 'Python'],
    repoUrl: 'https://github.com/ChristianCrivelli/notion-anki-flashcard-sync',
    // No chart to show for a background sync tool — falls back to the repo page.
    image: '/thumbnails/flashcards.png',
  },
  {
    slug: 'portfolio-site',
    title: 'Personal CV & Developer Portfolio',
    type: 'webapp',
    status: 'live',
    oneLiner: 'This site — a Next.js portfolio centralizing my projects, skills, and background into one interactive showcase.',
    description:
      'A responsive personal portfolio built with Next.js and Tailwind, moving away from a static resume toward an interactive, continuously updated showcase. Features live GitHub activity, education/experience timelines, dynamic OG images, and JSON-LD structured data for discoverability.',
    tags: ['Next.js / React', 'Tailwind CSS', 'TypeScript', 'Web Development'],
    liveUrl: 'https://christiancrivelli.xyz',
    repoUrl: 'https://github.com/ChristianCrivelli/nextjs-tailwind-portfolio',
    image: '/thumbnails/portfolio-site.png',
  },
];
