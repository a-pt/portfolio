import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Binary, ChevronRight, Activity, Cpu, ShieldCheck } from 'lucide-react';

const About = ({ data }) => {
  return (
    <div className="about-laboratory">
      {/* HUD Header */}
      <motion.div 
        className="lab-section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Activity size={14} className="badge-animated" />
          <span>BIOGRAPHIC_PROTOCOL</span>
        </div>
        <h2 className="lab-section-title">About Me</h2>
      </motion.div>

      {/* Main Content Layout: Two Columns */}
      <div className="about-split-layout">
        
        {/* Left Column: Dossier (Bio) */}
        <motion.div 
          className="dossier-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="dossier-header">
            <Binary size={18} className="text-accent" />
            <div className="header-line"></div>
            <span className="mono-label">SUBJECT_FILE.log</span>
          </div>
          
          <div className="dossier-body">
            {data.about.split('\n\n').map((para, i) => (
              <p key={i} className="editorial-text">
                {para}
              </p>
            ))}
          </div>

          <div className="dossier-footer">
            <div className="coord-marker">SESSION_ACTIVE // UID: {data.name.split(' ')[0].toUpperCase()}</div>
            <div className="footer-line"></div>
            <div className="status-indicator">
              <div className="status-dot pulsed"></div>
              <span>OPERATIONAL</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Technical Recognition Modules */}
        <div className="recognition-panel">
          <div className="panel-header">
            <Cpu size={18} className="text-accent" />
            <span className="mono-label">VERIFIED_ACHIEVEMENTS</span>
          </div>

          <div className="recognition-grid">
            {data?.achievements?.map((achievement, i) => (
              <motion.div 
                key={i}
                className="recognition-module"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="module-head">
                  <div className="module-id">FILE_0{i + 1}</div>
                  <ShieldCheck size={14} className="text-active" />
                </div>
                <div className="module-body">
                  <p className="achievement-text">
                    {achievement}
                  </p>
                </div>
                <div className="module-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-laboratory {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .lab-section-header { margin-bottom: 5rem; }

        .lab-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem 1.25rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          color: var(--accent-primary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
        }

        .badge-animated { animation: heartbeat 2s infinite; }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .lab-section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        /* Split Layout Styling */
        .about-split-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: start;
        }

        /* Dossier Panel (Bio) */
        .dossier-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 32px;
          padding: 3.5rem;
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }

        .dossier-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          opacity: 0.5;
        }

        .header-line { height: 1px; flex: 1; background: linear-gradient(90deg, var(--accent-primary), transparent); }
        .mono-label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-primary); letter-spacing: 0.2em; }

        .editorial-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .dossier-footer {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .coord-marker { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-tertiary); }
        .footer-line { flex: 1; height: 1px; background: var(--glass-border); }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-primary);
        }

        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-primary); }
        .pulsed { animation: glowPulse 2s infinite; }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 0px var(--accent-primary); }
          50% { opacity: 1; box-shadow: 0 0 10px var(--accent-primary); }
        }

        /* Recognition Panel */
        .recognition-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .recognition-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .recognition-module {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .recognition-module:hover {
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          transform: translateX(10px);
        }

        .module-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .module-id {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-tertiary);
          letter-spacing: 0.1em;
        }

        .text-active { color: var(--accent-primary); }

        .achievement-text {
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.5;
          font-weight: 500;
        }

        .module-glow {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, var(--accent-glow), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .recognition-module:hover .module-glow { opacity: 1; }

        /* Responsive Settings */
        @media (max-width: 1100px) {
          .about-split-layout { grid-template-columns: 1fr; gap: 4rem; }
          .dossier-panel { padding: 2.5rem; }
        }

        @media (max-width: 768px) {
          .lab-section-header { margin-bottom: 3rem; }
          .dossier-panel { padding: 2rem; border-radius: 24px; }
          .editorial-text { font-size: 1.1rem; }
          .achievement-text { font-size: 0.95rem; }
          .recognition-module:hover { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default About;
