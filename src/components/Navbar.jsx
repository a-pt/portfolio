import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects',   path: '/projects' },
  { label: 'Skills',     path: '/skills' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Contact',    path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo text-gradient" style={{ textDecoration: 'none' }}>APT</Link>

        {/* Desktop links */}
        <div className="nav-links">
          {navItems.map(({ label, path }) => {
            const isActive = path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                className={`nav-link${isActive ? ' nav-link--active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-mobile-drawer">
          {navItems.map(({ label, path }) => {
            const isActive = path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                className={`nav-link${isActive ? ' nav-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-container {
          height: 70px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .nav-links {
          display: flex;
          gap: 0.25rem;
          align-items: center;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          transition: color 0.25s ease, background 0.25s ease;
          text-decoration: none;
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.07);
        }
        .nav-link--active {
          color: var(--accent-primary) !important;
          background: rgba(56, 189, 248, 0.12);
          font-weight: 600;
        }
        .nav-link--active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }
        /* Hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-secondary);
          border-radius: 2px;
          transition: background 0.3s;
        }
        .nav-hamburger:hover span {
          background: var(--accent-primary);
        }
        /* Mobile drawer */
        .nav-mobile-drawer {
          display: flex;
          flex-direction: column;
          padding: 0.75rem 1.5rem 1rem;
          gap: 0.25rem;
          border-top: 1px solid var(--glass-border);
          background: rgba(2, 6, 23, 0.95);
        }
        .nav-mobile-drawer .nav-link {
          padding: 0.6rem 0.75rem;
        }
        @media (max-width: 820px) {
          .nav-links {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
