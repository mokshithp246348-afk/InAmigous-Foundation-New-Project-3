import React, { useState } from 'react';
import { X, Heart, CheckCircle, Sparkles, CreditCard, Award, Printer, Share2, Download, ShieldCheck, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playHoverSound, playSuccessChime } from '../utils/audio';

export default function SupportModal({ onClose, selectedProgram }) {
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [submitted, setSubmitted] = useState(false);
  const [copiedCert, setCopiedCert] = useState(false);

  const activeAmount = customAmount !== '' ? customAmount : amount;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activeAmount || Number(activeAmount) <= 0) return;
    playSuccessChime();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleShare = () => {
    playClickSound();
    const certText = `Aura Impact Certificate of Appreciation awarded to ${donorName || 'Valued Donor'} for contributing $${activeAmount} to ${selectedProgram ? selectedProgram.title : 'Grassroots Social Welfare'}. (Cert ID: CERT-AURA-2026-${Math.floor(1000 + Math.random() * 9000)})`;
    navigator.clipboard.writeText(certText);
    setCopiedCert(true);
    setTimeout(() => setCopiedCert(false), 3000);
  };

  const certDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const certId = `CERT-AURA-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: submitted ? '780px' : '620px',
          transition: 'max-width 0.4s ease'
        }}
      >
        
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
            background: 'rgba(0, 0, 0, 0.06)',
            border: 'none',
            color: '#1A252C',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Heart size={28} color="#E07A5F" />
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A252C' }}>
                Support Our <span className="text-gradient">Social Cause</span>
              </h2>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#5A6A75', marginBottom: '24px', lineHeight: 1.5 }}>
              {selectedProgram
                ? `Directly funding ${selectedProgram.title} (${selectedProgram.tagline})`
                : 'Empower underserved communities through direct ground-level relief, education, and ecological action.'}
            </p>

            <form onSubmit={handleSubmit}>
              {/* Frequency Toggle */}
              <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.04)', padding: '4px', borderRadius: '14px', marginBottom: '20px' }}>
                {['monthly', 'one-time'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setFrequency(type);
                    }}
                    style={{
                      flex: 1,
                      padding: '11px',
                      borderRadius: '11px',
                      border: 'none',
                      background: frequency === type ? '#1B4332' : 'transparent',
                      color: frequency === type ? '#ffffff' : '#5A6A75',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    {type === 'monthly' ? '❤️ Monthly Impact' : '⚡ One-Time Gift'}
                  </button>
                ))}
              </div>

              {/* Preset Amounts Grid ($25, $50, $100, $150, $250) */}
              <label style={{ fontSize: '0.85rem', color: '#1A252C', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                Select Contribution Amount
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '16px' }}>
                {['25', '50', '100', '150', '250'].map((val) => {
                  const isSelected = customAmount === '' && amount === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        playClickSound();
                        setAmount(val);
                        setCustomAmount('');
                      }}
                      style={{
                        padding: '12px 6px',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #E07A5F' : '1px solid #CBD5E0',
                        background: isSelected ? 'linear-gradient(135deg, #E07A5F 0%, #D05B3F 100%)' : '#ffffff',
                        color: isSelected ? '#ffffff' : '#1A252C',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        cursor: 'pointer',
                        boxShadow: isSelected ? '0 4px 15px rgba(224, 122, 95, 0.35)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      ${val}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input Option */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ position: 'relative' }}>
                  <DollarSign size={18} color="#5A6A75" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="number"
                    min="1"
                    placeholder="Or enter custom amount ($)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 38px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: customAmount !== '' ? '2px solid #E07A5F' : '1px solid #CBD5E0',
                      color: '#1A252C',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Donor Name Field for Certificate */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.85rem', color: '#1A252C', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                  Donor Full Name (For Official Certificate of Appreciation)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins (Optional)"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1px solid #CBD5E0',
                    color: '#1A252C',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Dynamic Impact Calculator */}
              <div
                style={{
                  background: 'rgba(27, 67, 50, 0.08)',
                  border: '1px solid rgba(27, 67, 50, 0.2)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <Sparkles size={24} color="#1B4332" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.9rem', color: '#1A252C', lineHeight: 1.5 }}>
                  Your contribution of <strong style={{ color: '#E07A5F', fontSize: '1.05rem' }}>${activeAmount || 0}</strong> provides approx.{' '}
                  <strong style={{ color: '#1B4332', fontSize: '1.05rem' }}>{Math.floor(Number(activeAmount || 0) * 3)} nutritious meals</strong> or{' '}
                  <strong style={{ color: '#2D6A4F', fontSize: '1.05rem' }}>{Math.floor(Number(activeAmount || 0) * 1.5)} educational kits</strong> to underserved children.
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
              >
                <CreditCard size={18} />
                <span>Complete Tax-Deductible Contribution of ${activeAmount || 0}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Premium High-Class Certificate UI */
          <div>
            <div
              id="printable-certificate"
              style={{
                background: 'linear-gradient(135deg, #FAF8F5 0%, #FFF 100%)',
                border: '8px double #C59B27',
                borderRadius: '16px',
                padding: '36px 32px',
                position: 'relative',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                textAlign: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Watermark Crest Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.04,
                  pointerEvents: 'none'
                }}
              >
                <Award size={360} color="#1B4332" />
              </div>

              {/* Certificate Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
                <Award size={36} color="#C59B27" />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, color: '#1B4332', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Aura Impact Initiative • InAmigos Foundation Ecosystem
                </div>
              </div>

              <h2
                style={{
                  fontFamily: 'serif',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#1B4332',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  margin: '10px 0 6px',
                  borderBottom: '2px solid #C59B27',
                  display: 'inline-block',
                  paddingBottom: '6px'
                }}
              >
                Certificate of Appreciation
              </h2>

              <div style={{ fontSize: '0.8rem', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '20px' }}>
                Official Section 8 Non-Profit Tax-Exempt Recognition
              </div>

              <p style={{ fontSize: '0.95rem', color: '#4A5568', fontStyle: 'italic', marginBottom: '12px' }}>
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>

              {/* Recipient Name */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: '#D05B3F',
                  marginBottom: '16px',
                  textDecoration: 'underline decoration-color #C59B27'
                }}
              >
                {donorName || 'Valued Community Donor'}
              </div>

              {/* Citation Body */}
              <p style={{ fontSize: '0.98rem', color: '#2D3748', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 28px' }}>
                In sincere gratitude for your philanthropic contribution of <strong style={{ color: '#1B4332', fontSize: '1.15rem' }}>${activeAmount} USD</strong> towards{' '}
                <strong>{selectedProgram ? selectedProgram.title : 'Grassroots Social Welfare & Ecological Sustainability'}</strong>. Your generous donation empowers underprivileged children, women upskilling, and community development.
              </p>

              {/* Verification & Signature Metadata */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px dashed #CBD5E0',
                  alignItems: 'center'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: '#718096', textTransform: 'uppercase', fontWeight: 700 }}>Certificate Identifier</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1B4332', fontFamily: 'monospace' }}>{certId}</div>
                </div>

                <div>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C59B27 0%, #D4AF37 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: '0 4px 15px rgba(197, 155, 39, 0.4)'
                    }}
                  >
                    <ShieldCheck size={32} />
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1B4332', marginTop: '4px' }}>SEAL OF COMPLIANCE</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: '#718096', textTransform: 'uppercase', fontWeight: 700 }}>Date of Issue</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1B4332' }}>{certDate}</div>
                </div>
              </div>
            </div>

            {/* Action Bar Below Certificate */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={handlePrint}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Printer size={18} />
                <span>Print / Save PDF Certificate</span>
              </button>

              <button
                onClick={handleShare}
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Share2 size={18} />
                <span>{copiedCert ? 'Copied Share Link!' : 'Share Certificate'}</span>
              </button>

              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '12px 20px' }}
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
