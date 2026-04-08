import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Cpu, Brain, Eye, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'Zeldin.ai',
    role: 'AI Engineer – Intern',
    period: 'Nov 2025 – Feb 2026',
    color: '#b6c4ff',
    icon: <Brain size={20} />,
    description: 'Built LLM-powered backend infrastructure for a real-estate AI platform across 4 major modules.',
    sections: [
      {
        heading: 'LLM Backend',
        bullets: [
          'Designed a prompt-driven LLM backend using FastAPI + Gemma-3-4B-IT to analyse chat messages, extract structured property requirements, and convert natural-language queries into database filters.',
          'Built a core generation engine with KV cache management, token tracking, and multiple generation modes; improved model reliability by refining JSON prediction pipelines.',
        ],
      },
      {
        heading: 'Similarity Service',
        bullets: [
          'Led R&D on multimodal similarity search; integrated Vertex AI + Google OAuth for text and image embeddings. Migrated sync DB calls to async Edge Functions to fix performance bottlenecks.',
          'Built and validated pgvector-based architecture for high-dimensional vector storage; ensured consistency between local (Drift) and remote (Supabase) vector representations.',
        ],
      },
      {
        heading: 'Zeldin Chat',
        bullets: [
          'Transformed chat into an AI-powered inventory assistant (Add / Update / Search via NL). Designed modular agents: InventoryAddAgent, InventorySearchAgent, InventoryUpdateAgent.',
          'Implemented draft-message feature (chat history + user instruction) improving communication efficiency by 30–40%. Enabled contextual reasoning via selective history injection.',
        ],
      },
      {
        heading: 'AI Backend Engineering',
        bullets: [
          'Integrated Vertex AI SSE streaming + Anthropic Messages API; reduced malformed tool-call outputs by 80%.',
          'Refactored stream engine to support SSE (OpenAI-compatible) and native JSON streaming (brace-counting parser); fixed packet-splitting bug improving reliability by 60%.',
          'Implemented OAuth token validation (Google tokeninfo), native tool-call parsing (Gemini functionCall → internal model), and live integration tests for Vertex & Anthropic APIs.',
        ],
      },
    ],
    tech: ['FastAPI', 'Gemma-3-4B-IT', 'Vertex AI', 'pgvector', 'Supabase', 'Anthropic', 'Python'],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jul 2022 – Nov 2023',
    color: '#d3bbff',
    icon: <Cpu size={20} />,
    description: 'Firmware development for TI\'s MSPM0 Arm Cortex-M0+ mixed-signal MCU family, focusing on early-silicon bring-up and peripheral enablement.',
    highlights: [
      'Worked in the MSPM0 MCU team building firmware for TI\'s Arm Cortex-M0+ mixed-signal microcontrollers, focusing on early-silicon (N1) bring-up and peripheral enablement.',
      'Participated in N1 silicon bring-up: initialized clocks, power domains and basic GPIO, enabled debug access, and verified that core subsystems (flash, SRAM, interrupts) were functional on first samples.',
      'Designed and implemented SPI driver support for MSPM0 devices — configured SPI controller at the register level, supported master/slave modes, and added interrupt-driven transfer APIs.',
      'Wrote and maintained C-based HAL functions for MSPM0 peripherals (SPI, GPIO, timers) later integrated into the internal SDK.',
    ],
    tech: ['C', 'Arm Cortex-M0+', 'MSPM0', 'SPI', 'GPIO', 'HAL', 'Embedded Firmware'],
  },
  {
    company: 'Siemens',
    role: 'Deep Learning – NLP Researcher',
    period: 'Jun 2020 – Jul 2020',
    color: '#b6c4ff',
    icon: <Brain size={20} />,
    description: 'Research on generalised learning of source-target mappings for automated data extraction from documents.',
    highlights: [
      'Conducted research on generalised learning of source-target mappings for data extraction.',
      'Implemented a knowledge base construction model with multi-task learning — outputs structured database from PDF documents.',
      'Used human-in-the-loop and data programming paradigms for efficient relational database updates.',
      'Extracted textual, visual and structural information from documents, achieving an improvement of 12 F1 points over existing curated bases.',
    ],
    tech: ['PyTorch', 'NLP', 'Multi-task Learning', 'Data Programming', 'PDF Parsing', 'Python'],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Computer Vision Intern',
    period: 'May 2018 – Aug 2018',
    color: '#d3bbff',
    icon: <Eye size={20} />,
    description: 'Realtime Occupancy Monitoring System — an OpenCV-based IoT solution for room occupancy tracking.',
    highlights: [
      'Built a Realtime Occupancy Monitoring System using OpenCV: an IoT device implementation for monitoring room occupancy.',
      'System monitors occupancy using centroid tracking and blob detection methods with a real-time UI.',
      'Used background subtraction to compute the difference between entries and exits giving the live occupancy count.',
    ],
    tech: ['OpenCV', 'Python', 'Computer Vision', 'Blob Detection', 'Centroid Tracking', 'IoT'],
  },
];

