import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Branded fallback thumbnail for projects with no live demo to screenshot
// (see app/data/projects.ts `image` field). Colors mirror the dark-mode
// design tokens in app/global.css, same approach as app/og/route.tsx.
const TYPE_LABEL: Record<string, string> = {
  tool: 'Tool',
  webapp: 'Web App',
  research: 'Research',
  api: 'API',
  thesis: 'Thesis',
};

// A distinct accent hue per project type, so generated thumbnails aren't all
// an identical dark box with a differently-colored pill — the pill, corner
// glow, accent bar, and background glyph all pick up this color.
const TYPE_ACCENT: Record<string, string> = {
  tool: '#60a5fa',
  webapp: '#2dd4a7',
  research: '#c084fc',
  api: '#fb923c',
  thesis: '#f472b6',
};

// Same colors as `rgb(r, g, b)` components, for building rgba() strings —
// satori's CSS support is a subset of the real thing and 8-digit hex alpha
// isn't reliably one of them, so alpha is composed via rgba() instead.
const TYPE_ACCENT_RGB: Record<string, string> = {
  tool: '96, 165, 250',
  webapp: '45, 212, 167',
  research: '192, 132, 252',
  api: '251, 146, 60',
  thesis: '244, 114, 182',
};

// A small monoline glyph per type, rendered large and faint in the corner —
// purely decorative texture so each card reads as its own type at a glance,
// not just a flat rectangle with a label.
function TypeGlyph({ type, color }: { type: string; color: string }) {
  const common = {
    stroke: color,
    strokeWidth: 3,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'tool':
      return (
        <svg width="220" height="220" viewBox="0 0 24 24">
          <path {...common} d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3Z" />
        </svg>
      );
    case 'webapp':
      return (
        <svg width="220" height="220" viewBox="0 0 24 24">
          <rect {...common} x="3" y="4" width="18" height="14" rx="2" />
          <path {...common} d="M3 9h18M8 20h8" />
        </svg>
      );
    case 'research':
      return (
        <svg width="220" height="220" viewBox="0 0 24 24">
          <circle {...common} cx="10" cy="10" r="6.5" />
          <path {...common} d="M15 15 21 21" />
        </svg>
      );
    case 'api':
      return (
        <svg width="220" height="220" viewBox="0 0 24 24">
          <path {...common} d="M9 6 3 12l6 6M15 6l6 6-6 6" />
        </svg>
      );
    case 'thesis':
      return (
        <svg width="220" height="220" viewBox="0 0 24 24">
          <path {...common} d="M4 5h9a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4V5ZM20 5h-4v11h4" />
        </svg>
      );
    default:
      return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Project';
  const type = searchParams.get('type') ?? '';
  const label = TYPE_LABEL[type] ?? type;
  const accent = TYPE_ACCENT[type] ?? '#2dd4a7';
  const accentRgb = TYPE_ACCENT_RGB[type] ?? TYPE_ACCENT_RGB.webapp;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0e1013',
          backgroundImage: `radial-gradient(circle at 90% 8%, rgba(${accentRgb}, 0.22) 0%, rgba(${accentRgb}, 0) 55%)`,
          padding: '48px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', position: 'absolute', top: 20, right: 20, opacity: 0.14 }}>
          <TypeGlyph type={type} color={accent} />
        </div>
        <div style={{ display: 'flex' }}>
          {label && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 18px',
                borderRadius: 9999,
                backgroundColor: `rgba(${accentRgb}, 0.14)`,
                color: accent,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 4,
              borderRadius: 2,
              backgroundColor: accent,
              marginBottom: 20,
            }}
          />
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 600, color: '#eef1f3', lineHeight: 1.25 }}>
            {title}
          </div>
        </div>
      </div>
    ),
    { width: 800, height: 450 }
  );
}
