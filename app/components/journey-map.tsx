'use client';

import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { places } from '../data/places';

// Use CDN-hosted marker icons rather than bundling Leaflet's default
// images — avoids the classic webpack/Next asset-path breakage.
const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export function JourneyMap() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Places I&apos;ve studied, lived, and worked</h2>
      <p className="mb-4 text-sm" style={{ color: 'var(--ink-muted)' }}>
        Five places that trace my life so far: childhood in Mindelo and Matosinhos, my first year
        of university in Lanaken, my degree in Maastricht, and an exchange semester in Istanbul.
        They&apos;re also the exact five cities behind my{' '}
        <Link href="/projects/city-walkability" className="underline">
          City Walkability project
        </Link>
        {' '}— studying their pedestrian networks was my way of taking a closer look at places
        that shaped me. I&apos;d love to keep adding more pins to this map as life adds more
        places.
      </p>
      <div className="h-[420px] w-full overflow-hidden rounded-lg border" style={{ borderColor: 'var(--border-soft)' }}>
        <MapContainer
          center={[46, 12]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((p) => (
            <Marker key={p.city} position={[p.lat, p.lon]} icon={markerIcon}>
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
