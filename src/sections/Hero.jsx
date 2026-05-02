import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero">
      <div className="orb o1"></div>
      <div className="orb o2"></div>
      <div className="orb o3"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Open to opportunities</p>
        <h1 className="hero-name">{portfolioData.profile.firstName} <em>{portfolioData.profile.lastName}</em></h1>
        <p className="hero-tagline">{portfolioData.profile.tagline}</p>
        <div className="hero-cta">
          <a className="btn-p" href="#projects">View Projects →</a>
          <a className="btn-o" href="#contact">Get in Touch</a>
        </div>
      </div>
    </section>
  );
  
};

export default Hero;