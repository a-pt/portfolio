import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react';

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
    <section id="contact">
      <h2 className="section-title text-gradient">Get In Touch</h2>
      <div className="contact-container">

        <div className="glass-card">
          <iframe name="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
          <form className="contact-form" action={formUrl} method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
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
              <textarea id="message" name="entry.300394253" rows="4" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary" disabled={status.submitting} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: status.submitting ? 0.7 : 1 }}>
              <Send size={18} />
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: status.success ? 'var(--accent-primary)' : '#ef4444', fontSize: '0.95rem' }}>
                {status.success ? <CheckCircle size={18} /> : <XCircle size={18} />}
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
