import React from 'react';
import { motion } from 'framer-motion';

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
        <h2 className="section-title">Technical Skills</h2>
      </motion.div>

      <div className="skills-grid">
        {Object.entries(data.skills).map(([category, skills], index) => (
          <motion.div 
            key={index} 
            className="skill-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="skill-category-top">
              <span className="category-dot" />
              <h3 className="category-title">{category}</h3>
            </div>
            
            <div className="skill-tags">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-section {
          padding: 8rem 0;
          max-width: 1000px;
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.015);
          display: flex;
          flex-direction: column;
        }

        .skill-category-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .category-dot {
          width: 6px;
          height: 6px;
          background: var(--text-tertiary);
          border-radius: 50%;
        }

        .category-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .skill-card:hover .category-dot {
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
