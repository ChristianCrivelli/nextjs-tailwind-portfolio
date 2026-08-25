export function GithubActivity({ username }: { username: string }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">GitHub Activity</h2>
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s GitHub contribution graph`}
        loading="lazy"
        className="w-full rounded-lg border"
        style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--surface)' }}
      />
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm underline"
      >
        View full profile →<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  );
}