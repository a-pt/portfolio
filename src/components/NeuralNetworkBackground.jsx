import React, { useEffect, useRef } from 'react';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let particleCount = 120;
    let connectionDistance = 200;
    const mouse = { x: null, y: null, radius: 180 };

    // Get colors from CSS variables
    const getThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        node: styles.getPropertyValue('--neural-node').trim() || 'rgba(182, 196, 255, 0.85)',
        line: styles.getPropertyValue('--neural-line').trim() || 'rgba(182, 196, 255, 0.15)'
      };
    };

    let colors = getThemeColors();

    const getSettings = () => {
      const w = window.innerWidth;
      if (w < 480) return { count: 12, dist: 110 };
      if (w < 768) return { count: 25, dist: 130 };
      if (w < 1200) return { count: 45, dist: 160 };
      return { count: 65, dist: 200 };
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 1.5 + 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += (dx / distance) * force * 2;
            this.y += (dy / distance) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.node;
        ctx.fill();
        
        // Soft glow 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        const glowOpacity = '0.08';
        ctx.fillStyle = colors.node.replace(/[\d.]+\)$/g, `${glowOpacity})`);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const s = getSettings();
      particleCount = s.count;
      connectionDistance = s.dist;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Apply theme-aware line color with opacity
            ctx.strokeStyle = colors.line.replace(/[\d.]+\)$/g, `${opacity * 0.5})`);
            ctx.lineWidth = opacity * 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Static background

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default NeuralNetworkBackground;
