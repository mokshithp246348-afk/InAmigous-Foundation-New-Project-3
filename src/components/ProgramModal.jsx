import React from 'react';
import { X, CheckCircle, Heart, UserPlus, Sparkles, Target, ShieldCheck } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessChime } from '../utils/audio';

export default function ProgramModal({ program, onClose, onOpenSupport, onOpenVolunteer }) {
  if (!program) return null;
  const IconComponent = program.icon;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          onMouseEnter={playHoverSound}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div style={{ position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
          <img src={program.image} alt={program.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 20%, #0e191c 100%)' }} />
          
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(8, 15, 17, 0.85)', color: program.color }}>
              <IconComponent size={28} />
            </div>
            <div>
              <span className="badge badge-emerald">{program.category.toUpperCase()}</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>{program.title}</h2>
            </div>
          </div>
        </div>

        {/* Operational Scope */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.9rem', color: program.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: 700 }}>
            Operational Scope & Mandate
          </h4>
          <p style={{ fontSize: '1rem', color: '#CBD5E0', lineHeight: 1.6 }}>{program.scope}</p>
        </div>

        {/* Verified Deliverable Bar */}
        <div style={{ background: 'rgba(82, 183, 136, 0.12)', border: '1px solid rgba(82, 183, 136, 0.3)', padding: '16px 20px', borderRadius: '14px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#74C69D', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
            <ShieldCheck size={18} /> Verified Key Deliverable
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{program.deliverables}</div>
        </div>

        {/* Program Deliverables List */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontWeight: 700 }}>
            Core Program Modules
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {program.details.map((detail, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                <CheckCircle size={18} color={program.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => {
              playClickSound();
              onClose();
              onOpenSupport(program);
            }}
            onMouseEnter={playHoverSound}
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <Heart size={18} />
            <span>Sponsor This Program</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onClose();
              onOpenVolunteer(program);
            }}
            onMouseEnter={playHoverSound}
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <UserPlus size={18} />
            <span>Volunteer for {program.title.split('.')[1]}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
