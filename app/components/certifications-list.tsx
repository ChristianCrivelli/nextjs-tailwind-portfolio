import { certifications } from '../data/certifications';

function formatMonth(d: string) {
  return new Date(`${d}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function CertificationsList() {
  if (certifications.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Certifications</h2>
      <div className="space-y-6">
        {certifications.map((c) => (
          <div key={c.title} className="timeline-item pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium" style={{ color: 'var(--ink)' }}>
                {c.pdfPath ? (
                  <a href={c.pdfPath} target="_blank" rel="noopener noreferrer" className="underline">
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
              </h3>
              <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                {formatMonth(c.completedDate)}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
              {c.issuer} · {c.length}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
