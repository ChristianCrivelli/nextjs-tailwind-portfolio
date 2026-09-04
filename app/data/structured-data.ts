import { baseUrl } from '../sitemap';
import { projects } from './projects';
import { skills } from './skills';

export function getPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Christian Crivelli',
    jobTitle: 'Business Analytics Student',
    url: baseUrl,
    sameAs: [
      'https://www.linkedin.com/in/christian-crivelli-120391231/',
      'https://github.com/ChristianCrivelli',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Maastricht University School of Business and Economics',
    },
    // Derived from data/skills.ts so this can't drift out of sync with the
    // Skills section on the page — add a skill there to have it picked up
    // here too.
    knowsAbout: skills,
    description:
      'Business Analytics student building data-driven projects spanning sports analytics, civic data, demographic research, and recommendation systems.',
  };
}

export function getProjectsStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.oneLiner,
        url: p.liveUrl ?? `${baseUrl}/projects/${p.slug}`,
        ...(p.repoUrl ? { codeRepository: p.repoUrl } : {}),
        creator: { '@type': 'Person', name: 'Christian Crivelli' },
      },
    })),
  };
}
