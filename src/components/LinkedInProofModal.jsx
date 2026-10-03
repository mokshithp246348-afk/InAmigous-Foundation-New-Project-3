import React, { useState } from 'react';
import { X, Copy, Check, Linkedin, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessChime } from '../utils/audio';

export default function LinkedInProofModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const linkedinPostCopy = `Exploring AI-Driven Web Architectures: Rapid Prototyping for Grassroots Social Impact 🌐🚀

As part of my technology development milestones, I completed Task 3 focused on leveraging artificial intelligence systems to architect, refine, and deploy a comprehensive, multi-section web platform.

Domain Focus: Sustainable Non-Profit Operations and Community Welfare
Using modern generative web platforms, I engineered an integrated digital presence featuring:
• Global Navigation & Dynamic Hero Section: Communicating core mission values alongside verified quantitative impact indicators.
• About Us & Governance Framework: Outlining organizational transparency, volunteer mobilization networks, and institutional accountability.
• Flagship Initiatives Grid: Structuring dedicated modules across nutritional relief, childhood education, animal welfare, women's vocational upskilling, and ecological sustainability.

This exercise provided valuable insight into how semantic prompt engineering guides layout generation, typography hierarchies, and responsive CSS flex containers, drastically accelerating the transition from concept to functional prototype.

Sincere appreciation to @InAmigos Foundation for curating this practical challenge and fostering hands-on capability in emerging digital technologies.

🔗 Live Prototype Link: http://localhost:3000/
📁 Complete Deliverables & Full-Page Captures: [Insert Google Drive Public Folder URL]

#ArtificialIntelligence #WebDevelopment #RapidPrototyping #NoCode #InAmigosFoundation #TechForGood #ContinuousLearning #FrontendArchitecture`;

  const handleCopy = () => {
    playSuccessChime();
    navigator.clipboard.writeText(linkedinPostCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Linkedin size={28} color="#60A5FA" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
            LinkedIn <span className="text-gradient">Dissemination Helper</span>
          </h2>
        </div>

        <p style={{ fontSize: '0.92rem', color: '#A0AEC0', marginBottom: '20px', lineHeight: 1.6 }}>
          Section 10 PRD Dissemination Protocol: Use this exact template with verified active entity tag for <strong>@InAmigos Foundation</strong>.
        </p>

        {/* Copy Box */}
        <div
          style={{
            background: 'rgba(8, 15, 17, 0.9)',
            border: '1px solid rgba(10, 102, 194, 0.4)',
            borderRadius: '14px',
            padding: '20px',
            maxHeight: '260px',
            overflowY: 'auto',
            fontSize: '0.85rem',
            color: '#E2E8F0',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            marginBottom: '20px'
          }}
        >
          {linkedinPostCopy}
        </div>

        {/* Mandatory Tagging Rule Alert */}
        <div
          style={{
            background: 'rgba(244, 162, 97, 0.12)',
            border: '1px solid rgba(244, 162, 97, 0.4)',
            padding: '14px 18px',
            borderRadius: '12px',
            marginBottom: '24px',
            fontSize: '0.85rem',
            color: '#F4A261',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}
        >
          <ShieldCheck size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Critical Constraint:</strong> When posting on LinkedIn, type <code>@InAmigos Foundation</code> and select the official entity from the typeahead dropdown to produce a clickable blue hyperlinked tag!
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px' }}>
          <button
            onClick={handleCopy}
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Dissemination Text'}</span>
          </button>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px' }}
          >
            <span>Open LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
