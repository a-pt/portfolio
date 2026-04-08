import React from 'react';
import { Github, ExternalLink, Sparkles, Binary, Layout, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  return (
    <div className="projects-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>PROJECT_ARCHIVE</span>
        </div>
        <h2 className="lab-section-title">Selected Projects</h2>
      </motion.div>

      <div className="projects-matrix">
        {data.projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-module"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="module-hud">
              <div className="hud-line"></div>
              <div className="hud-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="hud-id">MOD_{index + 1}</div>
            </div>

            <div className="module-content">
              <div className="module-top">
                <h3 className="module-title">{project.name}</h3>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="module-link"
                    aria-label="View Source Code"
                  >
                    <Github size={18} />
                    <span className="desktop-only">Repository</span>
                  </a>
                )}
              </div>
              
              <p className="module-desc">
                {project.description}
              </p>
              
              <div className="module-footer">
                <div className="tech-stack">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-pill">
                      <Code2 size={10} className="pill-icon" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .projects-laboratory {
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

        .projects-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .project-module {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
        }

        .project-module:hover {
          background: rgba(182, 196, 255, 0.04);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateY(-8px);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.5);
        }

        .module-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0.4;
        }

        .hud-line { height: 1px; flex: 1; background: linear-gradient(90deg, #b6c4ff, transparent); }
        .hud-dots { display: flex; gap: 4px; }
        .hud-dots span { width: 4px; height: 4px; border-radius: 50%; background: #b6c4ff; }
        .hud-id { font-family: var(--font-mono); font-size: 0.65rem; color: #b6c4ff; letter-spacing: 0.1em; }

        .module-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .module-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .module-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .module-link:hover {
          background: #ffffff;
          color: #0d0d12;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .module-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          min-height: 80px;
        }

        .module-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #b6c4ff;
          transition: all 0.3s ease;
        }

        .project-module:hover .tech-pill {
          border-color: rgba(182, 196, 255, 0.3);
          background: rgba(182, 196, 255, 0.1);
        }

        .pill-icon { opacity: 0.5; }

        .desktop-only { display: block; }

        @media (max-width: 1100px) {
          .projects-matrix { grid-template-columns: 1fr; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .projects-laboratory { padding: 0 1rem; }
          .lab-section-header { margin-bottom: 3rem; }
          .project-module { padding: 1.75rem; border-radius: 24px; }
          .module-title { font-size: 1.3rem; }
          .module-desc { font-size: 0.95rem; margin-bottom: 2rem; min-height: auto; }
          .desktop-only { display: none; }
          .module-link { padding: 0.5rem; border-radius: 8px; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
