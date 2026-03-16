import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, BrainCircuit } from 'lucide-react';

const categoryIcons = {
  "Languages": <Code2 className="cat-icon" />,
  "Tools & Frameworks": <Wrench className="cat-icon" />,
  "Theoretical": <BrainCircuit className="cat-icon" />
};

const Skills = ({ data }) => {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">Expertise</span>
        <h2 className="section-title">Technical Stack</h2>
      </motion.div>

      <div className="skills-grid">
        {Object.entries(data.skills).map(([category, skills], index) => (
          <motion.div 
            key={index} 
            className="skill-pillar glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="pillar-top-glow"></div>
            
            <div className="skill-category-top">
              <div className="icon-box">
                {categoryIcons[category] || <Code2 className="cat-icon" />}
              </div>
              <h3 className="category-title">{category}</h3>
            </div>
            
            <div className="skill-tags">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-section {
          padding: 8rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-header {
          margin-bottom: 4rem;
        }

        .section-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .skill-pillar {
          padding: 3rem 2.5rem;
          background: rgba(2, 4, 8, 0.4);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .pillar-top-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          opacity: 0.3;
          transition: all 0.5s ease;
        }

        .skill-pillar:hover .pillar-top-glow {
          opacity: 1;
          width: 80%;
          box-shadow: 0 0 20px 2px var(--accent-primary);
        }

        .skill-category-top {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-pillar:hover .icon-box {
          background: rgba(56, 189, 248, 0.15);
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.2);
        }

        .cat-icon {
          width: 26px;
          height: 26px;
        }

        .category-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.05);
          border-color: rgba(56, 189, 248, 0.3);
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 950px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-pillar {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
