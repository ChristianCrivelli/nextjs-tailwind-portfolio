import Link from 'next/link';
import { projects } from './data/projects';
import { ProjectCard } from './components/project-card';
import { EducationTimeline } from './components/education-timeline';
import { GithubActivity } from './components/github-activity';
import { ExperienceTimeline } from './components/experience-timeline';
import { LeadershipTimeline } from './components/leadership-timeline';
import { JourneyMap } from './components/journey-map-loader';
import { SkillsList } from './components/skills-list';
import { Languages } from './components/languages';
import { ContactForm } from './components/contact-form';
import { getAvailabilityBadge } from './lib/availability';

export default function Page() {
  const featured = projects.filter((p) => p.featured);
  const badge = getAvailabilityBadge();

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="hero-surface -mx-2 rounded-3xl px-6 py-12 sm:-mx-4 sm:px-10 sm:py-14 md:mx-0">
        <div className="hero-glow-a" />
        <div className="hero-glow-b" />
        <div className="hero-grain" />
        <div className="relative grid gap-10 sm:grid-cols-[320px_minmax(0,1fr)] sm:items-start sm:gap-14">
          <div className="animate-rise-in">
            <div className="logo-mark mb-5" />
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Christian
              <br />
              Crivelli
            </h1>
            <p className="mt-2 text-sm font-medium leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
              Business Analytics Student
              <br />
              Systems Architect
              <br />
              Data for Good
            </p>
            <span
              className={`status-badge mt-5 text-sm ${badge.className}`}
            >
              ● {badge.label}
            </span>
          </div>
          <p
            className="animate-rise-in-delay max-w-2xl text-[17px] leading-[1.7]"
            style={{ color: 'var(--ink-muted)' }}
          >
            I&apos;m a Portugal-born Italo-Brazilian, currently completing a Master&apos;s in
            Business Intelligence &amp; Smart Services at Maastricht University
            after a Bachelor&apos;s in Business Analytics. I like working where
            data meets real-world problems — civic governance, public health,
            sports, and beyond — and outside of coursework I sit on the board
            of Mukti Sanctuary, an animal rescue non-profit in Lisbon.
            I&apos;m looking for opportunities to grow my skills while
            discovering new places, and hopefully make a positive contribution
            along the way.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* GitHub Activity */}
      <GithubActivity username="ChristianCrivelli" />

      {/* Work Experience */}
      <ExperienceTimeline />

      {/* Leadership */}
      <LeadershipTimeline />

      {/* Education */}
      <EducationTimeline />

      {/* Skills */}
      <SkillsList />

      {/* Languages */}
      <Languages />

      {/* Journey Map */}
      <JourneyMap />

      {/* Get in Touch */}
      <section id="contact" className="scroll-mt-8">
        <h2 className="mb-2 text-xl font-medium">Get in Touch</h2>
        <p className="mb-4 text-sm" style={{ color: 'var(--ink-muted)' }}>
          Have an opportunity, a question, or just want to say hi? Send a message and
          I&apos;ll get back to you — or find me on{' '}
          <a
            href="https://www.linkedin.com/in/christian-crivelli-120391231/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
        <ContactForm />
      </section>
    </div>
  );
}