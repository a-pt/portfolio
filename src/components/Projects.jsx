import React from 'react';

const Projects = ({ data }) => {
  return (
    <section id="projects">
      <h2 className="section-title text-gradient">Selected Projects</h2>
      <div className="card-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <h3 className="card-title" style={{ marginBottom: '1rem' }}>{project.name}</h3>
            <p className="card-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
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
