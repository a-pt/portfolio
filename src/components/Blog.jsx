import React, { useState } from 'react';

const Blog = () => {
  const posts = [
    {
      title: "From Prompting to AI Agents: A practical Generative AI roadmap with Code",
      date: "March 2024",
      url: "https://medium.com/@athirapt998/from-prompting-to-projects-a-journey-through-generative-ai-and-multi-agent-systems-58f3d39e4fc4",
      excerpt: "Exploring the evolution from simple prompting to architecting complex multi-agent generative AI systems, highlighting key technical milestones and the future of autonomous intelligence."
    }
  ];

  return (
    <section id="blog">
      <h2 className="section-title text-gradient">Blog & Research Notes</h2>
      
      <div className="blog-grid" style={{ marginTop: '2rem' }}>
        {posts.map((post, index) => (
          <div key={index} className="glass-card blog-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{post.date}</span>
            </div>
            <h3 className="card-title" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>{post.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {post.excerpt}
            </p>
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline" 
              style={{ marginTop: '1.5rem', alignSelf: 'flex-start', padding: '0.6rem 1.25rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}
            >
              Read Post
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
