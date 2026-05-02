const ProjectCard = ({ project }) => {
  return (
    <div className="proj-card">
      <div className="ph">
        <div className="pa" style={{ background: project.iconBg }}>{project.icon}</div>
        <span className="ptag">{project.tag}</span>
        <h3 className="ptitle">{project.title}</h3>
        <p className="pdesc">{project.desc}</p>
      </div>
      <div className="pfoot">
        {project.tech.map((t, index) => (
          <span key={index} className="pill">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;