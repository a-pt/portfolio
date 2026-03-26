import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Brain, MapPin, Trophy } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } 
  },
  viewport: { once: true, margin: '-50px' },
});

const stats = [
  { icon: <Award size={20} />,     label: 'GATE 2020',  value: 'AIR 53',      sub: 'Score 880' },
  { icon: <Briefcase size={20} />, label: 'Experience', value: '2+ Years',    sub: 'AI / Software' },
  { icon: <Brain size={20} />,     label: 'Speciality', value: 'AI Engineer', sub: 'CV · LLM · Agentic AI' },
  { icon: <MapPin size={20} />,    label: 'Location',   value: 'India',       sub: 'Kerala' },
];

const About = ({ data }) => {
  return (
    <div className="about-content">

      <motion.div className="about-header" {...fadeUp(0)}>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <motion.div className="glass-card about-bio-card" {...fadeUp(0.1)}>
        {data.about.split('\n\n').map((para, i, arr) => (
          <p key={i} className="about-text" style={{ marginBottom: i < arr.length - 1 ? '1.5rem' : 0 }}>
            {para}
          </p>
        ))}
      </motion.div>

      <div className="stats-grid">
        {stats.map(({ icon, label, value, sub }, i) => (
          <motion.div
            key={label}
            className="stat-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="stat-icon-wrap">{icon}</div>
            <div className="stat-content">
              <span className="stat-label">{label}</span>
              <span className="stat-value">{value}</span>
              <span className="stat-sub">{sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass-card edu-card" {...fadeUp(0.2)}>
        <h3 className="card-heading">Education</h3>
        <div className="edu-grid">
          {data.education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-indicator" />
              <div className="edu-content">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">{edu.period} &nbsp;·&nbsp; {edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="highlights-section" {...fadeUp(0.3)}>
        <h3 className="card-heading">Key Highlights</h3>
        <div className="highlights-grid">
          <div className="glass-card highlight-card">
            <div className="highlight-icon-wrap">
              <Trophy size={20} />
            </div>
            <div className="highlight-content">
              <h4 className="highlight-title">TIFR GS 2020</h4>
              <p className="highlight-desc">
                Shortlisted in the <span className="highlight-accent">Top 46</span> nationally for Computer & Systems Sciences — one of India's most competitive research aptitude exams.
              </p>
            </div>
          </div>

          <div className="glass-card highlight-card">
            <div className="highlight-icon-wrap">
              <Trophy size={20} />
            </div>
            <div className="highlight-content">
              <h4 className="highlight-title">TEKON Project Expo 2019</h4>
              <p className="highlight-desc">
                <span className="highlight-accent">1st Place Winner</span> at state-level expo for the "Flight Force" drone project — a real-time human detection & tracking system for aerial rescue operations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .about-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
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

        .about-bio-card {
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .about-text {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
          opacity: 0.95;
          letter-spacing: -0.01em;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .stat-icon-wrap {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }

        .stat-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .edu-card {
          padding: 3rem;
          margin-bottom: 4rem;
        }

        .card-heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .edu-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .edu-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .edu-indicator {
          width: 8px;
          height: 8px;
          background: var(--text-tertiary);
          border-radius: 50%;
          margin-top: 0.45rem;
          flex-shrink: 0;
          transition: background 0.3s;
        }

        .edu-item:hover .edu-indicator {
          background: var(--accent-primary);
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .edu-institution {
          font-size: 1rem;
          color: var(--accent-primary);
        }

        .edu-meta {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .highlights-section {
          margin-top: 2rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .highlight-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .highlight-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-secondary);
        }

        .highlight-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .highlight-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .highlight-accent {
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          .about-bio-card, .edu-card, .highlight-card {
            padding: 1.5rem;
          }
          .stat-card {
            padding: 1.25rem 1rem;
          }
          .stat-value {
            font-size: 1.2rem;
          }
          .card-heading {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .stat-card {
            padding: 1rem 0.75rem;
          }
          .stat-value {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
