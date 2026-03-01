import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Brain, MapPin, Trophy } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  viewport: { once: true },
});

const stats = [
  { icon: <Award size={20} />,     label: 'GATE 2020',  value: 'AIR 53',      sub: 'Score 880' },
  { icon: <Briefcase size={20} />, label: 'Experience', value: '2+ Years',    sub: 'AI / Software' },
  { icon: <Brain size={20} />,     label: 'Speciality', value: 'AI Engineer', sub: 'CV · LLM · Agentic AI' },
  { icon: <MapPin size={20} />,    label: 'Location',   value: 'India',       sub: 'Kerala' },
];

const About = ({ data }) => {
  return (
    <section className="about-page">

      {/* Header */}
      <motion.div className="about-header" {...fadeUp(0)}>
        <h2 className="section-title text-gradient">About Me</h2>
      </motion.div>

      {/* Bio card */}
      <motion.div className="glass-card about-bio-card" {...fadeUp(0.1)}>
        {data.about.split('\n\n').map((para, i, arr) => (
          <p key={i} className="about-text" style={{ marginBottom: i < arr.length - 1 ? '1.25rem' : 0 }}>
            {para}
          </p>
        ))}
      </motion.div>

      {/* Stats row */}
      <div className="stats-grid">
        {stats.map(({ icon, label, value, sub }, i) => (
          <motion.div
            key={label}
            className="glass-card stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.4)' }}
          >
            <div className="stat-icon">{icon}</div>
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-sub">{sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Education card */}
      <motion.div className="glass-card edu-card" {...fadeUp(0.2)}>
        <p className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>Education</p>
        <div className="edu-grid">
          {data.education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-dot" />
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">{edu.period} &nbsp;·&nbsp; {edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div {...fadeUp(0.25)} style={{ marginTop: '1.75rem' }}>
        <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Highlights</p>
        <div className="highlights-grid">

          <motion.div
            className="glass-card highlight-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: 'rgba(129,140,248,0.4)' }}
          >
            <div className="highlight-icon-wrap">
              <Trophy size={22} />
            </div>
            <div>
              <div className="highlight-title">TIFR GS 2020</div>
              <div className="highlight-desc">
                Shortlisted in the <strong>Top 46</strong> nationally for Computer &amp; Systems Sciences — one of India's most competitive research aptitude exams.
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card highlight-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: 'rgba(129,140,248,0.4)' }}
          >
            <div className="highlight-icon-wrap">
              <Trophy size={22} />
            </div>
            <div>
              <div className="highlight-title">TEKON Project Expo 2019</div>
              <div className="highlight-desc">
                <strong>1st Place Winner</strong> at state-level expo for the "Flight Force" drone project — a real-time human detection &amp; tracking system for aerial rescue operations.
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      <style>{`
        .about-page {
          padding: 3rem 0 2rem;
        }
        .about-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .section-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          margin-bottom: 0;
        }

        /* Bio */
        .about-bio-card {
          margin-bottom: 1.75rem;
        }
        .about-text {
          font-family: 'Merriweather', Georgia, serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 2;
          color: var(--text-secondary);
          letter-spacing: 0.015em;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          transition: transform 0.3s, border-color 0.3s;
          cursor: default;
        }
        .stat-icon {
          color: var(--accent-primary);
          margin-bottom: 0.6rem;
        }
        .stat-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }
        .stat-value {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }
        .stat-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.75;
        }

        /* Education */
        .edu-card {
          padding: 2rem 2.25rem;
        }
        .edu-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .edu-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .edu-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 5px;
          box-shadow: 0 0 8px var(--accent-primary);
        }
        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }
        .edu-institution {
          font-size: 0.9rem;
          color: var(--accent-secondary);
          margin-bottom: 0.15rem;
        }
        .edu-meta {
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        /* Highlights */
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .highlight-card {
          display: flex;
          gap: 1.1rem;
          align-items: flex-start;
          padding: 1.5rem;
          transition: transform 0.3s, border-color 0.3s;
        }
        .highlight-icon-wrap {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(129, 140, 248, 0.12);
          border: 1px solid rgba(129, 140, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-secondary);
        }
        .highlight-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }
        .highlight-desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .highlight-desc strong {
          color: var(--accent-secondary);
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
