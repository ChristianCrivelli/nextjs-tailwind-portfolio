import Link from 'next/link';

export const metadata = {
  title: 'Lofi Sync — Privacy Policy',
  description: 'Privacy policy for the Lofi Sync personal automation tool.',
};

export default function LofiSyncPrivacyPage() {
  return (
    <section>
      <h1 className="mb-1 text-2xl font-semibold">Privacy Policy</h1>
      <p className="mb-6 text-xs text-neutral-500">Last updated September 30, 2026</p>

      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Lofi Sync is a personal automation tool built and operated solely by
        me, Christian Crivelli, for my own personal use. This page explains
        what data it accesses and how that data is used.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">What this tool accesses</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm" style={{ color: 'var(--ink-muted)' }}>
        <li>
          <strong>Spotify:</strong> read-only access to my own Spotify
          playlists, to get the list of songs in them.
        </li>
        <li>
          <strong>YouTube (Google):</strong> access to my own YouTube account,
          via the scope <code>https://www.googleapis.com/auth/youtube</code>,
          used only to search for videos and to add videos to a single
          playlist that I control.
        </li>
      </ul>

      <h2 className="mb-2 mt-10 text-xl font-medium">How this data is used</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Data is used only to run the sync described on the{' '}
        <Link href="/lofi-sync" className="underline">
          Lofi Sync
        </Link>{' '}
        page: matching songs from my Spotify playlists to lofi versions on
        YouTube and adding them to my own YouTube playlist. This tool has one
        user — me. It does not have other users, does not collect data about
        anyone else, and does not use the data for advertising, analytics, or
        any purpose other than running my own playlist sync.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">Data sharing</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        This data is never sold, shared, or disclosed to any third party. It
        is not used to train AI/ML models. Access happens only through
        Spotify&apos;s and Google&apos;s own APIs, directly between the tool and those
        services.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">Storage &amp; retention</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Authentication tokens are stored in a private repository that only I
        can access, and are used only by an automated job I run on a
        schedule. Tokens are kept until I revoke them. I can revoke this
        tool&apos;s access at any time from my Google Account&apos;s{' '}
        <a href="https://myaccount.google.com/permissions" className="underline">
          third-party access settings
        </a>
        .
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">Contact</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Questions about this policy or the tool:{' '}
        <a href="mailto:christiancrivelli13@gmail.com" className="underline">
          christiancrivelli13@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
