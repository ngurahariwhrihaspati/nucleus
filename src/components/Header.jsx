import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navigation = [
  { label: 'Destinations', target: '#destinations' },
  { label: 'Travel stories', target: '#blog' },
  { label: 'Experiences', target: '#reviews' },
  { label: 'Contact', target: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => (
    document.documentElement.dataset.theme === 'dark'
  ));
  const location = useLocation();
  const isHome = location.pathname === '/';
  const sectionHref = (target) => (
    isHome ? target : `${import.meta.env.BASE_URL}${target}`
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    setIsDark(nextTheme === 'dark');

    try {
      window.localStorage.setItem('nucleus-theme', nextTheme);
    } catch {
      // The theme still changes for this visit when storage is unavailable.
    }
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-brand" to="/" onClick={closeMenu}>
          <span className="site-brand__mark" aria-hidden="true">N</span>
          <span>Nucleus<span className="site-brand__period">.</span></span>
        </Link>

        <ul className="site-nav__links">
          {navigation.map((item) => (
            <li key={item.label}>
              <a href={sectionHref(item.target)}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          type="button"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          <svg
            className="theme-toggle__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isDark ? (
              <path
                d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>

        <a className="site-nav__cta" href={sectionHref('#booking')}>Plan your trip <span aria-hidden="true">↗</span></a>

        <button
          className={`site-nav__toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        id="nav-drawer"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a href={sectionHref(item.target)} key={item.label} onClick={closeMenu}>
            {item.label}<span aria-hidden="true">↗</span>
          </a>
        ))}
        <a className="nav-drawer__cta" href={sectionHref('#booking')} onClick={closeMenu}>
          Plan your trip<span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
