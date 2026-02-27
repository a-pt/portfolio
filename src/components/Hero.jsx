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

      {/* ── Photo ── */}
      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="photo-glow-ring" />
        <div className="photo-frame">
          <img src="/athira.jpeg" alt="Athira PT" className="hero-photo" />
          <div className="photo-fade-bottom" />
        </div>
        <div className="orbit-dot orbit-dot-1" />
        <div className="orbit-dot orbit-dot-2" />
      </motion.div>

      {/* ── Text content ── */}
      <div className="hero-text">

        {/* Name — letter by letter stagger */}
        <motion.h1
          className="name text-gradient"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.045, delayChildren: 0.5 } },
          }}
        >
          {data.name.split('').map((char, i) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              variants={{
                hidden: { opacity: 0, y: 24, rotateX: -40 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title — word by word, split on | */}
        <motion.h2
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } },
          }}
        >
          {data.title.split(' | ').map((segment, i, arr) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              {segment}{i < arr.length - 1 && <span style={{ opacity: 0.4, margin: '0 0.35rem' }}>|</span>}
            </motion.span>
          ))}
        </motion.h2>

        {/* Tagline — whole line slides up with a glow pulse */}
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 1.7, ease: 'easeOut' }}
        >
          {data.tagline}
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.4)}>
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
        </motion.div>

        <motion.div className="social-links" {...fadeUp(0.5)}>
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
        </motion.div>
      </div>

      <style>{`
        /* ── Layout ──────────────── */
        .hero-section {
          min-height: calc(100vh - 70px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 2rem;
          padding: 5rem 0 3rem;
        }

        /* ── Text side ────────────── */
        .hero-text {
          max-width: 680px;
        }
        .name {
          font-size: clamp(2.6rem, 6vw, 5rem);
          margin-bottom: 0.6rem;
          line-height: 1.05;
        }
        .hero-title {
          font-size: clamp(0.9rem, 1.8vw, 1.2rem);
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          font-weight: 400;
        }
        .hero-summary {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: var(--text-primary);
          opacity: 0.75;
          max-width: 520px;
          margin: 0 auto 2.25rem;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
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
          justify-content: center;
        }
        .social-icon {
          color: var(--text-secondary);
          transition: color 0.3s, transform 0.3s;
        }
        .social-icon:hover {
          color: var(--accent-primary);
        }

        /* ── Photo ───────────────── */
        .hero-photo-wrap {
          flex-shrink: 0;
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: photo-float 5s ease-in-out infinite;
        }
        @keyframes photo-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }

        /* Soft outer glow ring */
        .photo-glow-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--accent-primary),
            var(--accent-secondary),
            var(--accent-primary)
          );
          opacity: 0.35;
          filter: blur(18px);
          animation: ring-spin 8s linear infinite;
          z-index: 0;
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Photo frame */
        .photo-frame {
          position: relative;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid rgba(56, 189, 248, 0.5);
          box-shadow:
            0 0 0 6px rgba(56, 189, 248, 0.06),
            0 0 40px rgba(56, 189, 248, 0.15),
            0 20px 60px rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.95) saturate(0.9);
          transition: transform 0.6s ease, filter 0.4s ease;
        }
        .photo-frame:hover .hero-photo {
          transform: scale(1.04);
          filter: brightness(1) saturate(1.05);
        }

        /* Bottom gradient — melts photo into dark bg */
        .photo-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(
            to top,
            rgba(2, 6, 23, 0.92) 0%,
            rgba(2, 6, 23, 0.5) 40%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        /* Orbiting dots */
        .orbit-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          z-index: 0;
        }
        .orbit-dot-1 {
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-primary);
          top: 12px;
          right: 20px;
          animation: orbit-1 4s ease-in-out infinite;
        }
        .orbit-dot-2 {
          background: var(--accent-secondary);
          box-shadow: 0 0 10px var(--accent-secondary);
          bottom: 20px;
          left: 10px;
          width: 7px;
          height: 7px;
          animation: orbit-2 5s ease-in-out infinite;
        }
        @keyframes orbit-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 1; }
          50%       { transform: translateY(8px) translateX(-4px); opacity: 0.6; }
        }
        @keyframes orbit-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.8; }
          50%       { transform: translateY(-10px) translateX(6px); opacity: 0.4; }
        }

        /* ── Responsive ───────────── */
        @media (max-width: 900px) {
          .hero-photo-wrap {
            width: 160px;
            height: 160px;
          }
          .photo-frame {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
