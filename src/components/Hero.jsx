import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: 'easeOut' } },
});

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <motion.div className="hero-content" {...fadeUp(0)}>


        {/* Name */}
        <motion.h1 className="name text-gradient" {...fadeUp(0.2)}>
          {data.name}
        </motion.h1>

        {/* Title */}
        <motion.h2 className="hero-title" {...fadeUp(0.3)}>
          {data.title}
        </motion.h2>

        {/* Summary tagline */}
        <motion.p className="hero-summary" {...fadeUp(0.4)}>
          {data.tagline}
        </motion.p>

        {/* Actions */}
        <motion.div className="hero-actions" {...fadeUp(0.5)}>
          <Link to="/contact">
            <motion.button
              className="btn-primary hero-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch <ArrowRight size={16} />
            </motion.button>
          </Link>
          <Link to="/projects">
            <motion.button
              className="btn-secondary hero-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work
            </motion.button>
          </Link>
          <div className="social-links">
            <motion.a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3 }}
              title="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3 }}
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>


      <style>{`
        .hero-section {
          min-height: calc(100vh - 70px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          padding: 5rem 0 3rem;
        }
        .hero-content {
          max-width: 820px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.25);
          color: var(--accent-primary);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
          letter-spacing: 0.04em;
        }
        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22d3a0;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        .name {
          font-size: clamp(3rem, 7vw, 5.5rem);
          margin-bottom: 0.6rem;
          line-height: 1.05;
        }
        .hero-title {
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          color: var(--text-secondary);
          margin-bottom: 1.2rem;
          font-weight: 400;
        }
        .hero-summary {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: var(--text-primary);
          opacity: 0.75;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          padding: 0.75rem 1.6rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          color: var(--text-secondary);
          transition: color 0.3s, transform 0.3s;
        }
        .social-icon:hover {
          color: var(--accent-primary);
        }
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.5;
          pointer-events: none;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent-primary), transparent);
          animation: scroll-grow 1.8s ease-in-out infinite;
        }
        @keyframes scroll-grow {
          0%,100% { transform: scaleY(1);   opacity: 0.5; }
          50%      { transform: scaleY(1.4); opacity: 1;   }
        }
        @media (max-width: 480px) {
          .hero-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
