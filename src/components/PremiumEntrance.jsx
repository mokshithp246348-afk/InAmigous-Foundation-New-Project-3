import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Volume2, VolumeX, Eye } from 'lucide-react';
import { playSuccessChime, playClickSound, playHoverSound, toggleSound } from '../utils/audio';

export default function PremiumEntrance({ onEnter, isVisible }) {
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    setIsClosing(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.25;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleEnterNow = () => {
    playSuccessChime();
    setIsClosing(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  const handleToggleSound = () => {
    const s = toggleSound();
    setSoundOn(s);
    if (s) playClickSound();
  };

  if (!isVisible && !isClosing) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'radial-gradient(circle at center, #0F2A24 0%, #061210 70%, #020706 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isClosing ? 0 : 1,
        transform: isClosing ? 'scale(1.08)' : 'scale(1)',
        filter: isClosing ? 'blur(10px)' : 'none',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease',
        overflow: 'hidden'
      }}
    >
      {/* Background Animated Rings & Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(82, 183, 136, 0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulseGlow 6s infinite ease-in-out'
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1px dashed rgba(197, 155, 39, 0.35)',
          animation: 'rotateSlow 30s linear infinite'
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '1px solid rgba(82, 183, 136, 0.2)',
          animation: 'rotateReverse 45s linear infinite'
        }}
      />

      {/* Main Entrance Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Institutional Golden Crest Badge */}
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #C59B27 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 45px rgba(82, 183, 136, 0.5), 0 0 20px rgba(197, 155, 39, 0.3)',
            marginBottom: '28px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transform: 'rotate(-5deg)'
          }}
        >
          <Sparkles size={44} color="#ffffff" />
        </div>

        {/* Top Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '30px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(197, 155, 39, 0.4)',
            color: '#F4A261',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '20px',
            backdropFilter: 'blur(8px)'
          }}
        >
          <ShieldCheck size={16} color="#74C69D" />
          <span>InAmigos Foundation Ecosystem • Section 8 Non-Profit</span>
        </div>

        {/* Grand Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3.6rem',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '16px',
            textShadow: '0 0 30px rgba(82, 183, 136, 0.4)'
          }}
        >
          AURA <span style={{ color: '#E07A5F' }}>IMPACT</span>
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            color: '#CBD5E0',
            maxWidth: '580px',
            lineHeight: 1.6,
            marginBottom: '36px',
            fontWeight: 400
          }}
        >
          An interactive, live 3D animated platform dedicated to grassroots societal empowerment,
          childhood education, nutritional relief, and ecological afforestation.
        </p>

        {/* Primary Interactive Entrance CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <button
            onClick={handleEnterNow}
            onMouseEnter={playHoverSound}
            style={{
              background: 'linear-gradient(135deg, #E07A5F 0%, #D05B3F 50%, #B8472B 100%)',
              color: '#ffffff',
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 800,
              padding: '18px 48px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              boxShadow: '0 10px 35px rgba(224, 122, 95, 0.5), 0 0 30px rgba(82, 183, 136, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 45px rgba(224, 122, 95, 0.7)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 35px rgba(224, 122, 95, 0.5)';
            }}
          >
            <span>Enter 3D Experience</span>
            <ArrowRight size={22} />
          </button>

          {/* Controls: Audio Toggle & Skip/Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
            <button
              onClick={handleToggleSound}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: soundOn ? '#74C69D' : '#A0AEC0',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{soundOn ? 'Sound Enabled' : 'Muted'}</span>
            </button>

            <button
              onClick={handleEnterNow}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E0',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textDecoration: 'underline',
                opacity: 0.8
              }}
            >
              Skip Intro
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div
          style={{
            width: '280px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginTop: '36px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #52B788, #E07A5F)',
              transition: 'width 0.1s linear'
            }}
          />
        </div>
        <div style={{ fontSize: '0.75rem', color: '#74C69D', marginTop: '8px', fontWeight: 600 }}>
          Initializing 3D World... {Math.round(progress)}%
        </div>
      </div>

      <style>{`
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
