import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Binary } from 'lucide-react';
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
          <span className="logo-text">ATHIRA_PT</span>
        </Link>

        {/* Desktop Navigation */}
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

        <button 
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          background: rgba(13, 13, 18, 0.8);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
          color: #ffffff;
          text-decoration: none;
        }

        .logo-icon { color: #b6c4ff; }
        .logo-text {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
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
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }

        .nav-item:hover .item-label,
        .nav-item.active .item-label {
          color: #ffffff;
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 1px;
          background: #b6c4ff;
          box-shadow: 0 0 10px rgba(182, 196, 255, 0.5);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(13, 13, 18, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
          color: rgba(255, 255, 255, 0.5);
        }

        .mobile-id {
          display: none;
        }

        .mobile-label {
          font-family: var(--font-mono);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .mobile-link.active .mobile-label {
          color: #ffffff;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-links-desktop { display: none; }
          .mobile-toggle { display: block; }
          .nav-container { padding: 0 1.5rem; }
          .lab-navbar { height: 75px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

