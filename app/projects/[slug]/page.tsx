import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import { ThesisShowcase } from '../../components/thesis-showcase';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  if (project.type === 'thesis') {
    return <ThesisShowcase project={project} />;
  }

  return (
    <article>
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <p className="mt-2 text-neutral-600">{project.description}</p>
      <div className="mt-4 flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Live demo<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {project.repoLabel ?? 'Repository'}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {project.extraRepos?.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {repo.label}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  );
}