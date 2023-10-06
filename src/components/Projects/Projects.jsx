import './Projects.css';
import Project from './Project';

export default function Projects() {
  return (
    <section className="projects">
      <hr />
      <h2>Projects</h2>
      <div>
        <Project
          text={'Hola que tal'}
          url={'./profile-pic.png'}
          alt={'profile pic'}
        />
      </div>
    </section>
  );
}
