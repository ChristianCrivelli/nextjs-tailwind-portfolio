import { skillCategories, SkillCategory } from '../data/skills';

// Small line icons (24x24, currentColor stroke) — kept inline rather than
// pulling in an icon package, so this stays a zero-dependency component.
const iconPaths: Record<SkillCategory['icon'], React.ReactNode> = {
  code: (
    <path d="M9 18 3 12l6-6M15 6l6 6-6 6" />
  ),
  chart: (
    <path d="M3 3v16a2 2 0 0 0 2 2h16M7 16v-4M12 16V8M17 16v-7" />
  ),
  pipeline: (
    <>
      <circle cx="5" cy="6" r="2.25" />
      <circle cx="19" cy="18" r="2.25" />
      <path d="M7.25 6H15a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9a4 4 0 0 0-4 4v0" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
    </>
  ),
  map: (
    <>
      <path d="M9 20 3 17.5v-13L9 7l6-2.5 6 2.5v13l-6-2.5-6 2.5Z" />
      <path d="M9 4.5v15.5M15 7v13" />
    </>
  ),
  tools: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.55 2.55-2.75-2.75L14.7 6.3Z" />
  ),
};

function CategoryIcon({ icon }: { icon: SkillCategory['icon'] }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 flex-shrink-0"
      style={{ color: 'var(--accent)' }}
    >
      {iconPaths[icon]}
    </svg>
  );
}

export function SkillsList() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Skills</h2>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <div
              className="mb-2.5 flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--ink)' }}
            >
              <CategoryIcon icon={cat.icon} />
              {cat.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="skill-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
