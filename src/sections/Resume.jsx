import { portfolioData } from '../data/portfolioData';

const Resume = () => {
  const resumeUrl = portfolioData?.resume?.url || '/RameshKannan_G.pdf';

  return (
    <section id="resume" className="section section-alt">
      <p className="section-label">05 — Resume</p>
      <h2 className="section-title">View my <em>resume</em></h2>
      <div className="section-rule"></div>

      <div className="resume-wrap">
        <div className="resume-actions">
          <a className="resume-download" href={resumeUrl} target="_blank" rel="noreferrer">
            Open PDF ↗
          </a>
          <a className="resume-download resume-secondary" href={resumeUrl} download>
            Download
          </a>
        </div>

        <div className="resume-frame">
          <iframe
            title="Resume"
            src={resumeUrl}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="resume-fallback">
            If the resume doesn’t load, use <strong>Open PDF</strong>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

