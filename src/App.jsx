import { useState } from 'react';
import { V, CSS } from './tokens.js';
import { Sidebar } from '../CSS/components.jsx';
import HomeSection from './sections/HomeSection.jsx';
import FundamentalSection from './sections/FundamentalSection.jsx';
import ScoringSection from './sections/ScoringSection.jsx';
import NegotiationSection from './sections/NegotiationSection.jsx';
import WorkflowSection from './sections/WorkflowSection.jsx';
import BriefingSection from './sections/BriefingSection.jsx';
import CommunicationSection from './sections/CommunicationSection.jsx';
import ToolsSection from './sections/ToolsSection.jsx';
import BrandSection from './sections/BrandSection.jsx';

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
