import { useState } from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleThemeToggle = () => {
    toggleTheme();
    closeMobileMenu();
  };

  return (
    <>
      <nav className="nav">
        <a className="nav-logo" href="#">Ramesh<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="dark-toggle desktop-toggle" onClick={toggleTheme}>
          {isDark ? '☀ Light' : '◑ Dark'}
        </button>
        <button 
          className={`nav-hamburger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#experience" onClick={closeMobileMenu}>Journey</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <button className="dark-toggle mobile-toggle" onClick={handleThemeToggle}>
          {isDark ? '☀ Light Mode' : '◑ Dark Mode'}
        </button>
      </div>
    </>
  );
};

export default Navbar;