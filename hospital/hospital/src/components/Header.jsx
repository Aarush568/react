import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cross, Phone, Menu, X, CalendarClock } from 'lucide-react';
import './Header.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/fields', label: 'Medical Fields' },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-item" href="tel:+11234567000">
            <Phone size={14} /> +1 (123) 456-7000
          </a>
          <span className="topbar-item topbar-emergency">
            <Cross size={14} /> Emergency: available 24/7
          </span>
        </div>
      </div>

      <div className="container navbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Cross size={22} strokeWidth={2.5} />
          </span>
          <span className="brand-text">
            <strong>Lindenpark</strong>
            <small>General Hospital</small>
          </span>
        </NavLink>

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
          <NavLink to="/appointment" className="btn btn-primary-alt nav-cta" onClick={() => setOpen(false)}>
            <CalendarClock size={17} /> Book Appointment
          </NavLink>
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
