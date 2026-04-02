import React from 'react';
import { Github, Linkedin, ArrowRight, Settings, Eye, MessageSquare, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AthiraHero = ({ data }) => {
  return (
    <div className="hero-redesign">
      {/* Background Effects */}
      <div className="hero-bg-effects">
        <div className="hero-radial-glow"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content-container">
        <div className="hero-main-grid">
          <div className="hero-text-side">
            <motion.p 
              className="hero-subtitle-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              HELLO👋, I'M
            </motion.p>
            
            <motion.h1 
              className="hero-main-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Athira <span className="name-accent">PT.</span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Building <span className="text-highlight">scalable AI systems</span> for real-world intelligence. 
              Specializing in high-performance Deep Learning architectures and Agentic workflows.
            </motion.p>

            <motion.div 
              className="hero-tags"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {[
                { label: 'Deep Learning', icon: <Settings size={14} /> },
                { label: 'CV', icon: <Eye size={14} /> },
                { label: 'LLM', icon: <MessageSquare size={14} /> },
                { label: 'Agentic AI', icon: <Cpu size={14} /> }
              ].map((tag) => (
                <div key={tag.label} className="hero-tag">
                  {tag.icon}
                  <span>{tag.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="hero-actions-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/projects" className="btn-stitch-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-stitch-primary">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div 
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <Github size={20} />
              </a>
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-side"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="image-lab-frame">
              <div className="frame-glow"></div>
              <div className="image-inner-wrapper">
                <img src="/athira.jpeg" alt="Athira PT" className="hero-portrait" />
                <div className="hud-corners top-left"></div>
                <div className="hud-corners bottom-right"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-redesign {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #020408;
        }

        .hero-bg-effects {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-radial-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 20%, rgba(30, 58, 138, 0.3) 0%, transparent 70%);
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, black 70%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, black 70%, transparent 100%);
        }

        .hero-content-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 8rem 2rem 4rem;
        }

        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-subtitle-tag {
          font-family: var(--font-heading);
          font-weight: 700;
          color: #b6c4ff;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .hero-main-name {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 2rem;
        }

        .name-accent {
          background: linear-gradient(to right, #b6c4ff, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(211, 187, 255, 0.7);
          max-width: 500px;
          margin-bottom: 2.5rem;
        }

        .text-highlight {
          color: #ffffff;
          font-weight: 500;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .hero-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
        }

        .hero-tag svg {
          color: #b6c4ff;
        }

        .hero-actions-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .btn-stitch-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.1rem 2rem;
          background: #1e3a8a;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 16px;
          color: white;
          font-family: var(--font-heading);
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .btn-stitch-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 40px rgba(30, 58, 138, 0.6);
        }

        .btn-stitch-outline {
          padding: 1.25rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-family: var(--font-heading);
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .btn-stitch-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hero-socials {
          display: flex;
          gap: 1.5rem;
        }

        .hero-social-link {
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .hero-social-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        /* Image Side */
        .image-lab-frame {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 1;
          margin: 0 auto;
        }

        .frame-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(79, 70, 229, 0.2) 0%, transparent 70%);
          filter: blur(40px);
          animation: pulseGlowEffect 4s ease-in-out infinite alternate;
        }

        @keyframes pulseGlowEffect {
          from { opacity: 0.4; transform: scale(0.9); }
          to { opacity: 0.8; transform: scale(1.1); }
        }

        .image-inner-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-lab-frame:hover .hero-portrait {
          transform: scale(1.05);
        }

        .hud-corners {
          position: absolute;
          width: 60px;
          height: 60px;
          pointer-events: none;
        }

        .hud-corners.top-left {
          top: 20px;
          left: 20px;
          border-top: 2px solid rgba(182, 196, 255, 0.4);
          border-left: 2px solid rgba(182, 196, 255, 0.4);
        }

        .hud-corners.bottom-right {
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid rgba(182, 196, 255, 0.4);
          border-right: 2px solid rgba(182, 196, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .hero-text-side {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-side {
            order: -1;
          }
          .hero-actions-row {
            justify-content: center;
          }
          .hero-tags {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-content-container {
            padding: 6rem 1.25rem 3rem;
          }
          .hero-main-name {
            font-size: 2.8rem;
            line-height: 1.1;
          }
          .hero-description {
            font-size: 1.05rem;
            max-width: 100%;
          }
          .hero-actions-row {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            gap: 1rem;
          }
          .btn-stitch-primary {
            width: 100%;
          }
          .image-lab-frame {
            max-width: 220px;
          }
          .hero-tag {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AthiraHero;
