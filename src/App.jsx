import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import MinimalistBackground from './components/MinimalistBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import portfolioData from './data/portfolio.json';

// Helper to handle smooth scrolling to hash links
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const yOffset = -80; // Navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
}

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1]
    } 
  },
  viewport: { once: true, amount: 0.2 }
};

function Section({ id, children, className = "" }) {
  const isHome = id === 'home';
  return (
    <motion.section
      id={id}
      className={`page-section ${className}`}
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      style={{ 
        minHeight: isHome ? '100vh' : 'auto',
        display: isHome ? 'flex' : 'block',
        alignItems: 'center',
        padding: isHome ? '0' : '6rem 0',
        position: 'relative',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        {children}
      </div>
    </motion.section>
  );
}

function App() {
  return (
    <div className="app">
      <MinimalistBackground />
      <ScrollToHashElement />
      <Navbar />
      
      <div className="main-content">
        <div className="hero-wrapper" style={{ position: 'relative' }}>
          <NeuralNetworkBackground />
          <Section id="home">
            <Hero data={portfolioData} />
          </Section>
        </div>

        <Section id="about">
          <About data={portfolioData} />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects data={portfolioData} />
        </Section>

        <Section id="skills">
          <Skills data={portfolioData} />
        </Section>

        <Section id="blog">
          <Blog />
        </Section>

        <Section id="contact">
          <Contact data={portfolioData} />
        </Section>

        <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
          <p>© {new Date().getFullYear()} Athira PT. Built with React &amp; AI Focus.</p>
        </footer>
      </div>

      <style>{`
        .app { 
          min-height: 100vh; 
          position: relative; 
          background: var(--bg-main);
        }
        .page-section {
          width: 100%;
          overflow: hidden;
        }
        .hero-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
