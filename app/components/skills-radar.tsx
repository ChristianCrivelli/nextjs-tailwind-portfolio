import { skills } from '../data/skills';

const SIZE = 300;
const CENTER = SIZE / 2;
const MAX_RADIUS = 110;
const MAX_SCORE = 5;

function getPoint(index: number, total: number, value: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = (value / MAX_SCORE) * MAX_RADIUS;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

function getLabelPoint(index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = MAX_RADIUS + 24;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export function SkillsRadar() {
  const total = skills.length;

  const dataPoints = skills
    .map((s, i) => {
      const p = getPoint(i, total, s.proficiency);
      return `${p.x},${p.y}`;
    })
    .join(' ');

  // concentric grid rings at 20/40/60/80/100%
  const rings = [0.2, 0.4, 0.6, 0.8, 1].map((fraction) => {
    const points = skills
      .map((_, i) => {
        const p = getPoint(i, total, MAX_SCORE * fraction);
        return `${p.x},${p.y}`;
      })
      .join(' ');
    return points;
  });

  // Text alternative for screen readers — the SVG shape itself conveys the
  // same info visually but isn't parseable by assistive tech.
  const summary = skills
    .map((s) => `${s.name} ${s.proficiency} out of ${MAX_SCORE}`)
    .join(', ');

  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Skills</h2>
      <p className="sr-only">Skill proficiency: {summary}.</p>
      <div className="flex justify-center">
        <svg
          aria-hidden="true"
          className="h-auto w-full max-w-[300px]"
          viewBox={`0 0 ${SIZE} ${SIZE + 20}`}
        >
          {/* grid rings */}
          {rings.map((points, i) => (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="var(--border-soft)"
              strokeWidth={1}
            />
          ))}

          {/* axis lines */}
          {skills.map((_, i) => {
            const p = getPoint(i, total, MAX_SCORE);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={p.x}
                y2={p.y}
                stroke="var(--border-soft)"
                strokeWidth={1}
              />
            );
          })}

          {/* data shape */}
          <polygon
            points={dataPoints}
            fill="var(--accent)"
            fillOpacity={0.18}
            stroke="var(--accent)"
            strokeWidth={2}
          />

          {/* labels */}
          {skills.map((s, i) => {
            const p = getLabelPoint(i, total);
            return (
              <text
                key={s.name}
                x={p.x}
                y={p.y}
                fontSize={11}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--ink-muted)"
              >
                {s.name}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
