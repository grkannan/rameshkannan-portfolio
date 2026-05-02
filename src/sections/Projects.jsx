import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <p className="section-label">03 — Projects</p>
      <h2 className="section-title">Things I've <em>built</em></h2>
      <div className="section-rule"></div>
      <div className="proj-grid">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;