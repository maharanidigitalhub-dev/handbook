import { useState } from 'react';
import { V } from '../src/tokens.js';
import { Callout, SectionTitle, SectionHeading, TblWrap, Th, Td, TrBody, EditInput, EditSelect } from '../CSS/components.jsx';

const WorkflowSection = () => {
  const [done, setDone] = useState({});
  const steps = [
    { week: 'Week 1', label: 'Planning', color: V.mauve, items: [{ t: 'Business Understanding', pic: 'Strategy Lead', out: 'Business Summary' }, { t: 'Objective & KPI Setup', pic: 'Campaign Lead', out: 'Campaign Brief' }, { t: 'Audience Research', pic: 'Strategist', out: 'Audience Persona' }, { t: 'KOL Sourcing & Vetting', pic: 'KOL Specialist', out: 'KOL Shortlist' }] },
    { week: 'Week 2', label: 'Execution Setup', color: V.gold, items: [{ t: 'Internal Approval KOL', pic: 'Campaign Lead', out: 'Approved KOL List' }, { t: 'Outreach & Negotiation', pic: 'KOL Specialist', out: 'Confirmed Creator' }, { t: 'Briefing Creator', pic: 'KOL Specialist', out: 'Approved Brief' }, { t: 'Content Production', pic: 'Creator', out: 'Draft Content' }] },
    { week: 'Week 3', label: 'Launch', color: V.rose, items: [{ t: 'Content Review & Revisi', pic: 'Creative Lead', out: 'Approved Content' }, { t: 'Client Final Approval', pic: 'Account Team', out: 'Go-Live Clearance' }, { t: 'Posting Live', pic: 'KOL Specialist', out: 'Live Links' }, { t: 'Real-time Monitoring', pic: 'Campaign Team', out: 'Daily Report' }] },
    { week: 'Week 4', label: 'Optimize & Report', color: V.goldSoft, items: [{ t: 'Performance Optimization', pic: 'Campaign Lead', out: 'Optimization Action' }, { t: 'Boosting Best Content', pic: 'Paid Media', out: 'Amplified Campaign' }, { t: 'Final Reporting', pic: 'Campaign Lead', out: 'Campaign Report' }, { t: 'Post Mortem Evaluation', pic: 'Full Team', out: 'Insight & Learning' }] },
  ];
  const total = 16;
  const doneCount = Object.values(done).filter(Boolean).length;
  const toggle = id => setDone(d => ({ ...d, [id]: !d[id] }));
  const reset = () => setDone({});

  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <SectionTitle title="07. Campaign" em="Workflow" sub="Panduan Workflow Operasional Campaign KOL & Marketing — SOP 4-week yang bisa langsung dijalankan." />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: V.txt3 }}>Progress:</div>
        <div style={{ flex: 1, height: 6, background: V.border, borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${(doneCount / total) * 100}%`, height: '100%', background: `linear-gradient(90deg,${V.rose},${V.gold})`, borderRadius: 3, transition: 'width 0.35s ease' }} />
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: V.rose, minWidth: 80 }}>{doneCount}/{total} selesai</div>
        <button className="btn-outline" onClick={reset} style={{ padding: '7px 14px', borderRadius: 7, border: `1.5px solid ${V.borderMid}`, background: 'transparent', color: V.txt3, fontFamily: "'Jost'", fontSize: 12, cursor: 'pointer' }}>Reset</button>
      </div>
      <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 28 }}>
        {steps.map(w => (
          <div key={w.week}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingBottom: 10, borderBottom: `2px solid ${w.color}` }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: w.color, boxShadow: `0 0 6px ${w.color}` }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: w.color }}>{w.week}</div>
                <div style={{ fontSize: 10.5, color: V.txt3 }}>{w.label}</div>
              </div>
            </div>
            {w.items.map((s, si) => {
              const id = `${w.week}-${si}`;
              const isDone = !!done[id];
              return (
                <button key={id} onClick={() => toggle(id)} className="wf-step"
                  style={{ background: isDone ? V.successBg : V.card, border: `1px solid ${isDone ? V.success : V.border}`, borderRadius: 10, padding: '13px 14px', cursor: 'pointer', textAlign: 'left', width: '100%', marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1, border: `2.5px solid ${isDone ? V.success : V.borderMid}`, background: isDone ? V.success : V.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: isDone ? '#fff' : 'transparent', transition: 'all 0.18s' }}>✓</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: isDone ? V.success : V.txt, lineHeight: 1.3 }}>{s.t}</div>
                    <div style={{ fontSize: 11, color: V.txt3, marginTop: 3 }}>PIC: {s.pic}</div>
                    <div style={{ fontSize: 11, color: w.color, marginTop: 2 }}>→ {s.out}</div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <SectionHeading>Campaign Workflow Template</SectionHeading>
      <TblWrap>
        <thead><tr><Th>#</Th><Th>Task</Th><Th>PIC</Th><Th>Deadline</Th><Th>Status</Th></tr></thead>
        <tbody>
          {['Campaign Brief', 'Audience Research', 'KOL Sourcing', 'Internal Approval', 'Outreach & Negotiation', 'Briefing Creator', 'Content Production', 'Review & Revision', 'Posting Live', 'Monitoring & Reporting'].map((t, i) => (
            <TrBody key={t} even={i % 2 === 1}><Td>{i + 1}</Td><Td>{t}</Td><Td><EditInput placeholder="PIC" /></Td><Td><EditInput type="date" /></Td><Td><EditSelect /></Td></TrBody>
          ))}
        </tbody>
      </TblWrap>
      <Callout type="warn">
        <span style={{ fontSize: 18 }}>⚡</span>
        <div style={{ fontSize: 13.5, color: V.txt }}><strong>Escalation System:</strong> Issue yang wajib di-escalate — Creator Controversy · Major Delay · Content Rejection · Budget Overrun · Client Issue · Legal Issue. Escalation bukan mencari siapa yang salah, tapi <strong>mempercepat solusi</strong>.</div>
      </Callout>
    </div>
  );
};

export default WorkflowSection;
