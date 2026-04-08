import React from 'react';
import { Github, Linkedin, ArrowRight, Settings, Eye, MessageSquare, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AthiraHero = ({ data }) => {
  return (
    <div className="hero-laboratory">
      {/* Dynamic Background */}
      <div className="lab-background">
        <div className="neural-breathing"></div>
        <div className="lab-grid"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="lab-container">
        <div className="lab-layout">
          {/* Text Content Area */}
          <div className="lab-info">
            <motion.div
              className="lab-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={14} className="badge-icon" />
              <span>Hello 👋, I'm</span>
            </motion.div>

            <motion.h1 
              className="lab-title"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Athira <span className="title-accent">PT.</span>
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
                  whileHover={{ y: -2, backgroundColor: 'rgba(182, 196, 255, 0.1)' }}
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
              <Link to="/projects" className="lab-btn lab-btn-primary">
                Explore Work
                <div className="btn-glow"></div>
              </Link>
              <Link to="/contact" className="lab-btn lab-btn-primary">
                Get In Touch <ArrowRight size={18} className="arrow-icon" />
                <div className="btn-glow"></div>
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
                <div className="hud-scanner"></div>
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
          background: #0d0d12;
          color: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
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
          background: radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.15) 0%, transparent 80%);
          animation: breathing 8s ease-in-out infinite alternate;
        }

        @keyframes breathing {
          from { opacity: 0.3; transform: scale(0.95); }
          to { opacity: 0.6; transform: scale(1.05); }
        }

        .lab-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(182, 196, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(182, 196, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
        }

        .orb-1 {
          top: 10%;
          right: 15%;
          width: 300px;
          height: 300px;
          background: rgba(182, 196, 255, 0.1);
        }

        .orb-2 {
          bottom: 10%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: rgba(211, 187, 255, 0.05);
        }

        /* --- Container & Layout --- */
        .lab-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 6rem 2rem;
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
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.15);
          border-radius: 100px;
          color: #b6c4ff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .lab-title {
          font-size: clamp(3rem, 10vw, 6.5rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
        }

        .title-accent {
          color: #b6c4ff;
          position: relative;
        }

        .lab-bio {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          max-width: 580px;
          margin-bottom: 3rem;
        }

        .highlight-text {
          color: #ffffff;
          font-weight: 500;
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
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .lab-tag svg {
          color: #b6c4ff;
          opacity: 0.8;
        }

        .lab-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .lab-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.25rem 2.5rem;
          border-radius: 18px;
          font-weight: 700;
          font-family: var(--font-heading);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .lab-btn-primary {
          background: #b6c4ff;
          color: #0d0d12;
          box-shadow: 0 10px 25px rgba(182, 196, 255, 0.2);
        }

        .lab-btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(182, 196, 255, 0.4);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: 0.7s;
        }

        .lab-btn-primary:hover .btn-glow {
          left: 200%;
        }

        .lab-btn-ghost {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .lab-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .lab-btn-ghost:hover .arrow-icon {
          transform: translateX(5px);
        }

        .lab-socials {
          display: flex;
          gap: 2rem;
        }

        .social-icon {
          color: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #b6c4ff;
          transform: translateY(-3px);
        }

        /* --- Visual / Frame Area --- */
        .lab-visual {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .lab-frame {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 0.85;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
        }

        .frame-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(182, 196, 255, 0.1) 0%, transparent 50%);
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
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lab-frame:hover .lab-portrait {
          transform: scale(1.08);
        }

        .hud-data-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(13, 13, 18, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #b6c4ff;
          border: 1px solid rgba(182, 196, 255, 0.2);
        }

        .hud-scanner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(182, 196, 255, 0.5), transparent);
          box-shadow: 0 0 15px rgba(182, 196, 255, 0.3);
          animation: scanEffect 4s linear infinite;
        }

        @keyframes scanEffect {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .orb-decoration {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid rgba(182, 196, 255, 0.2);
          z-index: -1;
        }

        .orb-top {
          top: -30px;
          right: -30px;
          background: radial-gradient(circle at center, rgba(182, 196, 255, 0.1), transparent);
        }

        .orb-bottom {
          bottom: -40px;
          left: -40px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle at center, rgba(211, 187, 255, 0.05), transparent);
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
          .lab-socials {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .lab-container {
            padding: 4rem 1.5rem;
          }
          .lab-title {
            font-size: 3.5rem;
          }
          .lab-badge {
            margin-bottom: 2rem;
          }
          .lab-actions {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
          }
          .lab-btn {
            width: 100%;
            justify-content: center;
          }
          .lab-frame {
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default AthiraHero;
