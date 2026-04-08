import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, GraduationCap, Hexagon, Sparkles } from 'lucide-react';

const categoryIcons = {
  "Languages": <Code2 size={20} />,
  "Tools & Frameworks": <Wrench size={20} />,
  "Theoretical": <Hexagon size={20} />
};

const Skills = ({ data }) => {
  const displayCategories = Object.entries(data.skills).map(([category, skills]) => ({
    name: category === "Theoretical" ? "Core Fundamentals" : category,
    skills,
    icon: categoryIcons[category] || <Code2 size={20} />
  }));

  return (
    <div className="skills-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>TECH_STACK_v3.2</span>
        </div>
        <h2 className="lab-section-title">Technical Matrix</h2>
      </motion.div>

      <div className="skills-matrix">
        {displayCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            className="skill-category-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="cat-header">
              <div className="cat-icon-wrap" style={{ color: index % 2 === 0 ? '#b6c4ff' : '#d3bbff' }}>
                {cat.icon}
              </div>
              <h3 className="cat-name">{cat.name}</h3>
            </div>
            
            <div className="skills-cluster">
              {cat.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-dot" style={{ backgroundColor: index % 2 === 0 ? '#b6c4ff' : '#d3bbff' }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-laboratory {
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

        .skills-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .skill-category-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-category-box:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateY(-5px);
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cat-icon-wrap {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .skills-cluster {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          padding: 0.5rem 0.8rem;
          background: rgba(255, 255, 255, 0.015);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .skill-category-box:hover .skill-item {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
        }

        .skill-dot {
          width: 5px; height: 5px; border-radius: 50%; opacity: 0.5;
        }

        @media (max-width: 1100px) {
          .skills-matrix { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .skills-matrix { grid-template-columns: 1fr; gap: 1.5rem; }
          .lab-section-header { margin-bottom: 3rem; }
          .skill-category-box { padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Skills;

