import React from 'react';

const Skills = ({ data }) => {
  return (
    <section id="skills">
      <h2 className="section-title text-gradient">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(data.skills).map(([category, skills], index) => (
          <div key={index} className="glass-card skill-category">
            <h3 className="text-gradient">{category}</h3>
            <div className="tag-container">
              {skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
