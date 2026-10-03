import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import {
  Search,
  Heart,
  BookOpen,
  MapPin,
  Sparkles,
  Users,
  CheckCircle,
  X,
  ChevronRight
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function GalleryDashboard({ onOpenSupport, onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);

  const categories = [
    'All',
    'Animal Welfare',
    'Food Relief',
    'Child Education',
    'Afforestation',
    'Clean Water',
    'Women Empowerment',
    'Healthcare'
  ];

  // Filter items based on category and search query
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="gallery"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '90px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Hero Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '40px 36px',
            marginBottom: '40px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(14, 28, 25, 0.92) 0%, rgba(7, 17, 15, 0.96) 100%)',
            border: '1px solid rgba(82, 183, 136, 0.35)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(82, 183, 136, 0.2)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  background: 'rgba(82, 183, 136, 0.15)',
                  border: '1px solid rgba(82, 183, 136, 0.4)',
                  color: '#74C69D',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}
              >
                <Sparkles size={16} />
                <span>Verified Impact Gallery & Cause Dashboard</span>
              </div>

              <h1
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px'
                }}
              >
                Grassroots Causes <span className="text-gradient">Gallery</span>
              </h1>

              <p style={{ fontSize: '1.05rem', color: '#CBD5E0', maxWidth: '680px', lineHeight: 1.6 }}>
                Explore 8 realistic ground-level initiatives from InAmigos Foundation. Donate directly to empower a cause or click <strong>"Read Story"</strong> for deep impact metrics and verified achievements.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  playClickSound();
                  onOpenSupport(null);
                }}
                onMouseEnter={playHoverSound}
                className="btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.98rem' }}
              >
                <Heart size={18} />
                <span>General Donation</span>
              </button>

              {onNavigateHome && (
                <button
                  onClick={() => {
                    playClickSound();
                    onNavigateHome();
                  }}
                  onMouseEnter={playHoverSound}
                  className="btn-secondary"
                  style={{ padding: '14px 24px', fontSize: '0.98rem' }}
                >
                  <span>Back to Home</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            marginBottom: '36px'
          }}
        >
          {/* Search Box */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div
              style={{
                position: 'relative',
                flex: '1 1 320px',
                maxWidth: '500px'
              }}
            >
              <Search
                size={18}
                color="#74C69D"
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search by cause name, topic, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px 13px 44px',
                  borderRadius: '16px',
                  background: 'rgba(7, 21, 18, 0.85)',
                  border: '1px solid rgba(82, 183, 136, 0.35)',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  transition: 'border 0.2s ease'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: '#A0AEC0',
                    cursor: 'pointer'
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div style={{ color: '#74C69D', fontSize: '0.88rem', fontWeight: 700 }}>
              Showing {filteredItems.length} of {GALLERY_ITEMS.length} Causes
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={playHoverSound}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '20px',
                    border: isSelected
                      ? '1px solid #74C69D'
                      : '1px solid rgba(255, 255, 255, 0.12)',
                    background: isSelected
                      ? 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)'
                      : 'rgba(7, 21, 18, 0.65)',
                    color: isSelected ? '#ffffff' : '#CBD5E0',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 15px rgba(82, 183, 136, 0.3)' : 'none',
                    transition: 'all 0.25 ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Card Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(82, 183, 136, 0.25)',
                background: 'rgba(14, 28, 25, 0.88)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Photo Thumbnail Container */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="gallery-card-img"
                />

                {/* Top Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(7, 21, 18, 0.88)',
                    backdropFilter: 'blur(10px)',
                    padding: '5px 12px',
                    borderRadius: '16px',
                    border: '1px solid rgba(82, 183, 136, 0.4)',
                    color: '#74C69D',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={13} />
                  <span>{item.category}</span>
                </div>

                {/* Location overlay bottom tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    background: 'rgba(7, 21, 18, 0.82)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    color: '#E07A5F',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.3,
                    marginBottom: '10px'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#CBD5E0',
                    lineHeight: 1.55,
                    marginBottom: '18px',
                    flex: 1
                  }}
                >
                  {item.summary}
                </p>

                {/* Progress Bar Container */}
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '14px',
                    borderRadius: '14px',
                    border: '1px solid rgba(82, 183, 136, 0.18)',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
                    <span style={{ color: '#74C69D', fontWeight: 700 }}>
                      Raised: <strong>{item.raised}</strong>
                    </span>
                    <span style={{ color: '#A0AEC0', fontWeight: 600 }}>
                      Goal: {item.goal} ({item.percent}%)
                    </span>
                  </div>

                  {/* Outer Track */}
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.12)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${item.percent}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #52B788 0%, #E07A5F 100%)',
                        borderRadius: '4px',
                        transition: 'width 1s ease'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#CBD5E0', marginTop: '8px' }}>
                    <Users size={12} color="#F4A261" />
                    <span>{item.donors} Patrons & Donors Contributed</span>
                  </div>
                </div>

                {/* Action Buttons Row: Donate & Read More */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => {
                      playClickSound();
                      onOpenSupport(item);
                    }}
                    onMouseEnter={playHoverSound}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '0.86rem',
                      justifyContent: 'center'
                    }}
                  >
                    <Heart size={15} />
                    <span>Donate Now</span>
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      setSelectedItemForModal(item);
                    }}
                    onMouseEnter={playHoverSound}
                    className="btn-secondary"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '0.86rem',
                      justifyContent: 'center'
                    }}
                  >
                    <BookOpen size={15} />
                    <span>Read Story</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Read More Detail Modal */}
      {selectedItemForModal && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedItemForModal(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '740px',
              padding: '0',
              overflow: 'hidden',
              borderRadius: '24px',
              background: '#0e1c19',
              border: '1px solid rgba(82, 183, 136, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
          >
            {/* Modal Header Photo Banner */}
            <div style={{ position: 'relative', height: '300px' }}>
              <img
                src={selectedItemForModal.image}
                alt={selectedItemForModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(14, 28, 25, 0.95) 100%)'
                }}
              />

              {/* Close X Button */}
              <button
                onClick={() => {
                  playClickSound();
                  setSelectedItemForModal(null);
                }}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  background: 'rgba(7, 21, 18, 0.85)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
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
                <X size={18} />
              </button>

              {/* Banner Details */}
              <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ background: '#52B788', color: '#040d0b', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {selectedItemForModal.category}
                  </span>
                  <span style={{ color: '#E07A5F', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} /> {selectedItemForModal.location}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                  {selectedItemForModal.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div style={{ padding: '28px 32px 32px' }}>
              
              {/* Quote box */}
              <div
                style={{
                  background: 'rgba(82, 183, 136, 0.1)',
                  borderLeft: '4px solid #52B788',
                  padding: '14px 18px',
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '20px'
                }}
              >
                <p style={{ fontSize: '1rem', fontStyle: 'italic', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                  "{selectedItemForModal.quote}"
                </p>
                <span style={{ fontSize: '0.76rem', color: '#74C69D', fontWeight: 700 }}>
                  {selectedItemForModal.author}
                </span>
              </div>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                Impact Story & Deep Narrative
              </h4>

              <p style={{ fontSize: '0.94rem', color: '#CBD5E0', lineHeight: 1.65, marginBottom: '24px' }}>
                {selectedItemForModal.story}
              </p>

              {/* Achievements Checklist */}
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Verified Key Achievements
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                {selectedItemForModal.achievements.map((ach, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: '1px solid rgba(82, 183, 136, 0.2)'
                    }}
                  >
                    <CheckCircle size={18} color="#74C69D" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Triggers */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    playClickSound();
                    const itemToDonate = selectedItemForModal;
                    setSelectedItemForModal(null);
                    onOpenSupport(itemToDonate);
                  }}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px 20px' }}
                >
                  <Heart size={18} />
                  <span>Donate to this Cause</span>
                </button>

                <button
                  onClick={() => setSelectedItemForModal(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 24px' }}
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      <style>{`
        .gallery-card-img:hover {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
