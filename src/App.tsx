import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DashboardPreview } from './components/DashboardPreview';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { HowItWorks } from './components/HowItWorks';
import { RoiCalculator } from './components/RoiCalculator';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { CommandCenter } from './components/CommandCenter';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'marketing' | 'command_center'>('marketing');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />

      {/* View Switch Logic */}
      {currentView === 'marketing' ? (
        <main>
          {/* Hero Section */}
          <Hero
            onSeeAiInAction={() => handleScrollToSection('live-analytics')}
            onRequestQuote={() => setIsDemoModalOpen(true)}
            onLaunchDashboard={() => setCurrentView('command_center')}
          />

          {/* Interactive Live Traffic Dashboard Preview (Core Feature) */}
          <DashboardPreview
            onLaunchFullCommand={() => setCurrentView('command_center')}
          />

          {/* Core Capabilities */}
          <CapabilitiesGrid />

          {/* How It Works (3-Step Pipeline) */}
          <HowItWorks />

          {/* Interactive ROI & Congestion Calculator */}
          <RoiCalculator />

          {/* Architecture & Hardware Integration */}
          <ArchitectureDiagram />

          {/* Municipal Case Studies */}
          <CaseStudies />

          {/* Pricing & Deployment Tiers */}
          <Pricing
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />

          {/* Footer */}
          <Footer />
        </main>
      ) : (
        /* Full Command Center Mode */
        <CommandCenter
          onBackToWebsite={() => setCurrentView('marketing')}
        />
      )}

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

    </div>
  );
}
