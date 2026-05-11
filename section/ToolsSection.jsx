import { V } from '../tokens.js';
import { TOOLS_DATA } from '../data.js';
import { Badge, Callout, SectionTitle, SectionHeading, TblWrap, Th, Td, TrBody, Stars } from '../components.jsx';

const ToolsSection = () => (
  <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
    <SectionTitle title="13. Suggested" em="Tools" sub="Panduan Tools Operasional, Analytics, Workflow, dan Productivity untuk KOL Specialist & Campaign Specialist." />
    <Callout type="gold">
      <span style={{ fontSize: 18 }}>💡</span>
      <div style={{ fontSize: 13.5, color: V.txt }}><strong>Prinsip:</strong> Tools yang bagus tidak akan memperbaiki workflow yang buruk. Kuasai dulu prosesnya — baru tools menjadi multiplier-nya. Hindari terlalu banyak tools yang overlap fungsinya.</div>
    </Callout>
    {TOOLS_DATA.map(cat => (
      <div key={cat.cat} style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 4, height: 22, background: cat.color, borderRadius: 2 }} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 700, color: cat.color }}>{cat.cat}</div>
        </div>
        <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {cat.items.map(tool => (
            <div key={tool.name} style={{ background: V.card, border: `1px solid ${V.border}`, borderRadius: 10, padding: '16px 18px', boxShadow: '0 2px 16px rgba(90,20,40,0.07)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: V.txt, marginBottom: 4 }}>{tool.name}</div>
              <Badge cls={tool.tierClass} style={{ marginBottom: 8 }}>{tool.tier}</Badge>
              <div style={{ fontSize: 12, color: V.txt3, lineHeight: 1.5, marginBottom: 10 }}>{tool.desc}</div>
              <Stars n={tool.stars} color={cat.color} />
            </div>
          ))}
        </div>
      </div>
    ))}
    <SectionHeading>Recommended Basic Tools Stack</SectionHeading>
    <TblWrap>
      <thead><tr><Th>Category</Th><Th>Recommended Tool</Th><Th>Function</Th><Th>Priority</Th><Th>Cost</Th></tr></thead>
      <tbody>
        {[['Project Management', 'Notion / ClickUp', 'Workflow tracker, documentation, database creator', 'badge-danger', 'Free – Rp 150K/mo'], ['KOL Analytics', 'Modash / HypeAuditor', 'KOL vetting, fake detection, audience analysis', 'badge-danger', 'Rp 500K–2M/mo'], ['Reporting', 'Google Sheets + Looker Studio', 'Dashboard KPI, reporting visual, database', 'badge-danger', 'Gratis'], ['Communication', 'Slack / WhatsApp Business', 'Internal communication, client update', 'badge-danger', 'Free – Rp 100K/mo'], ['Creative', 'Canva / CapCut', 'Deck presentasi, creative support, editing', 'badge-warn', 'Free – Rp 160K/mo'], ['AI Tools', 'Claude / ChatGPT', 'Research, brief drafting, productivity', 'badge-danger', 'Free – Rp 280K/mo'], ['Paid Media', 'Meta Ads + TikTok Ads Manager', 'Content boosting, Spark Ads, campaign scaling', 'badge-warn', 'Sesuai budget ads']].map(([cat, tool, fn, pri, cost], i) => (
          <TrBody key={cat} even={i % 2 === 1}>
            <Td>{cat}</Td>
            <Td><strong>{tool}</strong></Td>
            <Td style={{ fontSize: 12, color: V.txt3 }}>{fn}</Td>
            <Td><Badge cls={pri}>{pri.includes('danger') ? 'High' : 'Med'}</Badge></Td>
            <Td style={{ fontSize: 12 }}>{cost}</Td>
          </TrBody>
        ))}
      </tbody>
    </TblWrap>
  </div>
);

export default ToolsSection;
