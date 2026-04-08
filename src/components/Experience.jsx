import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Cpu, Brain, Eye } from 'lucide-react';

// Full experience data — sourced from CV
const experiences = [
  {
    company: 'Zeldin.ai',
    role: 'AI Engineer – Intern',
    period: 'Nov 2025 – Feb 2026',
    color: '#38bdf8',
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
    tech: ['FastAPI', 'Gemma-3-4B-IT', 'Vertex AI', 'pgvector', 'Supabase', 'Anthropic', 'Drift', 'Python'],
  },
  {
    company: 'Texas Instruments',
    role: 'Software Engineer',
    period: 'Jul 2022 – Nov 2023',
    color: '#818cf8',
    icon: <Cpu size={20} />,
    description: 'Firmware development for TI\'s MSPM0 Arm Cortex-M0+ mixed-signal MCU family, focusing on early-silicon bring-up and peripheral enablement.',
    highlights: [
      'Worked in the MSPM0 MCU team building firmware for TI\'s Arm Cortex-M0+ mixed-signal microcontrollers, focusing on early-silicon (N1) bring-up and peripheral enablement.',
      'Participated in N1 silicon bring-up: initialized clocks, power domains and basic GPIO, enabled debug access, and verified that core subsystems (flash, SRAM, interrupts) were functional on first samples.',
      'Designed and implemented SPI driver support for MSPM0 devices — configured SPI controller at the register level, supported both master and slave modes, and added blocking and interrupt-driven transfer APIs.',
      'Wrote and maintained C-based HAL (Hardware Abstraction Layer) functions for MSPM0 peripherals (SPI, GPIO, timers, basic communication interfaces) that were later integrated into the internal SDK.',
    ],
    tech: ['C', 'Arm Cortex-M0+', 'MSPM0', 'SPI', 'GPIO', 'HAL', 'Embedded Firmware'],
  },
  {
    company: 'Siemens',
    role: 'Deep Learning – NLP Research Intern',
    period: 'Jun 2020 – Jul 2020',
    color: '#34d399',
    icon: <Brain size={20} />,
    description: 'Research on generalised learning of source-target mappings for automated data extraction from documents.',
    highlights: [
      'Conducted research on generalised learning of source-target mappings for data extraction.',
      'Implemented a knowledge base construction model with multi-task learning — takes PDF documents as input and outputs a database with a user-defined schema populated from extracted information.',
      'Relational databases are iteratively updated using a human-in-the-loop approach and data programming paradigm for efficiency.',
      'Extracted textual, visual and structural information from input documents, achieving average quality of 77 F1 points — an improvement of 12 F1 points over existing human-curated knowledge bases.',
    ],
    tech: ['PyTorch', 'NLP', 'Multi-task Learning', 'Data Programming', 'PDF Parsing', 'Python'],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Computer Vision – Intern',
    period: 'May 2018 – Aug 2018',
    color: '#f472b6',
    icon: <Eye size={20} />,
    description: 'Realtime Occupancy Monitoring System — an OpenCV-based IoT solution for room occupancy tracking via centroid tracking and blob detection.',
    highlights: [
      'Built a Realtime Occupancy Monitoring System using OpenCV: an IoT device implementation that monitors and reports how many people are inside a room at any given time.',
      'System monitors occupancy using centroid tracking and blob detection methods, with a real-time UI representation showing live occupancy counts.',
      'Used background subtraction to highlight regions of interest (blobs), tracked across frames to compute the difference between people entered and exited — giving the number of seats occupied in the room.',
    ],
    tech: ['OpenCV', 'Python', 'Computer Vision', 'Blob Detection', 'Centroid Tracking', 'IoT'],
  },
];

const ExperienceCard = ({ exp, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className="exp-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <button
        className={`exp-header ${isOpen ? 'exp-header--open' : ''}`}
        onClick={onToggle}
      >
        <div className="exp-icon-wrap" style={{ color: exp.color }}>
          {exp.icon}
        </div>

        <div className="exp-meta">
          <div className="exp-meta-top">
            <span className="exp-company">{exp.company}</span>
            <span className="exp-period exp-period--desktop">{exp.period}</span>
          </div>
          <span className="exp-role">{exp.role}</span>
          <span className="exp-period exp-period--mobile">{exp.period}</span>
        </div>

        <motion.div
          className="exp-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="exp-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="exp-body-inner">
              <p className="exp-description">{exp.description}</p>

              {exp.sections ? (
                exp.sections.map((sec, si) => (
                  <div key={si} className="exp-section">
                    <div className="exp-section-heading">
                      {sec.heading}
                    </div>
                    <ul className="exp-highlights">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>
                          <span className="exp-bullet" style={{ backgroundColor: exp.color }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="exp-bullet" style={{ backgroundColor: exp.color }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="exp-tag">
                    {t}
                  </span>
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

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="experience-content">
      <motion.div
        className="exp-page-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Career Timeline</h2>
      </motion.div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      <style>{`
        .experience-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .exp-page-header {
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

        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        /* Connecting vertical line */
        .exp-list::before {
          content: '';
          position: absolute;
          left: 31px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 0;
        }

        .exp-item {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--card-blur));
          -webkit-backdrop-filter: blur(var(--card-blur));
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .exp-item:hover {
          background: var(--glass-bg-hover);
          border-color: var(--glass-border-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-glow);
        }

        .exp-header {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
        }

        .exp-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.2rem;
          transition: all 0.3s ease;
        }

        .exp-item:hover .exp-icon-wrap {
          background: rgba(255, 255, 255, 0.06);
          transform: scale(1.05);
          box-shadow: 0 0 15px currentColor;
        }

        .exp-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .exp-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .exp-company {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .exp-role {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .exp-period {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .exp-period--mobile {
          display: none;
        }

        .exp-chevron {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          margin-top: 0.2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .exp-item:hover .exp-chevron {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }


        .exp-body-inner {
          padding: 0 1.5rem 1.75rem 4.5rem;
        }

        .exp-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .exp-section {
          margin-bottom: 1.5rem;
        }

        .exp-section-heading {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .exp-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .exp-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .exp-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
          opacity: 0.7;
        }

        .exp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .exp-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          background: rgba(167, 139, 250, 0.05);
          border: 1px solid rgba(167, 139, 250, 0.15);
          padding: 0.3rem 0.8rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .exp-tag:hover {
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.08);
          border-color: rgba(56, 189, 248, 0.3);
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .exp-list::before {
            display: none;
          }
          .exp-header {
            padding: 1.25rem;
            gap: 1rem;
          }
          .exp-icon-wrap {
            width: 28px;
            height: 28px;
          }
          .exp-meta-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .exp-period--desktop {
            display: none;
          }
          .exp-period--mobile {
            display: block;
            margin-top: 0.25rem;
          }
          .exp-body-inner {
            padding: 0 1.25rem 1.5rem 1.25rem;
          }
          .exp-company {
            font-size: 1.05rem;
          }
          .exp-role {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
