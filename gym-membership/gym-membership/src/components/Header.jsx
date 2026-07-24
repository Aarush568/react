import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchIcon, MenuIcon, CloseIcon, UserIcon } from './Icons'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/training-areas', label: 'Training Areas' },
  { to: '/courses', label: 'Courses' },
  { to: '/membership', label: 'Membership' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <img src="https://cdn.creen.ai/prod/ai_image/user/20260725014857349043.png?Expires=1785520194&OSSAccessKeyId=LTAI5t8iYqpr98kYtoS6ivdH&Signature=r3GMheoYOWFX%2Bpm7MpJt%2B%2Fdo7G8%3D" alt="Logo" className="logo" height="40" width="65" margin-right="0.1rem" />
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          PULSE<span>FIT</span>
        </NavLink>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <div className={`search-box ${searchOpen ? 'is-open' : ''}`}>
            <input type="text" placeholder="Search classes, areas..." aria-label="Search" />
            <button
              type="button"
              className="icon-btn"
              aria-label="Toggle search"
              onClick={() => setSearchOpen((open) => !open)}
            >
              <SearchIcon width={19} height={19} />
            </button>
          </div>

          <NavLink to="/profile" className="icon-btn" aria-label="Profile">
            <UserIcon width={19} height={19} />
          </NavLink>

          <NavLink to="/membership" className="btn btn-primary btn-sm site-header__cta">
            Join Now
          </NavLink>

          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
