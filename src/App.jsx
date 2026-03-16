import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}
    >
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {children}
      </main>
      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
        <p>© {new Date().getFullYear()} Athira PT. Built with React &amp; AI Focus.</p>
      </footer>
    </motion.div>
  );
}

function BlogPage() {
  return (
    <PageWrapper>
      <Blog />
    </PageWrapper>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* Home — Hero only */}
          <Route path="/" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}
            >
              <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
                <NeuralNetworkBackground />
                <Hero data={portfolioData} />
              </main>
              <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <p>© {new Date().getFullYear()} Athira PT. Built with React &amp; AI Focus.</p>
              </footer>
            </motion.div>
          } />

          <Route path="/about" element={<PageWrapper><About data={portfolioData} /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects data={portfolioData} /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills data={portfolioData} /></PageWrapper>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<PageWrapper><Contact data={portfolioData} /></PageWrapper>} />

          {/* 404 */}
          <Route path="*" element={
            <PageWrapper>
              <div style={{ textAlign: 'center', paddingTop: '8rem' }}>
                <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>404</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Page not found.</p>
              </div>
            </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>

      <style>{`
        .app { min-height: 100vh; position: relative; }
      `}</style>
    </div>
  );
}

export default App;
