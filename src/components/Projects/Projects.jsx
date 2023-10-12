import './Projects.css';

export default function Projects({ children }) {
  return (
    <section className="projects" id="projects">
      <hr />
      <h2>Projects</h2>
      <div>{children}</div>
    </section>
  );
}
