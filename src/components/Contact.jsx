import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact">
      <h2 className="section-title text-gradient">Get In Touch</h2>
      <div className="contact-container">
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href={`mailto:${data.contact.email}`} className="social-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={20} />
              <span>{data.contact.email}</span>
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Github size={20} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        <div className="glass-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
