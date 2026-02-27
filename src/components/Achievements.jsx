import React from 'react';
import { Award } from 'lucide-react';

const Achievements = ({ data }) => {
  return (
    <section id="achievements">
      <h2 className="section-title text-gradient">Achievements</h2>
      <div className="card-grid">
        {data.achievements.map((achievement, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ color: 'var(--accent-primary)' }}>
              <Award size={32} />
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
