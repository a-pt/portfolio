import React, { useState } from 'react';
import { Send, CheckCircle, XCircle, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: null, message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!formData.message) {
      e.preventDefault();
      setStatus({ submitting: false, success: false, message: 'Please provide a message.' });
      return;
    }
    
    setStatus({ submitting: true, success: null, message: '' });
    setSubmitted(true);
  };

  const handleIframeLoad = () => {
    if (submitted) {
      setStatus({ submitting: false, success: true, message: 'COMMUNICATION_ESTABLISHED: Message sent.' });
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
      setTimeout(() => setStatus(prev => ({ ...prev, message: '' })), 5000);
    }
  };

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdaoC9EzeiDERqdktsX44rWnslHwq-ouxriuGLlG9yZC-tq6A/formResponse';

  return (
    <div className="contact-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>SIGNAL_TRANSMISSION</span>
        </div>
        <h2 className="lab-section-title">Get In Touch</h2>
      </motion.div>

      <div className="terminal-container">
        <motion.div 
          className="lab-card terminal-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="terminal-header">
            <div className="terminal-controls">
              <span></span><span></span><span></span>
            </div>
            <div className="terminal-id">COMMS_TERM // v1.0.4</div>
          </div>

          <div className="terminal-body">
            <p className="terminal-intro">
              <span className="prompt">&gt;</span> Ready for new collaborations. <br/>
              <span className="prompt">&gt;</span> Enter details to initialize handshake.
            </p>

            <iframe name="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
            <form className="lab-form" action={formUrl} method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="lab-input-group">
                  <label htmlFor="name">NAME_REF</label>
                  <input type="text" id="name" name="entry.1534702805" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </div>
                
                <div className="lab-input-group">
                  <label htmlFor="email">EMAIL_ADDR</label>
                  <input type="email" id="email" name="entry.710342452" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              
              <div className="lab-input-group">
                <label htmlFor="message">MESSAGE_PAYLOAD</label>
                <textarea id="message" name="entry.300394253" rows="4" placeholder="Type your message..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="lab-btn lab-btn-primary" disabled={status.submitting}>
                  <span>{status.submitting ? 'TRANSMITTING...' : 'SEND_MESSAGE'}</span>
                  <Send size={16} />
                  <div className="btn-glow"></div>
                </button>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className={`status-msg ${status.success ? 'success' : 'error'}`}
                  >
                    {status.success ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-laboratory {
          max-width: 1000px;
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

        .terminal-card {
          background: rgba(13, 13, 18, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .terminal-controls { display: flex; gap: 8px; }
        .terminal-controls span { width: 10px; height: 10px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); }
        .terminal-id { font-family: var(--font-mono); font-size: 0.7rem; color: rgba(255, 255, 255, 0.3); letter-spacing: 0.1em; }

        .terminal-body { padding: 3rem; }

        .terminal-intro {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: #b6c4ff;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .prompt { color: #d3bbff; margin-right: 0.5rem; }

        .lab-form { display: flex; flex-direction: column; gap: 2rem; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

        .lab-input-group { display: flex; flex-direction: column; gap: 0.75rem; }

        .lab-input-group label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.1em;
        }

        .lab-input-group input,
        .lab-input-group textarea {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .lab-input-group input:focus,
        .lab-input-group textarea:focus {
          outline: none;
          background: rgba(182, 196, 255, 0.05);
          border-color: #b6c4ff;
          box-shadow: 0 0 20px rgba(182, 196, 255, 0.1);
        }

        .form-footer {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 1rem;
        }

        .lab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .lab-btn-primary {
          background: #b6c4ff;
          color: #0d0d12;
          border: none;
        }

        .lab-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(182, 196, 255, 0.4);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          transition: 0.5s;
        }

        .lab-btn:hover .btn-glow { left: 150%; }

        .status-msg {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .status-msg.success { color: #b6c4ff; }
        .status-msg.error { color: #ff8e8e; }

        @media (max-width: 768px) {
          .lab-section-header { margin-bottom: 3rem; }
          .terminal-body { padding: 1.75rem; }
          .form-row { grid-template-columns: 1fr; gap: 1.5rem; }
          .form-footer { flex-direction: column; align-items: stretch; gap: 1.5rem; }
          .lab-btn { justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default Contact;

