import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Menu, X, Image as ImageIcon } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function Navigation({ onOpenSupport, currentView, setCurrentView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, href) => {
    playClickSound();
    setMobileMenuOpen(false);
    if (view && setCurrentView) {
      setCurrentView(view);
    }
    if (href) {
      setTimeout(() => {
        const elem = document.querySelector(href);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: isScrolled ? '12px 28px' : '18px 36px',
        transition: 'all 0.4s ease',
        background: isScrolled ? 'rgba(7, 21, 18, 0.94)' : 'rgba(7, 21, 18, 0.75)',
        backdropFilter: 'blur(18px)',
        borderBottom: isScrolled ? '1px solid rgba(82, 183, 136, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home', '#home')}
          onMouseEnter={playHoverSound}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #1B4332 0%, #52B788 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(82, 183, 136, 0.5)',
              transform: 'rotate(5deg)'
            }}
          >
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', lineHeight: 1, color: '#ffffff' }}>
              AURA <span style={{ color: '#E07A5F' }}>IMPACT</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#74C69D', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              InAmigos Ecosystem
            </div>
          </div>
        </button>

        {/* Clean Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          
          <button
            onClick={() => handleNavClick('home', '#home')}
            onMouseEnter={playHoverSound}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'home' ? '#74C69D' : '#CBD5E0',
              fontWeight: currentView === 'home' ? 800 : 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            Home
          </button>

          {/* Gallery Dashboard Tab */}
          <button
            onClick={() => handleNavClick('gallery', null)}
            onMouseEnter={playHoverSound}
            style={{
              background: currentView === 'gallery' ? 'rgba(82, 183, 136, 0.2)' : 'rgba(255, 255, 255, 0.06)',
              border: currentView === 'gallery' ? '1px solid #52B788' : '1px solid rgba(82, 183, 136, 0.25)',
              color: currentView === 'gallery' ? '#ffffff' : '#74C69D',
              fontWeight: 800,
              fontSize: '0.92rem',
              borderRadius: '20px',
              padding: '6px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: currentView === 'gallery' ? '0 0 15px rgba(82, 183, 136, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <ImageIcon size={15} />
            <span>Gallery Dashboard</span>
            <span style={{ background: '#E07A5F', color: '#ffffff', fontSize: '0.7rem', padding: '1px 6px', borderRadius: '10px', fontWeight: 800 }}>8</span>
          </button>

          <button
            onClick={() => handleNavClick('home', '#about')}
            onMouseEnter={playHoverSound}
            style={{
              background: 'none',
              border: 'none',
              color: '#CBD5E0',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('home', '#governance')}
            onMouseEnter={playHoverSound}
            style={{
              background: 'none',
              border: 'none',
              color: '#CBD5E0',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Governance
          </button>

          <button
            onClick={() => handleNavClick('home', '#initiatives')}
            onMouseEnter={playHoverSound}
            style={{
              background: 'none',
              border: 'none',
              color: '#CBD5E0',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Initiatives
          </button>

          <button
            onClick={() => handleNavClick('home', '#impact')}
            onMouseEnter={playHoverSound}
            style={{
              background: 'none',
              border: 'none',
              color: '#CBD5E0',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Impact
          </button>

        </nav>

        {/* Primary Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={() => {
              playClickSound();
              onOpenSupport();
            }}
            onMouseEnter={playHoverSound}
            className="btn-primary"
          >
            <Heart size={18} />
            <span>Support Our Cause</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '20px',
            background: 'rgba(7, 21, 18, 0.98)',
            borderTop: '1px solid rgba(82, 183, 136, 0.3)',
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <button
            onClick={() => handleNavClick('home', '#home')}
            style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, textAlign: 'left' }}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('gallery', null)}
            style={{ background: 'rgba(82, 183, 136, 0.2)', border: '1px solid #52B788', color: '#ffffff', padding: '10px 16px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ImageIcon size={18} />
            <span>Gallery Dashboard (8 Causes)</span>
          </button>

          <button
            onClick={() => handleNavClick('home', '#about')}
            style={{ background: 'none', border: 'none', color: '#CBD5E0', fontSize: '1.1rem', fontWeight: 600, textAlign: 'left' }}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('home', '#initiatives')}
            style={{ background: 'none', border: 'none', color: '#CBD5E0', fontSize: '1.1rem', fontWeight: 600, textAlign: 'left' }}
          >
            Initiatives
          </button>

          <button
            onClick={() => handleNavClick('home', '#impact')}
            style={{ background: 'none', border: 'none', color: '#CBD5E0', fontSize: '1.1rem', fontWeight: 600, textAlign: 'left' }}
          >
            Impact Metrics
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
