const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#">Ramesh<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Journey</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDark ? '☀ Light' : '◑ Dark'}
      </button>
    </nav>
  );
};

export default Navbar;