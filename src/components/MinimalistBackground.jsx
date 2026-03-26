import React from 'react';
import { motion } from 'framer-motion';

const MinimalistBackground = () => {
  return (
    <div 
      className="minimalist-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        overflow: 'hidden',
        background: 'var(--bg-base)',
        pointerEvents: 'none',
      }}
    >
      {/* Subtle Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Glows */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '35vw',
          height: '35vw',
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
      />

      {/* Grain / Noise Overlay for texture (optional but feels premium) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default MinimalistBackground;
