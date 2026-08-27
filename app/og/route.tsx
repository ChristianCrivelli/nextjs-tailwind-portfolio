import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Christian Crivelli';
  const subtitle =
    searchParams.get('subtitle') ??
    'Business Analytics & Data Science Portfolio';

  // Colors mirror the dark-mode design tokens in app/global.css (--bg,
  // --ink, --ink-muted, --accent, --border-soft) — ImageResponse can't read
  // CSS custom properties, so the values are hardcoded here. Keep these in
  // sync if the palette in global.css ever changes. Dark is used regardless
  // of visitor theme since OG previews (link unfurls) have no light/dark
  // context of their own.
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0e1013',
          color: '#eef1f3',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 20,
            backgroundColor: '#2dd4a7',
            color: '#0e1013',
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          CC
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 32, marginTop: 20, color: '#9aa4ab' }}>
          {subtitle}
        </div>
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 4,
            borderRadius: 2,
            backgroundColor: '#2dd4a7',
            marginTop: 40,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
