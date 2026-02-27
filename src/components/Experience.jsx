import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience">
      <h2 className="section-title text-gradient">Experience</h2>
      <div className="card-grid">
        {data.experience.map((exp, index) => (
          <div key={index} className="glass-card experience-card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{exp.role}</h3>
                <p className="card-subtitle">{exp.company}</p>
              </div>
              <span className="card-period">{exp.period}</span>
            </div>
            <ul className="card-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
