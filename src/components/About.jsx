import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title text-gradient">About Me</h2>
      <div className="glass-card about-grid">
        <p className="about-text">
          {data.about}
        </p>
      </div>
    </section>
  );
};

export default About;
