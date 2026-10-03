import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import {
  ArrowRight,
  UserPlus,
  ShieldCheck,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Image as ImageIcon
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function HeroSection({ onOpenVolunteer, onOpenSupport, onNavigateGallery }) {
  const [counts, setCounts] = useState({
    meals: 0,
    children: 0,
    women: 0,
    saplings: 0
  });

  const targetMetrics = {
    meals: 15000,
    children: 2500,
    women: 1200,
    saplings: 20000
  };

  const slides = GALLERY_ITEMS;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      setCounts({
        meals: Math.floor(targetMetrics.meals * Math.min(progress, 1)),
        children: Math.floor(targetMetrics.children * Math.min(progress, 1)),
        women: Math.floor(targetMetrics.women * Math.min(progress, 1)),
        saplings: Math.floor(targetMetrics.saplings * Math.min(progress, 1))
      });

      if (stepCount >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Moving Images Slideshow Timer (fast 1.0s slide transition)
  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1000);
    return () => clearInterval(slideTimer);
  }, [isPaused, slides.length]);

  const handlePrevSlide = () => {
    playClickSound();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    playClickSound();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Content */}
          <div>
            {/* Institution Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '30px',
                background: 'rgba(82, 183, 136, 0.15)',
                border: '1px solid rgba(82, 183, 136, 0.4)',
                color: '#74C69D',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '20px',
                boxShadow: '0 0 15px rgba(82, 183, 136, 0.2)'
              }}
            >
              <ShieldCheck size={16} />
              <span>Section 8 Registered Non-Profit Social Enterprise</span>
            </div>

            {/* H1 Display Headline */}
            <h1
              style={{
                fontSize: '3.3rem',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '18px',
                color: '#ffffff',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
              }}
            >
              Empowering Communities, <br />
              <span className="text-gradient">Transforming Futures</span> <br />
              Through Grassroots Action
            </h1>

            {/* Descriptive Subtitle */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#CBD5E0',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '560px'
              }}
            >
              Bridging socioeconomic disparities through structured interventions in child education,
              nutritional security, women's vocational independence, animal welfare, and ecological sustainability.
            </p>

            {/* Action Triggers */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
              <button
                onClick={() => {
                  playClickSound();
                  onOpenVolunteer();
                }}
                onMouseEnter={playHoverSound}
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                <UserPlus size={18} />
                <span>Join as a Volunteer</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  if (onNavigateGallery) onNavigateGallery();
                }}
                onMouseEnter={playHoverSound}
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '14px 26px', borderColor: 'rgba(82, 183, 136, 0.5)' }}
              >
                <ImageIcon size={18} color="#74C69D" />
                <span>Impact Gallery (8 Causes)</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#74C69D', fontSize: '0.88rem', fontWeight: 700 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={18} color="#F4A261" /> 100% Certified Audits
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={18} color="#74C69D" /> 5,000+ Active Volunteers
              </div>
            </div>
          </div>

          {/* Right Hero Moving Images Showcase (8 Realistic Slides) */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-panel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                padding: '12px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '26px',
                border: '1px solid rgba(82, 183, 136, 0.35)',
                background: 'rgba(14, 28, 25, 0.85)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(82, 183, 136, 0.25)',
                transition: 'box-shadow 0.4s ease'
              }}
            >
              {/* Slides Container */}
              <div style={{ position: 'relative', height: '430px', borderRadius: '18px', overflow: 'hidden' }}>
                {slides.map((s, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={s.id}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scale(1)' : 'scale(1.04)',
                        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <img
                        src={s.image}
                        alt={s.tag}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                      {/* Gradient overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(7, 21, 18, 0.95) 100%)'
                        }}
                      />
                    </div>
                  );
                })}

                {/* Floating Top Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    background: 'rgba(7, 21, 18, 0.88)',
                    backdropFilter: 'blur(12px)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '1px solid rgba(82, 183, 136, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                    zIndex: 10
                  }}
                >
                  <Sparkles color="#74C69D" size={18} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff' }}>
                    {activeSlide.tag}
                  </span>
                </div>

                {/* Floating Live Quote Card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '18px',
                    right: '18px',
                    background: 'rgba(7, 21, 18, 0.92)',
                    backdropFilter: 'blur(14px)',
                    padding: '14px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(224, 122, 95, 0.4)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                    zIndex: 10
                  }}
                >
                  <p style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.45, marginBottom: '6px' }}>
                    "{activeSlide.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.74rem', color: '#74C69D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {activeSlide.author}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#F4A261', fontWeight: 600 }}>
                      Initiative {currentSlide + 1} of {slides.length}
                    </span>
                  </div>
                </div>

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrevSlide}
                  onMouseEnter={playHoverSound}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '46%',
                    transform: 'translateY(-50%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(7, 21, 18, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 20,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#1B4332')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(7, 21, 18, 0.8)')}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNextSlide}
                  onMouseEnter={playHoverSound}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '46%',
                    transform: 'translateY(-50%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(7, 21, 18, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 20,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#1B4332')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(7, 21, 18, 0.8)')}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Progress Dot Indicators */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 0 4px' }}>
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      playClickSound();
                      setCurrentSlide(idx);
                    }}
                    title={s.title}
                    style={{
                      width: currentSlide === idx ? '24px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      border: 'none',
                      background: currentSlide === idx ? '#E07A5F' : 'rgba(255, 255, 255, 0.25)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Impact Metrics Strip */}
        <div
          id="impact"
          className="glass-panel"
          style={{
            marginTop: '60px',
            padding: '36px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            borderColor: 'rgba(82, 183, 136, 0.3)',
            background: 'linear-gradient(180deg, rgba(14, 28, 25, 0.85) 0%, rgba(7, 17, 15, 0.95) 100%)'
          }}
        >
          {/* Metric 1 */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-glass)', paddingRight: '16px' }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#74C69D', fontFamily: 'var(--font-display)' }}>
              {counts.meals.toLocaleString()}+
            </div>
            <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>Meals Distributed</div>
            <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '2px' }}>Project Poshan</div>
          </div>

          {/* Metric 2 */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-glass)', paddingRight: '16px' }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#F4A261', fontFamily: 'var(--font-display)' }}>
              {counts.children.toLocaleString()}+
            </div>
            <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>Children Enrolled</div>
            <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '2px' }}>Project Vidya Path</div>
          </div>

          {/* Metric 3 */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-glass)', paddingRight: '16px' }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#52B788', fontFamily: 'var(--font-display)' }}>
              {counts.women.toLocaleString()}+
            </div>
            <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>Women Upskilled</div>
            <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '2px' }}>Project Udaan</div>
          </div>

          {/* Metric 4 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#74C69D', fontFamily: 'var(--font-display)' }}>
              {counts.saplings.toLocaleString()}+
            </div>
            <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>Saplings Planted</div>
            <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '2px' }}>Project Prakriti</div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          #impact { grid-template-columns: repeat(2, 1fr) !important; }
          #impact > div { border-right: none !important; border-bottom: 1px solid var(--border-glass); padding-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
