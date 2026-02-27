import React from 'react';
import { motion } from 'framer-motion';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPostTemplate from './components/BlogPostTemplate';
import portfolioData from './data/portfolio.json';

function App() {
  const [selectedPost, setSelectedPost] = React.useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="app">
      <NeuralNetworkBackground />
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <About data={portfolioData} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Experience data={portfolioData} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Projects data={portfolioData} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Achievements data={portfolioData} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Skills data={portfolioData} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          {selectedPost ? (
            <BlogPostTemplate post={selectedPost} onBack={() => setSelectedPost(null)} />
          ) : (
            <Blog onSelectPost={setSelectedPost} />
          )}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Contact data={portfolioData} />
        </motion.div>
      </main>
      
      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Athira PT. Built with React & AI Focus.</p>
      </footer>

      <style jsx>{`
        .app {
          min-height: 100vh;
          position: relative;
        }
        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default App;
