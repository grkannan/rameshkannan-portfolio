import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <p className="section-label">04 — Journey</p>
      <h2 className="section-title">Experience & <em>Education</em></h2>
      <div className="section-rule"></div>
      <div className="timeline">
        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-meta">
              <span className="tl-year">{exp.years}</span>
              <span className={`tl-badge ${exp.badgeClass}`}>{exp.type}</span>
            </div>
            <h3 className="tl-title">{exp.title}</h3>
            <p className="tl-place">{exp.place}</p>
            <p className="tl-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;