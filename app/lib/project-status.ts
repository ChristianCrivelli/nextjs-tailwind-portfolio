import { Project } from '../data/projects';

// Single source of truth for how a project's status renders as a badge —
// shared by the project card (grid/homepage) and the project detail page so
// the two can't drift out of sync (same pattern as app/lib/availability.ts).
export const statusVars: Record<Project['status'], { ink: string; bg: string }> = {
  live: { ink: 'var(--status-live-ink)', bg: 'var(--status-live-bg)' },
  'in-progress': { ink: 'var(--status-progress-ink)', bg: 'var(--status-progress-bg)' },
  completed: { ink: 'var(--status-completed-ink)', bg: 'var(--status-completed-bg)' },
  archived: { ink: 'var(--status-archived-ink)', bg: 'var(--status-archived-bg)' },
};

export const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
};