const ExperienceCard = ({ exp, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className="log-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <button
        className={`log-header ${isOpen ? 'log-header--active' : ''}`}
        onClick={onToggle}
      >
        <div className="log-icon-wrap" style={{ background: `rgba(${isOpen ? '182, 196, 255' : '255, 255, 255'}, 0.05)` }}>
          <div className="icon-inner" style={{ color: exp.color }}>
            {exp.icon}
          </div>
        </div>

        <div className="log-meta">
          <div className="log-meta-top">
            <span className="log-company">{exp.company}</span>
            <span className="log-period desktop-only">{exp.period}</span>
          </div>
          <span className="log-role">{exp.role}</span>
          <span className="log-period mobile-only">{exp.period}</span>
        </div>

        <motion.div
          className="log-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="log-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="log-body-inner">
              <p className="log-description">{exp.description}</p>

              {exp.sections ? (
                exp.sections.map((sec, si) => (
                  <div key={si} className="log-section">
                    <div className="log-section-tag">{sec.heading.toUpperCase()}</div>
                    <ul className="log-bullets">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>
                          <div className="bullet-dot" style={{ backgroundColor: exp.color }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul className="log-bullets">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <div className="bullet-dot" style={{ backgroundColor: exp.color }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="log-tech-row">
                {exp.tech.map((t) => (
                  <span key={t} className="log-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="experience-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>CAREER_LOG_v2.0</span>
        </div>
        <h2 className="lab-section-title">Experience</h2>
      </motion.div>

      <div className="log-container">
        <div className="log-timeline-line"></div>
        <div className="log-list">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .experience-laboratory {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .lab-section-header { margin-bottom: 5rem; }

        .lab-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.15);
          border-radius: 100px;
          color: #b6c4ff;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .lab-section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .log-container {
          position: relative;
          padding-left: 20px;
        }

        .log-timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, #b6c4ff, rgba(182, 196, 255, 0.05));
          opacity: 0.3;
        }

        .log-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .log-item {
          position: relative;
        }

        .log-header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          cursor: pointer;
          text-align: left;
          color: #ffffff;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
        }

        .log-header:hover {
          background: rgba(182, 196, 255, 0.05);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateX(10px);
        }

        .log-header--active {
          background: rgba(182, 196, 255, 0.08);
          border-color: rgba(182, 196, 255, 0.3);
          box-shadow: 0 0 30px rgba(182, 196, 255, 0.1);
        }

        .log-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .log-meta { flex: 1; display: flex; flex-direction: column; gap: 0.3rem; }

        .log-meta-top { display: flex; justify-content: space-between; align-items: center; }

        .log-company { font-size: 1.4rem; font-weight: 700; color: #ffffff; }

        .log-role { font-size: 1rem; color: #b6c4ff; font-weight: 500; }

        .log-period { font-family: var(--font-mono); font-size: 0.75rem; color: rgba(255, 255, 255, 0.4); letter-spacing: 0.05em; }

        .desktop-only { display: block; }
        .mobile-only { display: none; }

        .log-chevron {
          width: 32px;
          height: 32px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d0d12;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .log-body { overflow: hidden; }

        .log-body-inner { padding: 2.5rem 2rem 1rem 5.5rem; }

        .log-description { font-size: 1.1rem; color: rgba(255, 255, 255, 0.7); line-height: 1.7; margin-bottom: 2.5rem; }

        .log-section { margin-bottom: 2.5rem; }

        .log-section-tag { font-family: var(--font-mono); font-size: 0.65rem; color: #b6c4ff; margin-bottom: 1rem; opacity: 0.6; letter-spacing: 0.15em; }

        .log-bullets { list-style: none; display: flex; flex-direction: column; gap: 1rem; }

        .log-bullets li { display: flex; gap: 1rem; font-size: 1rem; color: rgba(255, 255, 255, 0.6); line-height: 1.6; }

        .bullet-dot { width: 6px; height: 6px; border-radius: 50%; margin-top: 0.6rem; flex-shrink: 0; }

        .log-tech-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.05); }

        .log-tag { font-family: var(--font-mono); font-size: 0.75rem; color: #d3bbff; background: rgba(211, 187, 255, 0.05); border: 1px solid rgba(211, 187, 255, 0.1); padding: 0.4rem 1rem; border-radius: 10px; }

        @media (max-width: 768px) {
          .log-container { padding-left: 0; }
          .log-timeline-line { display: none; }
          .log-header { padding: 1.25rem; gap: 1rem; border-radius: 20px; }
          .log-header:hover { transform: none; }
          .log-icon-wrap { width: 42px; height: 42px; border-radius: 12px; }
          .log-company { font-size: 1.1rem; }
          .log-role { font-size: 0.9rem; }
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .log-body-inner { padding: 1.5rem 1rem; }
          .log-description { font-size: 1rem; margin-bottom: 2rem; }
          .log-bullets li { font-size: 0.9rem; }
          .log-chevron { width: 28px; height: 28px; }
        }
      `}</style>
    </div>
  );
};

export default Experience;

