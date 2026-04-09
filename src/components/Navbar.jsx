import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Binary, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Overview',   path: '/'           },
  { label: 'Biometry',   path: '/about'      },
  { label: 'Logbook',    path: '/experience' },
  { label: 'Archive',    path: '/projects'   },
  { label: 'Matrix',     path: '/skills'     },
  { label: 'Blog',      path: '/blog'       },
  { label: 'Handshake',  path: '/contact'    },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`lab-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Binary size={24} className="logo-icon" />
          <span className="logo-text">A_PT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-actions-desktop">
          <div className="nav-links-desktop">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="item-label">{label}</span>
              </NavLink>
            ))}
          </div>

        </div>

        <div className="nav-actions-mobile">
          
          <button 
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mobile-links">
              {navItems.map(({ label, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="mobile-label">{label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .lab-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 90px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
        }

        .lab-navbar.scrolled {
          height: 70px;
          background: var(--nav-bg);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid var(--nav-border);
        }

        .nav-container {
          max-width: 1400px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2.5rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .logo-icon { color: var(--accent-primary); }
        .logo-text {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
        }

        .nav-actions-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links-desktop {
          display: flex;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 1.25rem;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }

        .item-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .nav-item:hover .item-label,
        .nav-item.active .item-label {
          color: var(--text-primary);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 1px;
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .theme-toggle {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 0.6rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: var(--glass-bg-hover);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .nav-actions-mobile {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--nav-bg);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--nav-border);
          padding: 2rem;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          color: var(--text-secondary);
        }

        .mobile-label {
          font-family: var(--font-mono);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .mobile-link.active .mobile-label {
          color: var(--text-primary);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-actions-desktop { display: none; }
          .nav-actions-mobile { display: flex; }
          .nav-container { padding: 0 1.5rem; }
          .lab-navbar { height: 75px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
