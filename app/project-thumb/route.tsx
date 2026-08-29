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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Project';
  const type = searchParams.get('type') ?? '';
  const label = TYPE_LABEL[type] ?? type;

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
          padding: '48px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex' }}>
          {label && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 18px',
                borderRadius: 9999,
                backgroundColor: 'rgba(45, 212, 167, 0.14)',
                color: '#2dd4a7',
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 600, color: '#eef1f3', lineHeight: 1.25 }}>
          {title}
        </div>
      </div>
    ),
    { width: 800, height: 450 }
  );
}
