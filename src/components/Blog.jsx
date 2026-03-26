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
    <div className="blog-content">
      <h2 className="section-title text-gradient">Blog & Research Notes</h2>
      
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="glass-card blog-card">
            <div className="blog-date-wrap">
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-excerpt">
              {post.excerpt}
            </p>
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline blog-btn"
            >
              Read Post
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .blog-grid {
          margin-top: 2rem;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .blog-date-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .blog-date {
          font-size: 0.8rem;
          opacity: 0.6;
        }
        .blog-card-title {
          font-size: 1.5rem;
          line-height: 1.4;
          font-family: var(--font-heading);
        }
        .blog-excerpt {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .blog-btn {
          margin-top: 1.5rem;
          align-self: flex-start;
          padding: 0.6rem 1.25rem;
          font-size: 0.9rem;
          text-decoration: none;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .blog-card-title {
            font-size: 1.25rem;
          }
          .blog-excerpt {
            font-size: 0.95rem;
          }
          .blog-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
