import React from 'react';

export default function Background3D() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#040d0b',
        overflow: 'hidden'
      }}
    >
      {/* Single Ultra-Premium High-Resolution Background Photo with Ambient Motion */}
      <div
        className="ken-burns-bg"
        style={{
          position: 'absolute',
          inset: '-4%',
          backgroundImage: 'url(/assets/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.65,
          filter: 'contrast(1.1) brightness(0.9) saturate(1.2)',
          pointerEvents: 'none'
        }}
      />

      {/* Atmospheric Soft Dark Radial Vignette for Maximum Contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 35%, rgba(4, 13, 11, 0.38) 0%, rgba(2, 8, 7, 0.88) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Live Dynamic Sheen Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, transparent 30%, rgba(82, 183, 136, 0.08) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'sheenMove 12s ease-in-out infinite',
          pointerEvents: 'none'
        }}
      />

      <style>{`
        @keyframes sheenMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </div>
  );
}
