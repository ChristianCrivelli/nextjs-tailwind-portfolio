'use client';

import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { places } from '../data/places';

// Keep in sync with --accent in app/global.css. Leaflet's SVG renderer sets
// path color as a raw SVG attribute rather than through CSS, so it can't
// resolve a CSS custom property the way the marker's divIcon HTML can.
const ACCENT = '#2dd4a7';

// Custom numbered pin, replacing Leaflet's default marker image + separate
// shadow asset (no more CDN round-trip for pin art). A small accent-colored
// dot matching the rest of the site's design language, numbered in
// chronological order so the "journey" in the map's name actually reads
// as one.
function createJourneyIcon(order: number) {
  return L.divIcon({
    className: 'journey-marker',
    html: `<span class="journey-marker-dot">${order}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

// Chronological order matches the array order in app/data/places.ts.
const journeyPath: [number, number][] = places.map((p) => [p.lat, p.lon]);

export function JourneyMap() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Places I&apos;ve studied, lived, and worked</h2>
      <p className="mb-4 text-sm" style={{ color: 'var(--ink-muted)' }}>
        Five places that trace my life so far: childhood in Mindelo and Matosinhos, my first year
        of university in Lanaken, my degree in Maastricht, and an exchange semester in Istanbul.
        They&apos;re also the exact five cities behind my{' '}
        <Link href="/projects/city-walkability" className="underline">
          Geospatial Walkability Analytics project
        </Link>
        {' '}— studying their pedestrian networks was my way of taking a closer look at places
        that shaped me. I&apos;d love to keep adding more pins to this map as life adds more
        places.
      </p>
      <div className="journey-map-frame h-[420px] w-full overflow-hidden">
        <MapContainer
          center={[46, 12]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Polyline
            positions={journeyPath}
            pathOptions={{
              color: ACCENT,
              weight: 2.5,
              opacity: 0.6,
              dashArray: '2 10',
              lineCap: 'round',
            }}
          />
          {places.map((p, i) => (
            <Marker key={p.city} position={[p.lat, p.lon]} icon={createJourneyIcon(i + 1)}>
              <Popup>
                <strong>
                  {p.city}, {p.country}
                </strong>
                <br />
                {p.label}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
