import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, ShieldCheck, ExternalLink } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function FooterSection({ onOpenLinkedIn }) {
  return (
    <footer
      id="contact"
      style={{
        background: '#111D20',
        borderTop: '1px solid rgba(27, 67, 50, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: '#A0AEC0',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '48px', marginBottom: '60px' }} className="footer-grid">
          
          {/* Col 1: Institutional Intro & Legal Declaration */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sparkles size={20} color="#ffffff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#ffffff' }}>
                AURA <span style={{ color: '#E07A5F' }}>IMPACT</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#A0AEC0', marginBottom: '20px' }}>
              Aura Impact Initiative is a registered Section 8 Non-Profit Social Welfare Organization within the InAmigos Foundation Ecosystem. Dedicated to transparent, measurable, ground-level societal transformation.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '10px',
                background: 'rgba(82, 183, 136, 0.12)',
                border: '1px solid rgba(82, 183, 136, 0.25)',
                color: '#74C69D',
                fontSize: '0.78rem',
                fontWeight: 600
              }}
            >
              <ShieldCheck size={16} />
              <span>Section 8 NGO Registration Reg. No: S-8/2026/IN</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {['Home', 'About Us', 'Governance', 'Initiatives', 'Impact Metrics'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                    style={{ color: '#CBD5E0', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                    onMouseOver={(e) => (e.target.style.color = '#74C69D')}
                    onMouseOut={(e) => (e.target.style.color = '#CBD5E0')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Initiatives
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, fontSize: '0.9rem' }}>
              <li><a href="#initiatives" onClick={playClickSound} style={{ color: '#CBD5E0', textDecoration: 'none' }}>Project Poshan</a></li>
              <li><a href="#initiatives" onClick={playClickSound} style={{ color: '#CBD5E0', textDecoration: 'none' }}>Project Vidya Path</a></li>
              <li><a href="#initiatives" onClick={playClickSound} style={{ color: '#CBD5E0', textDecoration: 'none' }}>Project Jeev</a></li>
              <li><a href="#initiatives" onClick={playClickSound} style={{ color: '#CBD5E0', textDecoration: 'none' }}>Project Udaan</a></li>
              <li><a href="#initiatives" onClick={playClickSound} style={{ color: '#CBD5E0', textDecoration: 'none' }}>Project Prakriti</a></li>
            </ul>
          </div>

          {/* Col 4: Institutional Contact Vectors */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact Vectors
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#74C69D" />
                <a href="mailto:contact@auraimpact.org" style={{ color: '#E2E8F0', textDecoration: 'none' }}>contact@auraimpact.org</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#F4A261" />
                <span>+91 (800) 108-AURA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#52B788" style={{ marginTop: '3px' }} />
                <span>Aura Impact Tower, NGO District, New Delhi, 110001, India</span>
              </div>
            </div>

            {/* Social Links & Active LinkedIn Tag trigger */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  playClickSound();
                  onOpenLinkedIn();
                }}
                onMouseEnter={playHoverSound}
                title="Verify @InAmigos Foundation LinkedIn Tag"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(10, 102, 194, 0.25)',
                  border: '1px solid rgba(10, 102, 194, 0.4)',
                  color: '#60A5FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Linkedin size={18} />
              </button>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Twitter size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Instagram size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Github size={18} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & PRD Audit Compliance Note */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#718096'
          }}
        >
          <div>
            © 2026 Aura Impact Initiative (InAmigos Foundation Ecosystem). All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Project Identifier: TASK-03-AI-WEB-GEN</span>
            <span>•</span>
            <button
              onClick={() => {
                playClickSound();
                onOpenLinkedIn();
              }}
              style={{ background: 'none', border: 'none', color: '#74C69D', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: 600 }}
            >
              <span>Verify LinkedIn @InAmigos Tag</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
