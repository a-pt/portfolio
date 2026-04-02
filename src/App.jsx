import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '8rem 1.5rem 4rem', 
        width: '100%',
        minHeight: 'calc(100vh - 160px)'
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <MinimalistBackground />
      <ScrollToTop />
      <Navbar />
      
      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <div className="hero-wrapper" style={{ position: 'relative' }}>
                <NeuralNetworkBackground />
                <PageWrapper>
                  <div style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
                    <Hero data={portfolioData} />
                  </div>
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
                <Blog />
              </PageWrapper>
            } />

            <Route path="/contact" element={
              <PageWrapper>
                <Contact data={portfolioData} />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>

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
        .main-content {
          width: 100%;
        }
        .hero-wrapper {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;

