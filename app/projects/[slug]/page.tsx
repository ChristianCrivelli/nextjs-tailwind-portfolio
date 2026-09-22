import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { ThesisShowcase } from '../../components/thesis-showcase';
import { statusVars, statusLabel } from '../../lib/project-status';

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

  const status = statusVars[project.status];

  return (
    <article className="animate-rise-in">
      <Link
        href="/projects"
        className="text-sm underline"
        style={{ color: 'var(--ink-muted)' }}
      >
        ← All projects
      </Link>

      <div className="project-card mt-4">
        {project.image && (
          <div className="project-thumb">
            <img src={project.image} alt="" />
          </div>
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--ink)' }}>
              {project.title}
            </h1>
            <span
              className="flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold"
              style={{ color: status.ink, backgroundColor: status.bg }}
            >
              {statusLabel[project.status]}
            </span>
          </div>

          <p className="mt-3 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--ink-muted)' }}>
            {project.oneLiner}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-chip">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(project.liveUrl || project.repoUrl || project.extraRepos) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
                  Live demo<span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
                  {project.repoLabel ?? 'Repository'}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.extraRepos?.map((repo) => (
                <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className="btn-pill">
                  {repo.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          )}

          <div className="mt-8 border-t pt-6" style={{ borderColor: 'var(--border-soft)' }}>
            <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
