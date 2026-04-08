import React from 'react';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = ({ data }) => {
  return (
    <div className="achievements-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>VAULT_CERTIFICATIONS</span>
        </div>
        <h2 className="lab-section-title">Milestones & Honors</h2>
      </motion.div>

      <div className="achievements-matrix">
        {data.achievements.map((achievement, index) => (
          <motion.div 
            key={index} 
            className="achievement-module"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="module-icon-wrap">
              <Trophy size={24} className="trophy-icon" />
            </div>
            
            <div className="module-content">
              <div className="module-hud">
                <div className="hud-line"></div>
                <div className="hud-id">HONOR_{index + 1}</div>
              </div>
              <p className="achievement-text">
                {achievement}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .achievements-laboratory {
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }

        .lab-section-header { margin-bottom: 5rem; }

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
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .lab-section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .achievements-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .achievement-module {
          display: flex;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          align-items: center;
        }

        .achievement-module:hover {
          background: rgba(182, 196, 255, 0.04);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateY(-5px);
        }

        .module-icon-wrap {
          width: 64px;
          height: 64px;
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .achievement-module:hover .module-icon-wrap {
          background: #b6c4ff;
          border-color: #b6c4ff;
          color: #0d0d12;
          box-shadow: 0 0 30px rgba(182, 196, 255, 0.3);
        }

        .trophy-icon { transition: transform 0.3s ease; }
        .achievement-module:hover .trophy-icon { transform: scale(1.1) rotate(5deg); }

        .module-content { flex: 1; }

        .module-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
          opacity: 0.3;
        }

        .hud-line { height: 1px; flex: 1; background: linear-gradient(90deg, #b6c4ff, transparent); }
        .hud-id { font-family: var(--font-mono); font-size: 0.6rem; color: #b6c4ff; }

        .achievement-text {
          font-size: 1.1rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .achievements-matrix { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .achievement-module { padding: 1.75rem; gap: 1.5rem; }
          .module-icon-wrap { width: 50px; height: 50px; }
          .achievement-text { font-size: 1rem; }
          .lab-section-header { margin-bottom: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default Achievements;

