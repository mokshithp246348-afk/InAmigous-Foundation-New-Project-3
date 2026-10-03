import React, { useState } from 'react';
import { Utensils, BookOpen, HeartPulse, Scissors, TreePine, Search, Eye } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function InitiativesSection({ onSelectProgram }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const initiatives = [
    {
      id: 'poshan',
      category: 'relief',
      title: '1. Project Poshan',
      tagline: 'Humanitarian Food & Nutritional Relief',
      icon: Utensils,
      image: '/assets/poshan.jpg',
      color: '#E07A5F',
      deliverables: '15,000+ Hot Meals & Water Rations Distributed',
      scope: 'Coordinated food distribution networks providing balanced nutrition and clean drinking water to slum settlements, daily wage laborers, and disaster-affected families.',
      metrics: { primary: '15,000+', label: 'Meals Served', target: '25,000' },
      details: [
        'Daily mobile community kitchen drives',
        'Fortified nutritional kits for malnourished toddlers',
        'Clean drinking water tanker dispatch in drought pockets',
        'Zero-food-waste partnership with local hotels'
      ]
    },
    {
      id: 'vidya',
      category: 'education',
      title: '2. Project Vidya Path',
      tagline: 'Childhood Education & Digital Literacy',
      icon: BookOpen,
      image: '/assets/vidya.jpg',
      color: '#74C69D',
      deliverables: '2,500+ Children Enrolled in Learning Centers',
      scope: 'Establishing non-formal education centers, digital tablet bootcamps, and providing essential scholastic kits (bags, books, uniforms) for first-generation learners.',
      metrics: { primary: '2,500+', label: 'Students Enrolled', target: '5,000' },
      details: [
        '18 Smart Learning Centers across underserved districts',
        'Free STEM & basic computer coding modules',
        'Annual scholastic kit & uniform distribution drives',
        'Bridge courses for out-of-school dropouts'
      ]
    },
    {
      id: 'jeev',
      category: 'animal',
      title: '3. Project Jeev',
      tagline: 'Animal Welfare & Stray Rescue Operations',
      icon: HeartPulse,
      image: '/assets/jeev.jpg',
      color: '#48CAE4',
      deliverables: '3,800+ Stray Animals Rescued & Treated',
      scope: 'Rescue networks, emergency veterinary first-aid treatment, anti-rabies vaccination drives, and daily feeding routes for stray dogs, cats, and urban fauna.',
      metrics: { primary: '3,800+', label: 'Animals Healed', target: '6,000' },
      details: [
        '24/7 Mobile Veterinary First-Aid Ambulance',
        'Mass Anti-Rabies Vaccination & ABC Camps',
        'Reflective collar installation for night traffic safety',
        'Daily feeding routes managed by volunteer networks'
      ]
    },
    {
      id: 'udaan',
      category: 'empowerment',
      title: '4. Project Udaan',
      tagline: "Women's Vocational Skill Development",
      icon: Scissors,
      image: '/assets/udaan.jpg',
      color: '#F4A261',
      deliverables: '1,200+ Women Upskilled & Certified',
      scope: 'Vocational training in tailoring, artisan handicrafts, micro-enterprise management, and financial literacy courses enabling sustainable economic independence.',
      metrics: { primary: '1,200+', label: 'Women Upskilled', target: '3,000' },
      details: [
        'Government accredited tailoring & textile certification',
        'Micro-finance micro-grant seed assistance',
        'Self-Help Group (SHG) digital market links',
        'Financial literacy & UPI digital payment workshops'
      ]
    },
    {
      id: 'prakriti',
      category: 'ecology',
      title: '5. Project Prakriti',
      tagline: 'Environmental Sustainability & Plantation',
      icon: TreePine,
      image: '/assets/prakriti.jpg',
      color: '#52B788',
      deliverables: '20,000+ Native Tree Saplings Planted',
      scope: 'Urban afforestation drives using Miyawaki method, community seed bombing campaigns, plastic waste recycling awareness, and rainwater harvesting units.',
      metrics: { primary: '20,000+', label: 'Saplings Planted', target: '50,000' },
      details: [
        'Dense Miyawaki urban forest creation',
        '100,000+ Seed bombs dispersed in degraded hills',
        'Community waste segregation & composting hubs',
        'School green club eco-champions program'
      ]
    }
  ];

  const filteredInitiatives = initiatives.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="initiatives"
      style={{
        padding: '100px 24px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
          <div className="badge badge-terracotta" style={{ marginBottom: '16px' }}>
            Section 3: Flagship Programs & Services Grid
          </div>

          <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Transformative <span className="text-gradient">Social Initiatives</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#CBD5E0', lineHeight: 1.6 }}>
            Comprehensive multi-card program matrix detailing ground-level operational scope,
            verifiable deliverables, and real-time community impact indicators.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '40px',
            background: 'rgba(14, 28, 25, 0.8)',
            padding: '16px 24px',
            borderRadius: '20px',
            border: '1px solid var(--border-glass)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
          }}
        >
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Initiatives' },
              { id: 'relief', label: 'Food Relief' },
              { id: 'education', label: 'Education' },
              { id: 'animal', label: 'Animal Care' },
              { id: 'empowerment', label: 'Women Skills' },
              { id: 'ecology', label: 'Ecology' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  playClickSound();
                  setFilter(tab.id);
                }}
                onMouseEnter={playHoverSound}
                style={{
                  padding: '9px 20px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: filter === tab.id ? '1px solid #74C69D' : '1px solid transparent',
                  background: filter === tab.id ? 'rgba(82, 183, 136, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                  color: filter === tab.id ? '#74C69D' : '#CBD5E0',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '260px' }}>
            <Search size={16} color="#CBD5E0" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 38px',
                borderRadius: '12px',
                background: 'rgba(7, 17, 15, 0.85)',
                border: '1px solid var(--border-glass)',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Initiatives Multi-Card Matrix Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}
          className="initiatives-grid"
        >
          {filteredInitiatives.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(14, 28, 25, 0.8)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  playHoverSound();
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-glass)';
                }}
              >
                {/* Card Image Banner */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(14, 28, 25, 0.95) 100%)'
                    }}
                  />

                  {/* Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '10px',
                      borderRadius: '12px',
                      background: 'rgba(7, 21, 18, 0.85)',
                      color: item.color,
                      border: `1px solid ${item.color}50`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  {/* Impact Metric Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: 'rgba(7, 21, 18, 0.9)',
                      backdropFilter: 'blur(10px)',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: item.color }}>{item.metrics.primary}</span>
                    <span style={{ fontSize: '0.72rem', color: '#CBD5E0', fontWeight: 600 }}>{item.metrics.label}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  
                  <div style={{ fontSize: '0.85rem', color: item.color, fontWeight: 700, marginBottom: '14px' }}>
                    {item.tagline}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#CBD5E0', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {item.scope}
                  </p>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: '#74C69D', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Verified Deliverable
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                      {item.deliverables}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      playClickSound();
                      onSelectProgram(item);
                    }}
                    onMouseEnter={playHoverSound}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${item.color}35 0%, rgba(255, 255, 255, 0.08) 100%)`,
                      border: `1px solid ${item.color}70`,
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <Eye size={18} />
                    <span>Program Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .initiatives-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .initiatives-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
