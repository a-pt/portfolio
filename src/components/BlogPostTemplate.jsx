import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogPostTemplate = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <div className="blog-post-template">
      <button onClick={onBack} className="btn-outline" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ArrowLeft size={18} />
        Back to Blog
      </button>
      
      <article className="glass-card">
        <header style={{ marginBottom: '2rem' }}>
          <span className="tag">{post.category}</span>
          <h1 className="text-gradient" style={{ margin: '1rem 0' }}>{post.title}</h1>
          <p style={{ opacity: 0.6 }}>{post.date} • 5 min read</p>
        </header>
        
        <div className="post-content" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            {post.excerpt}
          </p>
          <p>
            [This is a markdown content placeholder. In a production environment, this would be rendered from a .md file or a CMS using a library like react-markdown.]
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            As an AI Engineer, I find that understanding the underlying architecture is key to building better systems...
          </p>
          <h2 style={{ color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>The Core Architecture</h2>
          <p>
            When we look at the way nodes interact in a neural network, it mimics the very connections we see in our animated background. 
            Scaling these connections efficiently is the hallmark of modern LLMs.
          </p>
        </div>
      </article>

      <style jsx>{`
        .blog-post-template {
          max-width: 800px;
          margin: 4rem auto;
        }
        .post-content h2 {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default BlogPostTemplate;
