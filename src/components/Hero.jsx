import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } },
});

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div className="hero-badge" {...fadeUp(0.1)}>
          <span className="badge-dot"></span>
          AI Engineer & Deep Learning Researcher
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.2)}>
          {data.name}
        </motion.h1>

        <motion.h2 className="hero-title text-gradient-accent" {...fadeUp(0.3)}>
          {data.title}
        </motion.h2>

        <motion.p className="hero-summary" {...fadeUp(0.4)}>
          {data.tagline}
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.5)}>
          <Link to="/contact">
            <button className="btn-primary hero-cta">
              Get In Touch <ArrowRight size={18} />
            </button>
          </Link>
          <Link to="/projects">
            <button className="btn-outline hero-cta">
              View My Work
            </button>
          </Link>
        </motion.div>

        <motion.div className="social-links" {...fadeUp(0.6)}>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>

      <style>{`
        /* ── Layout ──────────────── */
        .hero-section {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8rem 0 4rem;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* ── Typography & Elements ─ */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-primary);
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          margin-bottom: 2rem;
          font-family: var(--font-body);
        }

        .hero-summary {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1rem 2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        /* ── Responsive ───────────── */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 6rem;
            align-items: flex-start;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-summary {
            max-width: 100%;
          }
          .hero-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
