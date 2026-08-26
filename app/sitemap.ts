import { MetadataRoute } from 'next';
import { projects } from './data/projects';

export const baseUrl = 'https://christiancrivelli.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const staticRoutes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}