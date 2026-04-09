import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import portfolioData from './data/portfolio.json';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4 }
  }
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <NeuralNetworkBackground />
      <ScrollToTop />
      <Navbar />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <div className="hero-wrapper">
                <PageWrapper>
                  <Hero data={portfolioData} />
                </PageWrapper>
              </div>
            } />
            
            <Route path="/about" element={
              <PageWrapper>
                <About data={portfolioData} />
              </PageWrapper>
            } />

            <Route path="/experience" element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            } />

            <Route path="/projects" element={
              <PageWrapper>
                <Projects data={portfolioData} />
              </PageWrapper>
            } />

            <Route path="/skills" element={
              <PageWrapper>
                <Skills data={portfolioData} />
              </PageWrapper>
            } />

            <Route path="/blog" element={
              <PageWrapper>
                <Blog data={portfolioData} />
              </PageWrapper>
            } />

            <Route path="/contact" element={
              <PageWrapper>
                <Contact data={portfolioData} />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>

        <footer className="lab-footer">
          <div className="footer-content">
            <div className="footer-line"></div>
            <p className="footer-text">
              © {new Date().getFullYear()} ATHIRA_PT
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        .app { 
          min-height: 100vh; 
          position: relative; 
          color: var(--text-primary);
          background-color: var(--bg-base);
          transition: background-color 0.4s ease, color 0.4s ease;
        }

        .page-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 2.5rem 80px;
          width: 100%;
          min-height: 100vh;
        }

        .hero-wrapper {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-wrapper .page-wrapper {
          padding-top: 0;
          display: flex;
          align-items: center;
        }

        .lab-footer {
          padding: 80px 2.5rem 40px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-line {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, var(--accent-primary), transparent);
        }

        .footer-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .page-wrapper {
            padding: 100px 1.5rem 60px;
          }
          .hero-wrapper .page-wrapper {
            padding-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
