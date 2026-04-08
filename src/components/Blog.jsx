import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';

const Blog = ({ data }) => {
  return (
    <div className="blog-laboratory">
      <motion.div
        className="lab-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="lab-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>DATA_TRANSMISSIONS</span>
        </div>
        <h2 className="lab-section-title">Technical Writings</h2>
      </motion.div>

      <div className="blog-matrix">
        {data?.blogPosts?.map((post, index) => (

          <motion.div 
            key={index} 
            className="blog-node"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="node-hud">
              <span className="node-id">0{index + 1}</span>
              <div className="node-line"></div>
              <BookOpen size={14} className="node-icon" />
            </div>

            <div className="node-content">
              <div className="node-meta">
                <div className="meta-item">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="node-title">{post.title}</h3>
              <p className="node-excerpt">{post.excerpt}</p>

              <div className="node-footer">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="read-more-btn"
                >
                  <span>READ_POST</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .blog-laboratory {
          max-width: 1400px;
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

        .blog-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .blog-node {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 28px;
          padding: 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }

        .blog-node:hover {
          background: rgba(182, 196, 255, 0.04);
          border-color: rgba(182, 196, 255, 0.2);
          transform: translateY(-8px);
        }

        .node-hud {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0.4;
        }

        .node-id { font-family: var(--font-mono); font-size: 0.7rem; color: #b6c4ff; }
        .node-line { height: 1px; flex: 1; background: linear-gradient(90deg, #b6c4ff, transparent); }
        .node-icon { color: #b6c4ff; }

        .node-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
        }

        .node-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 1rem;
        }

        .node-excerpt {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .node-footer {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: #ffffff;
          color: #0d0d12;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1200px) {
          .blog-matrix { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 800px) {
          .blog-matrix { grid-template-columns: 1fr; gap: 1.5rem; }
        }

        @media (max-width: 768px) {
          .blog-laboratory { padding: 0 1.5rem; }
          .lab-section-header { margin-bottom: 3rem; }
          .blog-node { padding: 1.5rem; border-radius: 20px; }
          .node-title { font-size: 1.25rem; }
          .node-excerpt { font-size: 0.95rem; }
        }
      `}</style>
    </div>
  );
};

export default Blog;
