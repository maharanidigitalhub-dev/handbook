import { useState, useEffect } from 'react';
import { V, CSS } from './tokens.js';
import { Sidebar } from '@css/components.jsx';
import HomeSection from '@section/HomeSection.jsx';
import FundamentalSection from '@section/FundamentalSection.jsx';
import ScoringSection from '@section/ScoringSection.jsx';
import NegotiationSection from '@section/NegotiationSection.jsx';
import WorkflowSection from '@section/WorkflowSection.jsx';
import BriefingSection from '@section/BriefingSection.jsx';
import CommunicationSection from '@section/CommunicationSection.jsx';
import ToolsSection from '@section/ToolsSection.jsx';
import BrandSection from '@section/BrandSection.jsx';

const SECTIONS = {
  home: HomeSection,
  fundamental: FundamentalSection,
  scoring: ScoringSection,
  negotiation: NegotiationSection,
  workflow: WorkflowSection,
  briefing: BriefingSection,
  communication: CommunicationSection,
  tools: ToolsSection,
  brand: BrandSection,
};

export default function App() {
  const [section, setSection] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActiveSection = SECTIONS[section] || HomeSection;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (id) => {
    setSection(id);
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: V.bg, fontFamily: "'Jost',sans-serif", color: V.txt, overflow: 'hidden', flexDirection: isMobile ? 'column' : 'row' }}>
      <style>{CSS}</style>

      {/* Mobile top bar — tanpa hamburger, title jadi link home */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', background: V.surface, borderBottom: `1px solid ${V.border}`, flexShrink: 0, zIndex: 20 }}>
          <button onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep, padding: 0 }}>
            KOL Handbook
          </button>
        </div>
      )}

      {/* Sidebar desktop only */}
      {!isMobile && (
        <Sidebar section={section} setSection={handleNav} />
      )}

      <main style={{ flex: 1, overflowY: 'auto' }} className="main-area">
        {/* Tombol Back — muncul di semua section kecuali home */}
        {section !== 'home' && isMobile && (
          <button onClick={() => handleNav('home')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '16px 16px 0', background: 'none', border: `1px solid ${V.border}`, borderRadius: 8, padding: '7px 14px', cursor: 'pointer', color: V.rose, fontSize: 13, fontFamily: "'Jost',sans-serif", fontWeight: 500 }}>
            ← Back to Home
          </button>
        )}
        <ActiveSection setSection={handleNav} />
      </main>
    </div>
  );
}
