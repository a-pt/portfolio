import React from 'react';
import { ArrowLeft, Sparkles, Clock, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPostTemplate = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <motion.div 
      className="lab-article-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="article-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} />
          <span>RETURN_TO_ARCHIVE</span>
        </button>

        <div className="article-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>DATA_STREAM</span>
        </div>

        <h1 className="article-title">{post.title}</h1>
        
        <div className="article-meta">
          <div className="meta-block">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="meta-divider"></div>
          <div className="meta-category">{post.category || 'RESEARCH'}</div>
        </div>
      </header>

      <article className="lab-card article-content">
        <div className="article-hud-top">
          <div className="hud-line"></div>
          <div className="hud-id">LOG_ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
        </div>

        <div className="prose-body">
          <p className="lead-text">
            {post.excerpt}
          </p>
          
          <div className="content-placeholder">
            [INTERNAL_DATA_STREAM_ENCRYPTED]
            <br />
            This content would be dynamically rendered from a secure CMS or markdown source.
          </div>

          <h2 className="sub-title">Theoretical Framework</h2>
          <p>
            As an AI Engineer, I find that understanding the underlying architecture is key to building better systems. 
            Scaling these connections efficiently is the hallmark of modern LLMs.
          </p>
          
          <div className="quote-block">
            "The complexity of the system is the beauty of the design."
          </div>
          
          <p>
            When we look at the way nodes interact in a neural network, it mimics the very connections we see in our animated background.
          </p>
        </div>

        <footer className="article-footer">
          <div className="hud-line"></div>
          <button className="share-btn">
            <Share2 size={16} />
            <span>SHARE_LINK</span>
          </button>
        </footer>
      </article>

      <style>{`
        .lab-article-container {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .article-header {
          margin-bottom: 4rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 3rem;
          padding: 0;
        }

        .back-btn:hover { color: #b6c4ff; transform: translateX(-5px); }

        .article-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.25rem;
          background: rgba(182, 196, 255, 0.05);
          border: 1px solid rgba(182, 196, 255, 0.15);
          border-radius: 100px;
          color: #b6c4ff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .article-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .meta-block {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .meta-divider {
          width: 4px; height: 4px; border-radius: 50%; background: #b6c4ff; opacity: 0.3;
        }

        .meta-category {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #b6c4ff;
          letter-spacing: 0.1em;
        }

        .article-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 4rem;
          backdrop-filter: blur(15px);
        }

        .article-hud-top {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0.3;
        }

        .hud-id { font-family: var(--font-mono); font-size: 0.7rem; color: #b6c4ff; white-space: nowrap; }

        .prose-body {
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
        }

        .lead-text {
          font-size: 1.4rem;
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .content-placeholder {
          background: rgba(255, 255, 255, 0.03);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: rgba(182, 196, 255, 0.4);
          margin: 3rem 0;
        }

        .sub-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin: 3rem 0 1.5rem;
        }

        .quote-block {
          border-left: 2px solid #b6c4ff;
          padding: 1rem 0 1rem 2rem;
          margin: 3rem 0;
          font-size: 1.3rem;
          font-style: italic;
          color: #b6c4ff;
          background: linear-gradient(90deg, rgba(182, 196, 255, 0.05), transparent);
        }

        .article-footer {
          margin-top: 5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .share-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-btn:hover { background: #ffffff; color: #0d0d12; }

        @media (max-width: 768px) {
          .article-header { margin-bottom: 3rem; }
          .article-content { padding: 2.5rem 1.5rem; border-radius: 20px; }
          .prose-body { font-size: 1rem; }
          .lead-text { font-size: 1.2rem; }
          .article-meta { gap: 1rem; }
          .article-hud-top { margin-bottom: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogPostTemplate;

