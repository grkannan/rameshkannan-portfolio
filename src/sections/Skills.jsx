import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section section-alt">
      <p className="section-label">02 — Skills</p>
      <h2 className="section-title">Tools & <em>Technologies</em></h2>
      <div className="section-rule"></div>
      <div className="skills-grid">
        {portfolioData.skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <div className="skill-cat">{skillGroup.category}</div>
            {skillGroup.items.map((skill, sIndex) => (
              <div key={sIndex} className="sk-item">
                <div className="sk-row">
                  <span className="sk-name">{skill.name}</span>
                  {/* <span className="sk-pct">{skill.level}</span> */}
                </div>
                {/* <div className="sk-bar">
                  <div className="sk-fill" style={{ width: skill.level }}></div>
                </div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;