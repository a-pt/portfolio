import React from 'react';
import { Github } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects">
      <h2 className="section-title text-gradient">Selected Projects</h2>
      <div className="card-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 className="card-title" style={{ margin: 0 }}>{project.name}</h3>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-github-link"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--accent-primary)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                  }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            <p className="card-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {project.description}
            </p>
            <div className="tag-container">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
