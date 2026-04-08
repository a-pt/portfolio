import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Cpu, Brain, Eye, Sparkles, Activity, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Zeldin.ai',
    role: 'AI Engineer – Intern',
    period: 'Nov 2024 – Feb 2025',
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
      className="career-log-item"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="item-timeline">
        <div className={`timeline-node ${isOpen ? 'active' : ''}`}>
          <div className="node-core"></div>
          <div className="node-pulse"></div>
        </div>
        {index !== experiences.length - 1 && <div className="timeline-connector"></div>}
      </div>

      <div className="item-content">
        <button
          className={`log-header ${isOpen ? 'active' : ''}`}
          onClick={onToggle}
        >
          <div className="header-glass-glow"></div>
          <div className="header-hud">
            <div className="hud-line"></div>
            <div className={`hud-indicator ${isOpen ? 'active' : ''}`}>
              <div className="indicator-dot"></div>
              <span className="hud-status">{exp.period}</span>
            </div>
          </div>

          <div className="header-main">
            <div className="company-info">
              <div className="icon-badge-outer">
                <div className="icon-badge" style={{ color: exp.color }}>
                  {exp.icon}
                </div>
                <div className="badge-glow" style={{ backgroundColor: exp.color }}></div>
              </div>
              <div className="title-group">
                <h3 className="company-name">{exp.company}</h3>
                <div className="role-wrap">
                  <Zap size={12} className="role-icon" />
                  <span className="job-role">{exp.role}</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="header-chevron-wrap">
            <motion.div
              className={`chevron-box ${isOpen ? 'active' : ''}`}
              animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ChevronDown size={22} strokeWidth={2.5} />
            </motion.div>
          </div>

          <div className="header-scanning-line"></div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="log-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="details-inner">
                <div className="role-summary">
                  <div className="summary-accent"></div>
                  <p className="role-description">{exp.description}</p>
                </div>

                <div className="achievements-matrix">
                  {exp.sections ? (
                    exp.sections.map((sec, si) => (
                      <div key={si} className="achievement-block">
                        <div className="block-meta">
                          <div className="block-tag">{sec.heading.toUpperCase()}</div>
                          <div className="block-line"></div>
                        </div>
                        <ul className="bullet-list">
                          {sec.bullets.map((b, bi) => (
                            <li key={bi}>
                              <div className="bullet-marker-wrap">
                                <div className="bullet-marker" style={{ background: exp.color }}></div>
                                <div className="bullet-glow" style={{ background: exp.color }}></div>
                              </div>
                              <span className="bullet-text">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="achievement-block">
                      <div className="block-meta">
                        <div className="block-tag">KEY_HIGHLIGHTS</div>
                        <div className="block-line"></div>
                      </div>
                      <ul className="bullet-list">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>
                            <div className="bullet-marker-wrap">
                              <div className="bullet-marker" style={{ background: exp.color }}></div>
                              <div className="bullet-glow" style={{ background: exp.color }}></div>
                            </div>
                            <span className="bullet-text">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="log-footer">
                  <div className="tech-matrix">
                    <div className="tech-tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-chip">
                          <code className="chip-code">$</code>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Activity size={14} className="badge-pulse" />
          <span>CAREER_HISTORY_LOG</span>
        </div>
        <h2 className="lab-section-title">Experience</h2>
      </motion.div>

      <div className="career-logbook">
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

      <style>{`
        .experience-laboratory {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .lab-section-header { margin-bottom: 6rem; }

        .lab-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem 1.25rem;
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.15);
          border-radius: 100px;
          color: #b6c4ff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .badge-pulse { animation: heartbeat 2s infinite; }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .lab-section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        /* Career Logbook Layout */
        .career-logbook {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }

        .career-log-item {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 0;
        }

        /* Timeline Elements */
        .item-timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-node {
          width: 14px;
          height: 14px;
          position: relative;
          margin-top: 2rem;
          z-index: 2;
        }

        .node-core {
          width: 100%;
          height: 100%;
          border: 1px solid rgba(182, 196, 255, 0.4);
          border-radius: 3px;
          background: #0d0d12;
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }

        .timeline-node.active .node-core {
          background: #b6c4ff;
          border-color: #b6c4ff;
          box-shadow: 0 0 12px rgba(182, 196, 255, 0.5);
        }

        .node-pulse {
          position: absolute;
          inset: -3px;
          border: 1px solid #b6c4ff;
          border-radius: 5px;
          transform: rotate(45deg);
          animation: nodePulse 2.5s infinite;
          opacity: 0.2;
        }

        @keyframes nodePulse {
          0% { transform: rotate(45deg) scale(1); opacity: 0.4; }
          100% { transform: rotate(45deg) scale(1.6); opacity: 0; }
        }

        .timeline-connector {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, 
            rgba(182, 196, 255, 0.2), 
            rgba(182, 196, 255, 0.05)
          );
        }

        /* Header Card Positioning */
        .item-content {
          padding-bottom: 1.5rem;
        }

        .log-header {
          width: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          text-align: left;
          color: #ffffff;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .header-glass-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, rgba(182, 196, 255, 0.05), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .log-header:hover .header-glass-glow { opacity: 1; }

        .log-header:hover {
          background: rgba(182, 196, 255, 0.04);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateX(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .log-header.active {
          background: rgba(13, 13, 18, 0.6);
          border-color: rgba(182, 196, 255, 0.3);
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
        }

        /* HUD elements */
        .header-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .hud-id-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #b6c4ff;
          opacity: 0.6;
        }

        .hud-id { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.1em; }
        .hud-line { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(182, 196, 255, 0.2), transparent); }
        
        .hud-indicator {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          opacity: 0.8;
          transition: all 0.3s ease;
          color: #b6c4ff;
        }

        .hud-indicator.active { opacity: 1; }

        .indicator-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 6px currentColor;
        }

        .hud-status { 
          font-family: var(--font-mono); 
          font-size: 0.7rem; 
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-badge-outer {
          position: relative;
          flex-shrink: 0;
        }

        .icon-badge {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(5px);
        }

        .badge-glow {
          position: absolute;
          inset: 0;
          filter: blur(12px);
          opacity: 0.1;
          z-index: 1;
        }

        .company-name { font-size: 1.4rem; font-weight: 700; color: #ffffff; margin: 0; letter-spacing: -0.01em; }
        
        .role-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
          color: #b6c4ff;
        }
        
        .role-icon { opacity: 0.6; }
        .job-role { font-size: 0.95rem; font-weight: 500; }

        /* PROMINENT CHEVRON */
        .header-chevron-wrap {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .chevron-box {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .log-header:hover .chevron-box {
          background: #ffffff;
          color: #0d0d12;
          border-color: #ffffff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        .chevron-box.active {
          background: #b6c4ff;
          color: #0d0d12;
          border-color: #b6c4ff;
          box-shadow: 0 0 15px rgba(182, 196, 255, 0.5);
        }

        .header-scanning-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b6c4ff, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .log-header:hover .header-scanning-line {
          opacity: 0.3;
          animation: scanLateral 2.5s infinite ease-in-out;
        }

        @keyframes scanLateral {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Body Details Styling */
        .log-details {
          background: rgba(13, 13, 18, 0.4);
          border: 1px solid rgba(182, 196, 255, 0.3);
          border-top: none;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .details-inner {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .role-summary {
          position: relative;
          padding-left: 1.5rem;
        }

        .summary-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #b6c4ff, transparent);
          border-radius: 2px;
        }

        .role-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .achievements-matrix {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .achievement-block {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .block-meta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .block-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #b6c4ff;
          opacity: 0.5;
          letter-spacing: 0.2em;
          white-space: nowrap;
        }

        .block-line { height: 1px; flex: 1; background: rgba(182, 196, 255, 0.08); }

        .bullet-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bullet-list li { display: flex; gap: 1.25rem; }

        .bullet-marker-wrap {
          position: relative;
          margin-top: 0.6rem;
          flex-shrink: 0;
        }

        .bullet-marker {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .bullet-glow {
          position: absolute;
          inset: -3px;
          filter: blur(5px);
          opacity: 0.4;
          z-index: 1;
        }

        .bullet-text {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
        }

        /* Footer Details */
        .log-footer {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .tech-chip {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .chip-code { color: #b6c4ff; opacity: 0.4; }

        .tech-chip:hover {
          background: rgba(182, 196, 255, 0.06);
          border-color: #b6c4ff;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Responsive Settings */
        @media (max-width: 1024px) {
          .header-main { gap: 1rem; }
          .header-chevron-wrap { position: static; transform: none; margin-top: 1.5rem; display: flex; justify-content: flex-end; }
          .footer-status { flex-direction: row; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .career-log-item { grid-template-columns: 40px 1fr; }
          .log-header { padding: 1.75rem; border-radius: 20px; }
          .details-inner { padding: 2rem; gap: 2.5rem; }
          .company-name { font-size: 1.4rem; }
          .role-description { font-size: 1.1rem; }
          .bullet-text { font-size: 1rem; }
          .header-main { flex-direction: column; align-items: flex-start; }
          .period-badge { padding: 0.4rem 0.8rem; }
          .log-footer { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
