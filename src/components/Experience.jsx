import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Briefcase, Cpu, Brain, Eye, Sparkles, Activity, Zap, X, Maximize2 } from 'lucide-react';

const experiences = [
  {
    company: 'Zeldin.ai',
    role: 'AI Engineer – Intern',
    period: 'Nov 2025 – Feb 2026',
    color: 'var(--accent-primary)',
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
    color: 'var(--accent-secondary)',
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
    role: 'Deep Learning – NLP Research Intern',
    period: 'Jun 2020 – Jul 2020',
    color: 'var(--accent-primary)',
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
    color: 'var(--accent-secondary)',
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

const ExperienceCard = ({ exp, onOpen, index }) => {
  return (
    <motion.div
      className="career-log-item"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="item-timeline">
        <div className="timeline-node">
          <div className="node-core"></div>
        </div>
        {index !== experiences.length - 1 && <div className="timeline-connector"></div>}
      </div>

      <div className="item-content">
        <button
          className="log-header"
          onClick={onOpen}
        >
          <div className="header-glass-glow"></div>
          <div className="header-hud">
            <div className="hud-line"></div>
            <div className="hud-indicator">
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

          <div className="header-action">
            <div className="view-log-btn">
              <span className="btn-text">VIEW_LOG</span>
              <Maximize2 size={14} className="btn-icon" />
            </div>
          </div>
        </button>

      </div>
    </motion.div>
  );
};

const ExperienceModal = ({ exp, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-fixed-overlay">
      <motion.div 
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      <motion.div 
        className="modal-container"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="modal-glass">
          <div className="modal-header">
            <div className="modal-title-area">
              <div className="modal-badge">
                <div className="badge-dot" style={{ backgroundColor: exp.color }}></div>
                <span>{exp.period}</span>
              </div>
              <h3 className="modal-company">{exp.company}</h3>
              <div className="modal-role">
                <Zap size={14} style={{ color: exp.color }} />
                <span>{exp.role}</span>
              </div>
            </div>
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="modal-body custom-scrollbar">
            <div className="role-summary">
              <div className="summary-accent" style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}></div>
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

            <div className="modal-footer">
              <div className="footer-tag">STACK_INVENTORY</div>
              <div className="tech-tags">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    <code className="chip-code" style={{ color: exp.color }}>$</code>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

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
            onOpen={() => setSelectedExp(exp)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal 
            exp={selectedExp} 
            onClose={() => setSelectedExp(null)} 
          />
        )}
      </AnimatePresence>

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
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          color: var(--accent-primary);
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
          color: var(--text-primary);
        }

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
          border: 1px solid var(--glass-border-hover);
          border-radius: 3px;
          background: var(--bg-base);
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }

        .timeline-node.active .node-core {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 12px var(--accent-glow);
        }

        .timeline-connector {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, 
            var(--accent-glow), 
            transparent
          );
        }

        .item-content {
          padding-bottom: 1.5rem;
        }

        .log-header {
          width: 100%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          text-align: left;
          color: var(--text-primary);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .header-glass-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, var(--accent-glow), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .log-header:hover .header-glass-glow { opacity: 1; }

        .log-header:hover {
          background: var(--glass-bg-hover);
          border-color: var(--glass-border-hover);
          transform: translateX(8px);
        }

        .header-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .hud-line { height: 1px; flex: 1; background: linear-gradient(90deg, var(--accent-glow), transparent); }
        
        .hud-indicator {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          opacity: 0.8;
          color: var(--accent-primary);
        }

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

        .icon-badge {
          width: 44px;
          height: 44px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
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

        .company-name { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin: 0; }
        
        .role-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
          color: var(--accent-primary);
        }
        
        .job-role { font-size: 0.95rem; font-weight: 500; }

        .header-action {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .view-log-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        .btn-icon {
          color: var(--accent-primary);
          opacity: 0.7;
        }

        .log-header:hover .view-log-btn {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .log-header:hover .btn-text,
        .log-header:hover .btn-icon {
          color: var(--btn-primary-text);
          opacity: 1;
        }

        /* Modal Styles */
        .modal-fixed-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
        }

        .modal-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 85vh; /* slightly reduced to ensure it fits well */
          display: flex;
          z-index: 10;
        }

        .modal-glass {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--glass-border-hover);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          min-height: 0; /* Critical for internal scrolling */
        }

        .modal-header {
          padding: 2.5rem;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
        }

        .modal-title-area {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          width: fit-content;
        }

        .badge-dot { width: 6px; height: 6px; border-radius: 50%; }

        .modal-company {
          font-size: 2rem;
          font-weight: 800;
          margin: 0.5rem 0 0.2rem;
          background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-role {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .modal-close-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255, 0, 0, 0.1);
          color: #ff4d4d;
          border-color: rgba(255, 0, 0, 0.2);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 2.5rem;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--accent-primary); }

        .modal-footer {
          padding: 2.5rem;
          border-top: 1px solid var(--glass-border);
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-primary);
          opacity: 0.5;
          letter-spacing: 0.2em;
          margin-bottom: 1.25rem;
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
          border-radius: 2px;
        }

        .role-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-primary);
          margin: 0;
        }

        .achievements-matrix {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 1rem;
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
          color: var(--accent-primary);
          opacity: 0.6;
          letter-spacing: 0.2em;
        }

        .block-line { height: 1px; flex: 1; background: var(--glass-border); }

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
          color: var(--text-secondary);
        }

        .log-footer {
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .tech-chip {
          padding: 0.5rem 1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .tech-chip:hover {
          background: var(--glass-bg-hover);
          border-color: var(--accent-primary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .header-main { gap: 1rem; }
          .header-action { position: static; transform: none; margin-top: 1.5rem; display: flex; justify-content: flex-end; }
          .modal-container { max-width: 100%; height: 100%; max-height: 100vh; }
          .modal-glass { border-radius: 0; height: 100%; }
        }

        @media (max-width: 768px) {
          .career-log-item { grid-template-columns: 40px 1fr; }
          .log-header { padding: 1.75rem; }
          .details-inner { padding: 2rem; }
          .company-name { font-size: 1.4rem; }
          .header-main { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
