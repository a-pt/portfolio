import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react';
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
      setStatus({ submitting: false, success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
      setTimeout(() => setStatus(prev => ({ ...prev, message: '' })), 5000);
    }
  };

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdaoC9EzeiDERqdktsX44rWnslHwq-ouxriuGLlG9yZC-tq6A/formResponse';

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="info-text">
            My inbox is always open whether you have a question or just want to say hi!
          </div>

          <div className="contact-methods">
            <a href={`mailto:${data.contact.email}`} className="contact-method-card glass-card">
              <Mail className="contact-icon" />
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">{data.contact.email}</span>
              </div>
            </a>
            
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
              <Linkedin className="contact-icon" />
              <div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Connect with me</span>
              </div>
            </a>

            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
              <Github className="contact-icon" />
              <div>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">Explore my repos</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrap glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <iframe name="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
          <form className="minimal-form" action={formUrl} method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="entry.1534702805" placeholder="John Doe" value={formData.name} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="entry.710342452" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="entry.300394253" rows="5" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            <button type="submit" className="btn-primary submit-btn" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
              <Send size={18} className="btn-icon" />
            </button>
            
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`form-status ${status.success ? 'success' : 'error'}`}
              >
                {status.success ? <CheckCircle size={18} /> : <XCircle size={18} />}
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          padding: 8rem 0;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-header {
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .info-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.015);
          transition: all 0.3s ease;
        }

        .contact-method-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(5px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          color: var(--accent-primary);
        }

        .contact-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .contact-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .contact-form-wrap {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.015);
        }

        .minimal-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 1px var(--accent-primary);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .submit-btn {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1rem;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .submit-btn:not(:disabled):hover .btn-icon {
          transform: translateX(3px) translateY(-3px);
        }

        .form-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.95rem;
          margin-top: 1rem;
        }

        .form-status.success {
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .form-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-form-wrap {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
