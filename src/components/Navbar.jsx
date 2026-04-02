import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Timeline',   path: '/experience' },
  { label: 'Projects',   path: '/projects' },
  { label: 'Skills',     path: '/skills' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Contact',    path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>APT</Link>

        {/* Desktop links */}
        <div className="nav-links">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-mobile-drawer">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--nav-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid var(--nav-border);
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        .nav-container {
          height: 80px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }
        .nav-links {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(125, 125, 125, 0.08);
        }
        .nav-link--active {
          color: var(--text-primary) !important;
          background: rgba(125, 125, 125, 0.12);
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 26px;
          height: 2px;
          background: var(--text-primary);
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
          padding: 1rem 2rem 1.5rem;
          gap: 0.5rem;
          border-top: 1px solid var(--nav-border);
          background: var(--nav-bg);
          backdrop-filter: blur(20px);
        }
        .nav-mobile-drawer .nav-link {
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
        }
        @media (max-width: 850px) {
          .nav-links {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
          .nav-container {
            padding: 0 1.5rem;
            height: 70px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

