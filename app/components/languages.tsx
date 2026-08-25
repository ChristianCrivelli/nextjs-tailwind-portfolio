import { languages } from '../data/languages';

export function Languages() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Languages</h2>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div key={lang.name} className="language-chip">
            <span className="font-medium" style={{ color: 'var(--ink)' }}>{lang.name}</span>
            <span style={{ color: 'var(--ink-muted)' }}> — {lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}