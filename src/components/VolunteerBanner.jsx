import React from 'react';
import { UserPlus, Sparkles, Building2, GraduationCap, HandHeart } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function VolunteerBanner({ onOpenVolunteer, onOpenSupport }) {
  return (
    <section style={{ padding: '60px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div
          className="glass-panel pulse-glow volunteer-banner-grid"
          style={{
            padding: '56px 48px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
            boxShadow: '0 20px 50px rgba(27, 67, 50, 0.25)',
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Callout Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#F4A261',
                fontSize: '0.8rem',
                fontWeight: 800,
                marginBottom: '18px'
              }}
            >
              <Sparkles size={16} />
              <span>Section 4: Stakeholder Engagement & Mobilization</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
              Become a Catalyst for Ground-Level Transformation
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.65, marginBottom: '28px' }}>
              Join thousands of passionate student interns, corporate CSR partners, and grassroots volunteers
              leading community welfare campaigns. Gain verifiable leadership certification and real-world impact.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', color: '#74C69D', fontSize: '0.9rem', fontWeight: 700 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={18} /> Student Internship Credits
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} /> Corporate CSR Integration
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HandHeart size={18} /> Direct Field Operations
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div
            style={{
              background: '#ffffff',
              padding: '32px',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1A252C', marginBottom: '10px' }}>
              Ready to Contribute?
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#5A6A75', marginBottom: '24px' }}>
              Apply for volunteer opportunities or sponsor an initiative today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => {
                  playClickSound();
                  onOpenVolunteer();
                }}
                onMouseEnter={playHoverSound}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <UserPlus size={18} />
                <span>Apply as Volunteer</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenSupport();
                }}
                onMouseEnter={playHoverSound}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Sponsor a Program</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .volunteer-banner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
