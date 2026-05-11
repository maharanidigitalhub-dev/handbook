import { V } from '../src/tokens.js';
import { Badge, Callout, SectionTitle, SectionHeading, Card, TblWrap, Th, Td, TrBody, EditInput, EditSelect } from '../CSS/components.jsx';

const BrandSection = () => (
  <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
    <SectionTitle title="14. Brand Campaign" em="Development Workflow" sub="Panduan Strategic Thinking & Development Campaign untuk Brand — dari business problem sampai post mortem evaluation." />
    <Callout type="rose">
      <span style={{ fontSize: 18 }}>✦</span>
      <div style={{ fontSize: 13.5, color: V.txt }}><strong>Prinsip:</strong> Campaign yang bagus bukan campaign yang terlihat ramai, tetapi campaign yang mampu <strong>membantu objective bisnis secara measurable dan scalable</strong>. Objective lebih penting daripada gimmick.</div>
    </Callout>
    <SectionHeading>Strategic Development Flow</SectionHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
      {[
        { num: '01', title: 'Business Understanding', color: V.mauve, desc: 'Pahami kondisi bisnis, positioning, target market, dan challenge brand. Termasuk competitor landscape dan audience perception saat ini.', out: 'Business Summary' },
        { num: '02', title: 'Objective Setup', color: V.rose, desc: 'Tentukan tujuan utama campaign secara spesifik: Awareness · Engagement · Consideration · Lead Generation · Conversion · Community Growth', out: 'Campaign Objective & KPI' },
        { num: '03', title: 'Strategy Planning', color: V.gold, desc: 'Tentukan big idea campaign, main communication angle, funnel strategy, creator architecture, CTA, dan amplification strategy.', out: 'Campaign Strategy Deck' },
        { num: '04', title: 'Budget Allocation', color: V.roseSoft, desc: 'Bagi budget sesuai objective. Contoh alokasi: 60% creator fee · 20% paid ads · 10% production · 10% contingency', out: 'Budget Allocation Sheet' },
        { num: '05', title: 'Execution & Launch', color: V.success, desc: 'Sourcing creator → Negotiation → Briefing → Production → Approval → Posting → Monitoring → Optimization', out: 'Live Campaign' },
        { num: '06', title: 'Reporting & Post Mortem', color: V.warn, desc: 'Analisa hasil campaign, KPI achievement, creator terbaik, audience insight, apa yang bisa di-scale, dan lessons learned.', out: 'Final Report + Insight' },
      ].map(s => (
        <div key={s.num} style={{ background: V.card, border: `1.5px solid ${V.border}`, borderLeft: `4px solid ${s.color}`, borderRadius: 12, padding: '20px 22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 200px', gap: 20, alignItems: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: s.color }}>{s.num} · {s.title}</div>
            <div style={{ fontSize: 13, color: V.txt, lineHeight: 1.6 }}>{s.desc}</div>
            <div>
              <Badge cls={s.num === '05' ? 'badge-success' : s.num === '01' ? 'badge-mauve' : s.num === '03' || s.num === '04' ? 'badge-gold' : s.num === '06' ? 'badge-warn' : 'badge-rose'}>Output: {s.out}</Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
      <div>
        <SectionHeading>KPI & Measurement Framework</SectionHeading>
        <TblWrap>
          <thead><tr><Th>Objective</Th><Th>KPI Utama</Th><Th>Tool Ukur</Th></tr></thead>
          <tbody>
            {[['Awareness', 'Reach, Impression, CPM, View', 'Platform Insight, GA4'], ['Engagement', 'ER, Comment, Save, Share, Watch Time', 'Platform Insight'], ['Consideration', 'CTR, Website Visit, Time on Site', 'GA4, UTM Tracking'], ['Lead Generation', 'Lead Cost, Form Fill, CPC', 'Meta Ads, Landing Page'], ['Conversion', 'ROAS, CPO, Revenue, Sales', 'Pixel, Shopee/Tokopedia'], ['Community', 'Follower Growth, Member Join, DM', 'Platform Analytics']].map(([o, k, t], i) => (
              <TrBody key={o} even={i % 2 === 1}><Td>{o}</Td><Td style={{ fontSize: 12 }}>{k}</Td><Td style={{ fontSize: 12, color: V.txt3 }}>{t}</Td></TrBody>
            ))}
          </tbody>
        </TblWrap>
      </div>
      <div>
        <SectionHeading>Example Campaign</SectionHeading>
        <Card rose>
          <div style={{ fontSize: 13, fontWeight: 700, color: V.roseDeep, marginBottom: 12 }}>📱 Case: Skincare Serum Launch</div>
          {[['Platform utama', 'TikTok sebagai main channel'], ['Awareness layer', '3 macro creator untuk reach luas'], ['Conversion layer', '20 micro creator untuk conversion'], ['Amplification', 'Spark Ads dari best-performing content'], ['CTA', 'Promo code diarahkan ke official marketplace']].map(([k, d]) => (
            <div key={k} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 13 }}>
              <strong style={{ color: V.rose, minWidth: 120, flexShrink: 0 }}>{k}:</strong>
              <span style={{ color: V.txt }}>{d}</span>
            </div>
          ))}
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${V.rosePale}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: V.rose, textTransform: 'uppercase', marginBottom: 6 }}>Expected Result</div>
            <div style={{ fontSize: 12.5, color: V.txt2 }}>Reach tinggi dari macro · Conversion lebih efisien dari micro · ROAS terukur per creator</div>
          </div>
        </Card>
      </div>
    </div>
    <SectionHeading>Brand Campaign Development Workflow Template</SectionHeading>
    <TblWrap>
      <thead><tr><Th>Stage</Th><Th>Task</Th><Th>Output</Th><Th>PIC</Th><Th>Status</Th></tr></thead>
      <tbody>
        {[['badge-mauve', 'Planning', 'Business Understanding', 'Business Summary'], ['badge-mauve', 'Planning', 'Audience Mapping', 'Audience Persona'], ['badge-rose', 'Strategy', 'Campaign Strategy', 'Strategy Deck'], ['badge-gold', 'KOL', 'Creator Sourcing', 'KOL Shortlist'], ['badge-gold', 'KOL', 'Negotiation & Lock', 'Confirmed Creator'], ['badge-success', 'Production', 'Content Production', 'Draft Content'], ['badge-success', 'Launch', 'Campaign Launch', 'Live Campaign'], ['badge-warn', 'Report', 'Campaign Evaluation', 'Final Report']].map(([bc, stage, task, out], i) => (
          <TrBody key={task} even={i % 2 === 1}>
            <Td><Badge cls={bc}>{stage}</Badge></Td>
            <Td>{task}</Td>
            <Td style={{ fontSize: 12, color: V.txt3 }}>{out}</Td>
            <Td><EditInput placeholder="PIC" /></Td>
            <Td><EditSelect options={['Belum Mulai', 'On Progress', 'Done']} /></Td>
          </TrBody>
        ))}
      </tbody>
    </TblWrap>
  </div>
);

export default BrandSection;
