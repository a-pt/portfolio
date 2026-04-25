import React from 'react';
import { Github, Linkedin, ArrowRight, Settings, Eye, MessageSquare, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AthiraHero = ({ data }) => {
  return (
    <div className="hero-laboratory">
      {/* Dynamic Background Effects */}
      <div className="lab-background">
        <div className="neural-breathing"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="lab-container">
        <div className="lab-layout">
          {/* Text Content Area */}
          <div className="lab-info">

            <motion.h1 
              className="lab-title"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {"Athira ".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="title-accent">
                {"PT".split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              className="lab-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Building <span className="highlight-text">scalable AI systems</span> for real-world intelligence. 
              Specializing in high-performance Deep Learning architectures and Agentic workflows.
            </motion.p>

            <motion.div 
              className="lab-tags"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[
                { label: 'Deep Learning', icon: <Settings size={14} /> },
                { label: 'CV', icon: <Eye size={14} /> },
                { label: 'LLM', icon: <MessageSquare size={14} /> },
                { label: 'Agentic AI', icon: <Cpu size={14} /> }
              ].map((tag, idx) => (
                <motion.div 
                  key={tag.label} 
                  className="lab-tag"
                  whileHover={{ 
                    y: -2, 
                    backgroundColor: 'var(--glass-bg-hover)',
                    borderColor: 'var(--accent-primary)'
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                >
                  {tag.icon}
                  <span>{tag.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="lab-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/projects" className="lab-btn btn-primary">
                <motion.span
                  variants={{
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 1.0 } }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="btn-text-reveal">
                    {"Explore Work".split("").map((char, index) => (
                      <motion.span 
                        key={index} 
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.span>
                <div className="btn-glow"></div>
                <div className="btn-scanner"></div>
              </Link>

              <Link to="/contact" className="lab-btn btn-primary">
                <motion.span
                  variants={{
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 1.2 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="btn-content-wrap"
                >
                  <span className="btn-text-reveal">
                    {"Get in Touch".split("").map((char, index) => (
                      <motion.span 
                        key={index} 
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.span>
                <div className="btn-glow"></div>
                <div className="btn-scanner"></div>
              </Link>
            </motion.div>

            <motion.div 
              className="lab-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a href={data?.contact?.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href={data?.contact?.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Portrait / Visual Area */}
          <motion.div 
            className="lab-visual"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="lab-frame">
              <div className="frame-overlay"></div>
              <div className="frame-content">
                <img src="/athira.jpeg" alt="Athira PT" className="lab-portrait" />
                <div className="frame-reveal"></div>
                <div className="frame-shine"></div>
              </div>
              {/* Orbital decorations */}
              <div className="orb-decoration orb-top"></div>
              <div className="orb-decoration orb-bottom"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-laboratory {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--bg-base);
          color: var(--text-primary);
          overflow: hidden;
          display: flex;
          align-items: center;
          transition: background-color 0.4s ease, color 0.4s ease;
        }

        /* --- Background Effects --- */
        .lab-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .neural-breathing {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, var(--accent-glow) 0%, transparent 80%);
          animation: breathing 8s ease-in-out infinite alternate;
        }

        @keyframes breathing {
          from { opacity: 0.3; transform: scale(0.95); }
          to { opacity: 0.6; transform: scale(1.05); }
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 1;
          opacity: 0.15;
          transition: all 1s ease;
        }


        .orb-1 {
          top: 10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: var(--accent-primary);
        }

        .orb-2 {
          bottom: -5%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: var(--accent-secondary);
          opacity: 0.1; /* Further reduced for left side */
        }

        /* --- Container & Layout --- */
        .lab-container {
          position: relative;
          z-index: 10;
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
          padding: 6rem 5%;
        }

        .lab-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        /* --- Text Content --- */
        .lab-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          color: var(--accent-primary);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .lab-title {
          font-size: clamp(3.2rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-top: 4rem; /* Offset for removed badge */
          margin-bottom: 2rem;
        }

        .title-accent {
          color: var(--accent-primary);
          position: relative;
        }


        .lab-bio {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 3rem;
        }

        .highlight-text {
          color: var(--text-primary);
          font-weight: 600;
          border-bottom: 2px solid var(--accent-glow);
        }

        .lab-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .lab-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .lab-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .lab-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 2.5rem;
          border-radius: 100px;
          font-weight: 700;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-scanner {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%
          );
          transform: translateX(-100%);
          pointer-events: none;
        }

        .lab-btn:hover .btn-scanner {
          animation: scan 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          box-shadow: 0 10px 30px -10px var(--accent-glow);
        }

        .btn-primary:hover {
          background: var(--text-primary);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px -10px var(--accent-glow);
        }

        .btn-primary:active {
          transform: translateY(-2px) scale(0.98);
        }

        .btn-outline:hover {
          background: var(--btn-outline-hover-bg);
          color: var(--btn-outline-hover-text);
          border-color: var(--btn-outline-hover-border);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px var(--accent-glow);
        }

        .btn-content-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .lab-btn:hover .arrow-icon {
          transform: translateX(5px);
        }

        .lab-socials {
          display: flex;
          gap: 2rem;
        }

        .social-icon {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }

        /* --- Visual / Frame Area --- */
        .lab-visual {
          position: relative;
          display: flex;
          justify-content: center; /* Shifted left from flex-end */
          align-items: center;
        }

        .lab-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 0.85;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 40px;
          padding: 20px;
          backdrop-filter: blur(30px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
        }

        .frame-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-glow) 0%, transparent 50%);
          pointer-events: none;
        }

        .frame-content {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          overflow: hidden;
        }

        .lab-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) brightness(0.9) grayscale(0.2);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lab-frame:hover .lab-portrait {
          transform: scale(1.05);
        }

        .frame-reveal {
          position: absolute;
          inset: 0;
          background: var(--glass-bg);
          z-index: 2;
          transform-origin: bottom;
          animation: revealImage 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation-delay: 0.5s;
        }

        @keyframes revealImage {
          0% { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }

        .frame-shine {
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          z-index: 3;
          animation: shineSweep 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.5s;
          pointer-events: none;
        }

        @keyframes shineSweep {
          0% { left: -150%; }
          100% { left: 150%; }
        }

        .orb-decoration {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          z-index: -1;
        }

        .orb-top {
          top: -40px;
          right: -40px;
          background: radial-gradient(circle at center, var(--accent-glow), transparent);
        }

        .orb-bottom {
          bottom: -50px;
          left: -50px;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle at center, var(--accent-glow), transparent);
          opacity: 0.5;
        }

        /* --- Responsive Styles --- */
        @media (max-width: 1100px) {
          .lab-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .lab-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .lab-visual {
            justify-content: center;
            order: -1;
          }
          .lab-bio {
            margin-left: auto;
            margin-right: auto;
          }
          .lab-tags {
            justify-content: center;
          }
          .lab-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .lab-container {
            padding: 2rem 1.5rem;
          }
          .lab-visual {
            margin-top: 5rem;
            margin-bottom: 0.5rem;
          }
          .lab-title {
            font-size: 2.2rem;
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
          }
          .lab-bio {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
          .lab-actions {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
            gap: 1rem;
          }
          .lab-btn {
            width: 100%;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 0.8rem;
          }
          .lab-frame {
            max-width: 180px;
            border-radius: 24px;
            padding: 10px;
          }
          .lab-tags {
            margin-bottom: 2.5rem;
          }
          .lab-tag {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AthiraHero;
