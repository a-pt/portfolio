import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo text-gradient">APT</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
        }
        .nav-container {
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
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
