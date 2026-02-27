import React, { useState } from 'react';

const Blog = ({ onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Deep Learning', 'LLM & Agentic AI', 'Research Notes', 'ML System Design'];
  
  const posts = [
    {
      title: "The Rise of Agentic AI Systems",
      date: "Feb 2024",
      category: "LLM & Agentic AI",
      excerpt: "Exploring how LLMs are evolving from chat interfaces into autonomous agents capable of complex reasoning and tool use."
    },
    {
      title: "Understanding GAN-Transformer Hybrids",
      date: "Jan 2024",
      category: "Deep Learning",
      excerpt: "A deep dive into GANformer architectures and their applications in high-fidelity image generation."
    },
    {
      title: "Efficient LLM Inference with Gemma",
      date: "Dec 2023",
      category: "LLM & Agentic AI",
      excerpt: "Deployment strategies for Gemma models, focusing on KV cache management and quantization techniques."
    },
    {
      title: "Knowledge Base Construction from PDFs",
      date: "Nov 2023",
      category: "ML System Design",
      excerpt: "Building scalable knowledge extraction pipelines using multi-task learning and specialized OCR techniques."
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog">
      <h2 className="section-title text-gradient">Blog & Research Notes</h2>
      
      <div className="tag-container" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`tag ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            style={{ 
              background: selectedCategory === cat ? 'var(--accent-primary)' : 'rgba(56, 189, 248, 0.1)',
              color: selectedCategory === cat ? '#020617' : 'var(--accent-primary)',
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <div key={index} className="glass-card blog-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag" style={{ fontSize: '0.7rem' }}>{post.category}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{post.date}</span>
            </div>
            <h3 className="card-title">{post.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
            <button 
              className="btn-outline" 
              style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.875rem' }}
              onClick={() => onSelectPost(post)}
            >
              Read Post
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
