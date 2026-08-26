import Link from 'next/link';
import { Project } from '../data/projects';

const statusVars: Record<Project['status'], { ink: string; bg: string }> = {
  live: { ink: 'var(--status-live-ink)', bg: 'var(--status-live-bg)' },
  'in-progress': { ink: 'var(--status-progress-ink)', bg: 'var(--status-progress-bg)' },
  completed: { ink: 'var(--status-completed-ink)', bg: 'var(--status-completed-bg)' },
  archived: { ink: 'var(--status-archived-ink)', bg: 'var(--status-archived-bg)' },
};

const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusVars[project.status];
  return (
    <div className="project-card relative p-6">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 rounded-[20px]"
        aria-label={project.title}
      />
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-bold" style={{ color: 'var(--ink)' }}>{project.title}</h3>
        <span
          className="flex-shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold"
          style={{ color: status.ink, backgroundColor: status.bg }}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{project.oneLiner}</p>
      <div className="relative z-10 mt-3 flex gap-3 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Live demo
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {project.repoLabel ?? 'Code'}
            <span className="sr-only"> (opens in a new tab)</span>
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
            {repo.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </div>
  );
}