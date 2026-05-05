import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">MRS</div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" onClick={e => handleNav(e, '#contact')} className="btn btn-primary" style={{padding:'0.5rem 1.4rem'}}>
            Hire Me
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
        <span style={menuOpen ? {transform:'rotate(45deg) translate(5px,5px)'} : {}} />
        <span style={menuOpen ? {opacity:0} : {}} />
        <span style={menuOpen ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}} />
      </div>
    </nav>
  );
}
