import { Project } from '../data/projects';

export function ThesisShowcase({ project }: { project: Project }) {
  return (
    <article>
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <p className="mt-3 text-lg text-neutral-700">{project.abstract}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-chip">
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.pdfPath && (
        <a
          href={project.pdfPath}
          download
          className="mt-6 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Download PDF
        </a>
      )}
      <div className="mt-8 prose">{project.description}</div>
    </article>
  );
}