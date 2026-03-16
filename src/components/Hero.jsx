import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] } 
  },
});

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div className="hero-image-container" {...fadeUp(0.3)}>
          <div className="hero-image-wrapper">
            <img src="/athira.jpeg" alt="Athira PT" className="hero-image" />
            <div className="hero-image-glow"></div>
            <div className="hero-image-ring"></div>
          </div>
        </motion.div>

        <div className="hero-content">
          <motion.h1 
            className="hero-name" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.name}
          </motion.h1>

          <motion.h2 
            className="hero-title text-gradient-accent" 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            AI Engineer <br />
            <span className="hero-specialties">Deep Learning | CV | LLM | Agentic AI</span>
          </motion.h2>

          <motion.p 
            className="hero-summary" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.tagline}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.4)}>
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

          <motion.div className="social-links" {...fadeUp(0.5)}>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* ── Layout ──────────────── */
        .hero-section {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 0 4rem;
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* ── Typography & Elements ─ */
        .hero-name {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
        }

        .hero-title {
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          font-family: var(--font-heading);
          line-height: 1.4;
        }

        .hero-specialties {
          font-family: var(--font-mono);
          font-size: 0.75em;
          font-weight: 400;
          opacity: 0.8;
          display: block;
          margin-top: 0.5rem;
          letter-spacing: 0;
          color: var(--text-primary);
        }

        .hero-summary {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 300;
          font-family: var(--font-body);
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

        /* ── Image ───────────────── */
        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: clamp(200px, 25vw, 320px);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          border: 4px solid rgba(255, 255, 255, 0.05);
        }

        .hero-image-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(20px);
          animation: pulseGlow 4s ease-in-out infinite alternate;
        }

        .hero-image-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.8), transparent 70%) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 3;
          animation: rotateRing 15s linear infinite;
        }

        @keyframes pulseGlow {
          0% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes rotateRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* ── Responsive ───────────── */
        @media (max-width: 900px) {
          .hero-section {
            padding-top: 6rem;
            align-items: flex-start;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .hero-content {
            align-items: center;
            text-align: center;
            order: 2;
          }
          .hero-image-container {
            order: 1;
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
