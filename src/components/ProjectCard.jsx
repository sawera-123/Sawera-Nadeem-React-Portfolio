export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-icon" aria-hidden="true">{project.number === "01" ? "⌘" : project.number === "02" ? "☾" : "✦"}</div>
      <p className="project-subtitle">{project.subtitle}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className="project-actions">
        {project.github ? <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a> : <span className="link-placeholder">GitHub link to add</span>}
        {project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a> : <span className="link-placeholder">Demo link to add</span>}
      </div>
    </article>
  );
}