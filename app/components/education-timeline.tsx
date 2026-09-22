import { education } from '../data/education';

function formatRange(start: string, end?: string) {
  const fmt = (d: string) =>
    new Date(`${d}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
}

export function EducationTimeline() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Education</h2>
      <div className="space-y-8">
        {education.map((entry, i) => (
          <div key={i} className="timeline-item pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium" style={{ color: 'var(--ink)' }}>{entry.institution}</h3>
              <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                {formatRange(entry.startDate, entry.endDate)}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>{entry.degree}</p>
            {entry.status === 'in-progress' && (
              <span className="mt-1 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                In Progress
              </span>
            )}
            {entry.skills && entry.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.skills.map((s) => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            )}
            {entry.relevantCoursework && entry.relevantCoursework.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.relevantCoursework.map((c) => (
                  <span key={c} className="skill-chip">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}