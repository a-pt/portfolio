import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="name text-gradient">{data.name}</h1>
        <h2 className="hero-title">{data.title}</h2>
        <p className="tagline">{data.tagline}</p>
        
        <div className="hero-actions">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={18} style={{ marginRight: '8px' }} />
            Download Resume
          </motion.button>
          <div className="social-links">
            <motion.a 
              href={data.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              whileHover={{ y: -3, color: 'var(--accent-primary)' }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href={data.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              whileHover={{ y: -3, color: 'var(--accent-primary)' }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
