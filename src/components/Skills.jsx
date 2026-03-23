import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, GraduationCap } from 'lucide-react';

const categoryIcons = {
  "Languages": <Code2 className="cat-icon" />,
  "Tools & Frameworks": <Wrench className="cat-icon" />,
  "Theoretical": <GraduationCap className="cat-icon" />
};

const Skills = ({ data }) => {
  // Map "Theoretical" to "Coursework" for UI display
  const displayCategories = Object.entries(data.skills).map(([category, skills]) => ({
    name: category === "Theoretical" ? "Coursework" : category,
    skills,
    icon: categoryIcons[category] || <Code2 className="cat-icon" />
  }));

  return (
    <div className="skills-content">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Stack</h2>
      </motion.div>

      <motion.div 
        className="skills-unified-card glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="skills-rows-container">
          {displayCategories.map((cat, index) => (
            <div key={index} className="skill-row-group">
              <div className="category-header">
                <div className="icon-box-small">
                  {cat.icon}
                </div>
                <h3 className="category-title-small">{cat.name}</h3>
              </div>
              
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              {index < displayCategories.length - 1 && <div className="row-divider" />}
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .skills-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .skills-header {
          margin-bottom: 4rem;
        }

        .skills-unified-card {
          padding: 3rem;
          background: rgba(2, 4, 8, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          position: relative;
        }

        .skills-rows-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .skill-row-group {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .row-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
          margin-top: 1rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-box-small {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }

        .cat-icon {
          width: 20px;
          height: 20px;
        }

        .category-title-small {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-tag {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.6rem 1.25rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.05);
          border-color: rgba(56, 189, 248, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.1);
        }

        @media (max-width: 768px) {
          .skills-unified-card {
            padding: 2rem 1.25rem;
          }
          .skills-rows-container {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
