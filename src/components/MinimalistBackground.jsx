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
        background: '#0d0d12',
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
          backgroundImage: `linear-gradient(to right, rgba(182, 196, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(182, 196, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated Glows - Violet/Desaturated Blue */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, #b6c4ff 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '0%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, #d3bbff 0%, transparent 70%)',
          filter: 'blur(120px)',
          borderRadius: '50%',
        }}
      />

      {/* Noise Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default MinimalistBackground;

