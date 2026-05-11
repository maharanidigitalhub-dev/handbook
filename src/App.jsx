import { useState } from 'react';
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
  const ActiveSection = SECTIONS[section] || HomeSection;
  return (
    <div style={{ display: 'flex', height: '100vh', background: V.bg, fontFamily: "'Jost',sans-serif", color: V.txt, overflow: 'hidden' }}>
      <style>{CSS}</style>
      <Sidebar section={section} setSection={setSection} />
      <main style={{ flex: 1, overflowY: 'auto' }} className="main-area">
        <ActiveSection setSection={setSection} />
      </main>
    </div>
  );
}
