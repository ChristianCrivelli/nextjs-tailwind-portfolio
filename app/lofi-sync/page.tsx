import Link from 'next/link';

export const metadata = {
  title: 'Lofi Sync',
  description:
    'A personal automation tool that turns Spotify playlist songs into their lofi YouTube versions.',
};

export default function LofiSyncPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Lofi Sync</h1>

      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        A small personal automation tool. It watches my Spotify playlists,
        finds the lofi / chill version of each track on YouTube, and adds it
        to a running YouTube playlist — so I always have a lofi version of
        whatever I&apos;m listening to.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">How it works</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm" style={{ color: 'var(--ink-muted)' }}>
        <li>Reads songs from my own Spotify playlists via the Spotify API.</li>
        <li>Searches YouTube for a matching lofi/chill version of each track.</li>
        <li>
          Adds matches to a single YouTube playlist on my own YouTube
          account, via the YouTube Data API.
        </li>
        <li>
          Runs on a daily schedule via GitHub Actions — no manual steps once
          it&apos;s set up.
        </li>
      </ul>

      <h2 className="mb-2 mt-10 text-xl font-medium">Who this is for</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        This is a single-user personal project — it manages a playlist on my
        own YouTube account only. It isn&apos;t a public service and doesn&apos;t have
        other users.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">Privacy</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        See the{' '}
        <Link href="/lofi-sync/privacy" className="underline">
          privacy policy
        </Link>{' '}
        for details on what data this tool accesses and how it&apos;s used.
      </p>

      <h2 className="mb-2 mt-10 text-xl font-medium">Contact</h2>
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Questions? Reach me at{' '}
        <a href="mailto:christiancrivelli13@gmail.com" className="underline">
          christiancrivelli13@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
