import React, { useState } from 'react';
import { X, UserPlus, CheckCircle, GraduationCap, Building, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playHoverSound, playSuccessChime } from '../utils/audio';

export default function VolunteerModal({ onClose, selectedProgram }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student Intern',
    interest: selectedProgram ? selectedProgram.title : 'Project Poshan'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessChime();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
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
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <UserPlus size={28} color="#74C69D" />
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
                Join as a <span className="text-gradient">Volunteer</span>
              </h2>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#A0AEC0', marginBottom: '24px' }}>
              Empower communities, earn verifiable volunteer certificates, and gain real-world social enterprise leadership experience.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#CBD5E0', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(8, 15, 17, 0.8)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#CBD5E0', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(8, 15, 17, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#CBD5E0', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(8, 15, 17, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#CBD5E0', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Participant Category
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(8, 15, 17, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="Student Intern">Student Intern (College / School)</option>
                    <option value="Corporate CSR Volunteer">Corporate CSR Volunteer</option>
                    <option value="Community Field Worker">Community Field Worker</option>
                    <option value="Technical Specialist">Technical Specialist (AI / Web)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#CBD5E0', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Primary Initiative Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(8, 15, 17, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="Project Poshan">1. Project Poshan (Food Relief)</option>
                    <option value="Project Vidya Path">2. Project Vidya Path (Education)</option>
                    <option value="Project Jeev">3. Project Jeev (Animal Care)</option>
                    <option value="Project Udaan">4. Project Udaan (Women Skills)</option>
                    <option value="Project Prakriti">5. Project Prakriti (Afforestation)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '14px' }}>
                <UserPlus size={18} />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(82, 183, 136, 0.2)', color: '#74C69D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              Welcome to Aura Impact!
            </h3>
            <p style={{ fontSize: '1rem', color: '#CBD5E0', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name}</strong>! Your application for <strong>{formData.interest}</strong> has been logged. Our onboarding coordinator will reach out via email shortly.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ margin: '0 auto' }}>
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
