import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">Case Studies</span>
        <h2 className="section-title">Selected Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="project-top">
              <h3 className="project-title">{project.name}</h3>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="View Source Code"
                >
                  <Github size={18} />
                  <span>Repository</span>
                </a>
              )}
            </div>
            
            <p className="project-description">
              {project.description}
            </p>
            
            <div className="project-footer">
              <div className="tag-container">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .projects-section {
          padding: 8rem 0;
          max-width: 1000px;
          margin: 0 auto;
        }

        .projects-header {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.015);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-family: var(--font-heading);
          color: var(--text-primary);
          line-height: 1.3;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .project-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-tertiary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
