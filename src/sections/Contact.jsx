import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    // Here you would connect to EmailJS or your backend
    setIsSubmitted(true);
  };

  const { contact } = portfolioData.profile;

  return (
    <section id="contact" className="section">
      <p className="section-label">05 — Contact</p>
      <h2 className="section-title">Let's <em>connect</em></h2>
      <div className="section-rule"></div>
      <div className="contact-grid">
        <div className="ci">
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '.5rem', fontWeight: 300, lineHeight: 1.8 }}>
            I'm actively seeking software engineering roles. Whether it's a project, internship, or just a hello — reach out!
          </p>
          <a className="citem" href={`mailto:${contact.email}`}>
            <div className="cicon">✉</div>
            <div><div className="clabel">Email</div><div className="cval">{contact.email}</div></div>
          </a>
          <a className="citem" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
            <div className="cicon">📞</div>
            <div><div className="clabel">Phone</div><div className="cval">{contact.phone}</div></div>
          </a>
          <a className="citem" href={`https://${contact.github}`} target="_blank" rel="noreferrer">
            <div className="cicon">⌥</div>
            <div><div className="clabel">GitHub</div><div className="cval">{contact.github}</div></div>
          </a>
          <a className="citem" href={`https://www.linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noreferrer">
            <div className="cicon" style={{ fontSize: '.75rem', fontWeight: 600 }}>in</div>
            <div><div className="clabel">LinkedIn</div><div className="cval">{contact.linkedin}</div></div>
          </a>
        </div>
        <div>
          {isSubmitted ? (
            <div style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--mint)', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.8rem' }}>✓</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'var(--emerald)' }}>Message sent!</p>
              <p style={{ color: 'var(--muted)', fontSize: '.84rem', marginTop: '.4rem' }}>Thank you for reaching out, I will get back to you soon.</p>
            </div>
          ) : (
            <form className="cf" onSubmit={handleSubmit}>
              <div className="frow">
                <div className="fg">
                  <label className="fl">Name</label>
                  <input className="fi" type="text" name="name" placeholder="Your name" onChange={handleChange} required />
                </div>
                <div className="fg">
                  <label className="fl">Email</label>
                  <input className="fi" type="email" name="email" placeholder="your@email.com" onChange={handleChange} required />
                </div>
              </div>
              <div className="fg">
                <label className="fl">Subject</label>
                <input className="fi" type="text" name="subject" placeholder="How can I help?" onChange={handleChange} required />
              </div>
              <div className="fg">
                <label className="fl">Message</label>
                <textarea className="fta" name="message" placeholder="Tell me about your project or opportunity…" onChange={handleChange} required></textarea>
              </div>
              <button className="sbtn" type="submit">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;