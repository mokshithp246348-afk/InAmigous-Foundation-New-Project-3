import React, { useState } from 'react';
import { ShieldCheck, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function GovernanceSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'transparency',
      icon: ShieldCheck,
      title: '1. Radical Transparency',
      subtitle: 'Strict Compliance & Certified Audits',
      badge: 'Certified Governance',
      color: '#74C69D',
      desc: 'Operating under strict statutory compliance standards, certified independent auditing, and open real-time impact tracking for complete public donor accountability.',
      highlights: [
        '100% Certified Financial Statements',
        'Section 8 Statutory Compliance',
        'Public Real-Time Dashboard Reporting',
        'Zero Overhead Administrative Leakage'
      ]
    },
    {
      id: 'mobilization',
      icon: Users,
      title: '2. Youth Mobilization',
      subtitle: 'Student Internships & Grassroots Leadership',
      badge: 'Community Action',
      color: '#F4A261',
      desc: 'Empowering student interns, university chapters, and grassroots volunteers to take active ownership and lead field welfare campaigns in local communities.',
      highlights: [
        '5,000+ Active Student Interns',
        '40+ University Regional Chapters',
        'Structured Field Leadership Programs',
        'Verified Institutional Certificate Tracking'
      ]
    },
    {
      id: 'sustainability',
      icon: TrendingUp,
      title: '3. Sustainable Empowerment',
      subtitle: 'Beyond Charity to Permanent Self-Reliance',
      badge: 'Long-Term Impact',
      color: '#52B788',
      desc: 'Progressing beyond short-term emergency relief into structured capacity building, formal schooling support, vocational certification, and ecological stewardship.',
      highlights: [
        'Self-Sustaining Community Hubs',
        'Government Accredited Skill Diplomas',
        'Micro-Financial Enterprise Incubation',
        'Ecological Urban Afforestation Drives'
      ]
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header & Mission Statement */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '16px' }}>
            Section 2: About Us & Institutional Governance
          </div>

          <h2
            style={{
              fontSize: '2.6rem',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
            }}
          >
            Ground-Level Impact Governed By <br />
            <span className="text-gradient">Ethical Accountability & Vision</span>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#E2E8F0',
              lineHeight: 1.7,
              background: 'rgba(14, 28, 25, 0.75)',
              padding: '24px 32px',
              borderRadius: '20px',
              border: '1px solid var(--border-glass)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }}
          >
            "Dedicated to transparent, measurable, ground-level change governed by ethical accountability,
            volunteer mobilization, and open public reporting across every social intervention."
          </p>
        </div>

        {/* Three-Pillar Governance Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="governance-grid">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isSelected = activePillar === index;

            return (
              <div
                key={pillar.id}
                className="glass-panel"
                onClick={() => {
                  playClickSound();
                  setActivePillar(index);
                }}
                onMouseEnter={playHoverSound}
                style={{
                  padding: '36px 28px',
                  cursor: 'pointer',
                  borderRadius: '24px',
                  borderColor: isSelected ? pillar.color : 'var(--border-glass)',
                  background: isSelected
                    ? 'linear-gradient(180deg, rgba(27, 67, 50, 0.5) 0%, rgba(14, 28, 25, 0.9) 100%)'
                    : 'rgba(14, 28, 25, 0.75)',
                  transform: isSelected ? 'translateY(-6px)' : 'none',
                  boxShadow: isSelected ? `0 16px 45px ${pillar.color}25` : '0 8px 25px rgba(0,0,0,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: `rgba(${pillar.color === '#F4A261' ? '244, 162, 97' : '116, 198, 157'}, 0.15)`,
                      border: `1px solid ${pillar.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color
                    }}
                  >
                    <IconComponent size={28} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: pillar.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.88rem', color: pillar.color, fontWeight: 700, marginBottom: '16px' }}>
                  {pillar.subtitle}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.95rem', color: '#CBD5E0', lineHeight: 1.6, marginBottom: '24px' }}>
                  {pillar.desc}
                </p>

                {/* Highlight Checkpoints */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', fontWeight: 500 }}>
                      <CheckCircle size={17} color={pillar.color} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .governance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
