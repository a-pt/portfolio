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
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          color: var(--accent-primary);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .lab-section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        .projects-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .project-module {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 32px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }

        .project-module:hover {
          background: var(--glass-bg-hover);
          border-color: var(--glass-border-hover);
          transform: translateY(-8px);
          box-shadow: 0 40px 80px -20px var(--accent-glow);
        }

        .module-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0.6;
        }

        .hud-line { height: 1px; flex: 1; background: linear-gradient(90deg, var(--accent-primary), transparent); }
        .hud-dots { display: flex; gap: 4px; }
        .hud-dots span { width: 4px; height: 4px; border-radius: 50%; background: var(--accent-primary); }
        .hud-id { font-family: var(--font-mono); font-size: 0.65rem; color: var(--accent-primary); letter-spacing: 0.1em; }

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
          color: var(--text-primary);
          line-height: 1.2;
        }

        .module-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .module-link:hover {
          background: var(--btn-outline-hover-bg);
          color: var(--btn-outline-hover-text);
          border-color: var(--btn-outline-hover-border);
        }

        .module-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          min-height: 80px;
        }

        .module-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
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
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-primary);
          transition: all 0.3s ease;
        }

        .project-module:hover .tech-pill {
          border-color: var(--accent-primary);
          background: var(--glass-bg-hover);
        }

        .pill-icon { opacity: 0.6; }

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
