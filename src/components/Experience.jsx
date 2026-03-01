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
    tech: ['FastAPI', 'Gemma-3-4B-IT', 'Vertex AI', 'pgvector', 'Supabase', 'Anthropic', 'Flutter', 'Python'],
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Company row — clickable */}
      <button
        className={`exp-header ${isOpen ? 'exp-header--open' : ''}`}
        onClick={onToggle}
        style={{ '--accent': exp.color }}
      >
        {/* Icon */}
        <div className="exp-icon" style={{ background: `${exp.color}18`, borderColor: `${exp.color}40`, color: exp.color }}>
          {exp.icon}
        </div>

        {/* Company + role */}
        <div className="exp-meta">
          <span className="exp-company">{exp.company}</span>
          <span className="exp-role" style={{ color: exp.color }}>{exp.role}</span>
          {/* Period shown only on mobile, inside meta so it wraps below role */}
          <span className="exp-period exp-period--inline">{exp.period}</span>
        </div>

        {/* Period — shown on desktop, hidden on mobile */}
        <span className="exp-period exp-period--desktop">{exp.period}</span>

        {/* Chevron */}
        <motion.div
          className="exp-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="exp-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="exp-body-inner" style={{ '--accent': exp.color, borderColor: `${exp.color}30` }}>
              <p className="exp-description">{exp.description}</p>

              {exp.sections ? (
                // Sectioned layout (heading + bullets)
                exp.sections.map((sec, si) => (
                  <div key={si} className="exp-section">
                    <div className="exp-section-heading" style={{ color: exp.color }}>
                      {sec.heading}
                    </div>
                    <ul className="exp-highlights">
                      {sec.bullets.map((b, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (si * sec.bullets.length + bi) * 0.05 }}
                        >
                          <span className="exp-bullet" style={{ background: exp.color }} />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                // Flat layout
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                  >
                    <span className="exp-bullet" style={{ background: exp.color }} />
                    {h}
                  </motion.li>
                ))}
                </ul>
              )}

              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="exp-tag" style={{ borderColor: `${exp.color}35`, color: exp.color }}>
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
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="experience-page">

      {/* Header */}
      <motion.div
        className="exp-page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Career</p>
        <h2 className="section-title text-gradient">Experience</h2>
        <p className="exp-subtitle">
          {experiences.length} roles across AI research, embedded systems & computer vision
        </p>
      </motion.div>

      {/* Accordion list */}
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
        .experience-page {
          padding: 3rem 0 2rem;
        }
        .exp-page-header {
          text-align: center;
          margin-bottom: 2.75rem;
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
          margin-bottom: 0.6rem;
        }
        .exp-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          opacity: 0.75;
        }

        /* List */
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Each item */
        .exp-item {
          border-radius: 0.875rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s;
        }
        .exp-item:hover {
          border-color: rgba(255,255,255,0.13);
        }

        /* Header button */
        .exp-header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.4rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          border-radius: 0.875rem;
          transition: background 0.25s;
          color: var(--text-primary);
        }
        .exp-header:hover {
          background: rgba(255,255,255,0.04);
        }
        .exp-header--open {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          border-radius: 0.875rem 0.875rem 0 0;
        }

        /* Icon square */
        .exp-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Company info */
        .exp-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
        }
        .exp-company {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .exp-role {
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Period */
        .exp-period {
          font-size: 0.78rem;
          color: var(--text-secondary);
          opacity: 0.7;
          white-space: nowrap;
          flex-shrink: 0;
        }
        /* Mobile-only inline period hidden by default on desktop */
        .exp-period--inline {
          display: none;
        }

        /* Chevron */
        .exp-chevron {
          color: var(--text-secondary);
          flex-shrink: 0;
          opacity: 0.6;
        }

        /* Body */
        .exp-body-inner {
          padding: 1.5rem 1.4rem 1.4rem;
          border-top: 1px solid;
        }
        .exp-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
          font-style: italic;
          opacity: 0.85;
        }
        /* Sections (grouped bullets with heading) */
        .exp-section {
          margin-bottom: 1.1rem;
        }
        .exp-section:last-child {
          margin-bottom: 0;
        }
        .exp-section-heading {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.55rem;
          opacity: 0.9;
        }


        .exp-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .exp-highlights li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .exp-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.45em;
        }

        /* Tech tags */
        .exp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .exp-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid;
          background: transparent;
          letter-spacing: 0.03em;
        }

        @media (max-width: 600px) {
          .exp-period--desktop {
            display: none;
          }
          .exp-period--inline {
            display: inline;
            font-size: 0.72rem;
            color: var(--text-secondary);
            opacity: 0.7;
          }
          .exp-header {
            padding: 0.9rem 1rem;
            gap: 0.75rem;
          }
          .exp-body-inner {
            padding: 1.1rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
