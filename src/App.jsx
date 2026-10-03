import React, { useState } from 'react';
import Background3D from './components/Background3D';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import GovernanceSection from './components/GovernanceSection';
import InitiativesSection from './components/InitiativesSection';
import VolunteerBanner from './components/VolunteerBanner';
import FooterSection from './components/FooterSection';
import GalleryDashboard from './components/GalleryDashboard';

import ProgramModal from './components/ProgramModal';
import SupportModal from './components/SupportModal';
import VolunteerModal from './components/VolunteerModal';
import LinkedInProofModal from './components/LinkedInProofModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'gallery'

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [supportTargetProgram, setSupportTargetProgram] = useState(null);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [volunteerTargetProgram, setVolunteerTargetProgram] = useState(null);
  const [linkedInModalOpen, setLinkedInModalOpen] = useState(false);

  const handleOpenSupport = (program = null) => {
    setSupportTargetProgram(program);
    setSupportModalOpen(true);
  };

  const handleOpenVolunteer = (program = null) => {
    setVolunteerTargetProgram(program);
    setVolunteerModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Live Single Premium NGO Environmental Background */}
      <Background3D />

      {/* Global Header Navigation with Gallery Dashboard Tab */}
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenSupport={() => handleOpenSupport(null)}
      />

      {/* Main View Switcher: Home Page vs Gallery Dashboard */}
      <main>
        {currentView === 'gallery' ? (
          <div>
            <GalleryDashboard
              onOpenSupport={handleOpenSupport}
              onNavigateHome={() => setCurrentView('home')}
            />
            <FooterSection onOpenLinkedIn={() => setLinkedInModalOpen(true)} />
          </div>
        ) : (
          <div>
            {/* Section 1: Hero Carousel with 8 Cause Slides */}
            <HeroSection
              onOpenVolunteer={() => handleOpenVolunteer(null)}
              onOpenSupport={() => handleOpenSupport(null)}
              onNavigateGallery={() => setCurrentView('gallery')}
            />

            {/* Section 2: About Us Narrative & Governance Grid */}
            <GovernanceSection />

            {/* Section 3: Flagship Social Initiatives Grid */}
            <InitiativesSection
              onSelectProgram={(program) => setSelectedProgram(program)}
            />

            {/* Section 4: Volunteer Mobilization Banner */}
            <VolunteerBanner
              onOpenVolunteer={() => handleOpenVolunteer(null)}
              onOpenSupport={() => handleOpenSupport(null)}
            />

            {/* Section 5: Institutional Footer */}
            <FooterSection
              onOpenLinkedIn={() => setLinkedInModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Interactive Cause & Donation Modals */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onOpenSupport={handleOpenSupport}
          onOpenVolunteer={handleOpenVolunteer}
        />
      )}

      {supportModalOpen && (
        <SupportModal
          selectedProgram={supportTargetProgram}
          onClose={() => {
            setSupportModalOpen(false);
            setSupportTargetProgram(null);
          }}
        />
      )}

      {volunteerModalOpen && (
        <VolunteerModal
          selectedProgram={volunteerTargetProgram}
          onClose={() => {
            setVolunteerModalOpen(false);
            setVolunteerTargetProgram(null);
          }}
        />
      )}

      {linkedInModalOpen && (
        <LinkedInProofModal
          onClose={() => setLinkedInModalOpen(false)}
        />
      )}
    </div>
  );
}
