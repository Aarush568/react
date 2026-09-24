import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Waves, Phone, Menu, X, CalendarCheck } from 'lucide-react';
import './Header.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Suites' },
  { to: '/dining', label: 'Dining' },
  { to: '/spa', label: 'Spa & Wellness' },
  { to: '/activities', label: 'Activities' },
  { to: '/offers', label: 'Offers' },
  { to: '/about', label: 'About' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Waves size={20} strokeWidth={2.5} />
          </span>
          <span className="brand-text">
            <strong>Azzurra Bay</strong>
            <small>Resort &amp; Spa</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="nav-link nav-phone" href="tel:+302286000000">
            <Phone size={15} /> +30 2286 000 000
          </a>
          <Link to="/contact" className="btn btn-primary-alt nav-cta" onClick={() => setOpen(false)}>
            <CalendarCheck size={17} /> Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
