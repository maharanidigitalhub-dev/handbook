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

      {/* Mobile top bar */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: V.surface, borderBottom: `1px solid ${V.border}`, flexShrink: 0, zIndex: 20 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: V.rose, padding: 4 }}>
            ☰
          </button>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep }}>KOL Handbook</div>
        </div>
      )}

      {/* Sidebar — desktop selalu tampil, mobile overlay */}
      {(!isMobile || sidebarOpen) && (
        <div style={isMobile ? {
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 30,
          display: 'flex', flexDirection: 'row'
        } : {}}>
          {isMobile && (
            <div onClick={() => setSidebarOpen(false)}
              style={{ flex: 1, background: 'rgba(0,0,0,0.4)' }} />
          )}
          <Sidebar section={section} setSection={handleNav} />
        </div>
      )}

      <main style={{ flex: 1, overflowY: 'auto' }} className="main-area">
        <ActiveSection setSection={handleNav} />
      </main>
    </div>
  );
}
