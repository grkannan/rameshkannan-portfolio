import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { profile } = portfolioData;

  return (
    <section id="about" className="section">
      <p className="section-label">01 — About</p>
      <h2 className="section-title">The person behind the <em>code</em></h2>
      <div className="section-rule"></div>
      <div className="about-grid">
        <div style={{ position: 'relative' }}>
          <div className="avatar-box" style={{ overflow: 'hidden' }}>
            {profile.image ? (
              <img 
                src={profile.image} 
                alt={`${profile.firstName} ${profile.lastName}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ) : (
              <span className="avatar-init">{profile.initials}</span>
            )}
          </div>
          <div className="av-badge">{profile.badge}</div>
        </div>
        <div className="about-body">
          <p>Hi, I'm <strong>{profile.firstName} {profile.lastName}</strong> — a Computer Science postgraduate student from St. Xavier's College, Palayamkottai, with a deep love for building backend systems.</p>
          <p>My primary expertise lies in <strong>Java (Spring Boot)</strong> and <strong>Python (Django)</strong>, where I've built everything from microservices-based API gateways to full-stack e-learning platforms[cite: 1].</p>
          <p>I'm actively seeking software engineering roles where I can contribute meaningfully, continue growing, and collaborate with teams that value craft and quality[cite: 1].</p>
          <div className="stats">
            {profile.stats.map((stat, index) => (
              <div key={index}>
                <div className="stat-n">{stat.number}</div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;