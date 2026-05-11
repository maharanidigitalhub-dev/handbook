import { useState } from 'react';
import { V } from '../tokens.js';
import { Callout, SectionTitle, SectionHeading, TblWrap, Th, Td, TrBody, EditInput, FormInput, FormSelect, FormTextarea } from '../components.jsx';

const BriefingSection = () => {
  const init = { name: '', objective: 'Awareness', platform: 'TikTok', deliverables: '', gender: 'Perempuan', age: '', interest: '', message: '', cta: '', mandatory: '', dos: '', donts: '', draft: '', posting: '', pic: '', contact: '' };
  const [f, setF] = useState(init);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const up = (k, v) => setF(p => ({ ...p, [k]: v }));
  const fmt = k => f[k] || '—';

  const briefText = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTENT BRIEF — ${fmt('name')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CAMPAIGN OBJECTIVE
${fmt('objective')}

👥 TARGET AUDIENCE
• Gender   : ${fmt('gender')}
• Usia     : ${fmt('age')}
• Interest : ${fmt('interest')}

📱 PLATFORM
${fmt('platform')}

📦 DELIVERABLES
${fmt('deliverables')}

💬 KEY MESSAGE
${fmt('message')}

📣 CALL TO ACTION (CTA)
${fmt('cta')}

⚠️ MANDATORY MENTION
${fmt('mandatory')}

✅ DO
${fmt('dos')}

❌ DON'T
${fmt('donts')}

📅 TIMELINE
• Draft Deadline : ${fmt('draft')}
• Posting Date   : ${fmt('posting')}

👤 APPROVAL & CONTACT
• Approval PIC   : ${fmt('pic')}
• Contact Person : ${fmt('contact')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Catatan: Brief ini bersifat directional.
Creator tetap diberikan creative freedom
selama tidak melanggar mandatory mention
dan don'ts yang tertera di atas.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

  const copyBrief = () => {
    navigator.clipboard.writeText(briefText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <SectionTitle title="08. Content" em="Briefing" sub="Panduan Membuat Brief Creator yang Efektif & Performance-Driven — brief yang mengarahkan tanpa membunuh kreativitas." />
      <Callout type="gold">
        <span style={{ fontSize: 18 }}>✦</span>
        <div style={{ fontSize: 13.5, color: V.txt }}><strong>Prinsip:</strong> Brief yang baik tidak membunuh kreativitas creator. Tujuan utama adalah <strong>menyelaraskan objective brand dengan gaya komunikasi creator</strong> agar konten tetap authentic namun mencapai target campaign.</div>
      </Callout>
      <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: V.roseBlush, border: `1px solid ${V.rosePale}`, borderRadius: 12, padding: '20px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: V.roseDeep, marginBottom: 14 }}>📋 Campaign Info</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FormInput label="Campaign Name *" id="b-name" value={f.name} onChange={e => up('name', e.target.value)} placeholder="e.g. Glow Confidence Serum Campaign" />
              <FormSelect label="Objective *" id="b-obj" value={f.objective} onChange={e => up('objective', e.target.value)} options={['Awareness', 'Consideration', 'Conversion / Sales', 'Community Growth', 'Lead Generation']} />
              <FormSelect label="Platform *" id="b-plat" value={f.platform} onChange={e => up('platform', e.target.value)} options={['TikTok', 'Instagram', 'YouTube', 'TikTok + Instagram', 'Multi-Platform']} />
              <FormInput label="Deliverables *" id="b-del" value={f.deliverables} onChange={e => up('deliverables', e.target.value)} placeholder="e.g. 1 TikTok Video + 3 IG Story" />
            </div>
          </div>
          <div style={{ background: V.mauvePale, border: `1px solid ${V.mauveSoft}`, borderRadius: 12, padding: '20px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: V.roseDeep, marginBottom: 14 }}>👥 Target Audience</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
              <FormSelect label="Gender" id="b-gen" value={f.gender} onChange={e => up('gender', e.target.value)} options={['Perempuan', 'Laki-laki', 'All Gender']} />
              <FormInput label="Usia" id="b-age" value={f.age} onChange={e => up('age', e.target.value)} placeholder="e.g. 18–28" />
            </div>
            <FormInput label="Interest / Pain Point" id="b-int" value={f.interest} onChange={e => up('interest', e.target.value)} placeholder="e.g. Concern kulit kusam, aktif TikTok" />
          </div>
          <div style={{ background: V.goldBlush, border: `1px solid ${V.goldPale}`, borderRadius: 12, padding: '20px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: V.roseDeep, marginBottom: 14 }}>💬 Content Direction</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FormTextarea label="Key Message *" id="b-msg" value={f.message} onChange={e => up('message', e.target.value)} placeholder="Pesan utama yang HARUS diterima audience..." />
              <FormInput label="CTA (Call to Action) *" id="b-cta" value={f.cta} onChange={e => up('cta', e.target.value)} placeholder="e.g. Gunakan promo code GLOW10 di marketplace resmi" />
              <FormTextarea label="Mandatory Mention" id="b-man" value={f.mandatory} onChange={e => up('mandatory', e.target.value)} placeholder="e.g. Hero ingredients, periode promo, tag official account" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <FormTextarea label="DO ✓" id="b-do" value={f.dos} onChange={e => up('dos', e.target.value)} placeholder="e.g. Gunakan storytelling personal" />
                <FormTextarea label="DON'T ✕" id="b-dont" value={f.donts} onChange={e => up('donts', e.target.value)} placeholder="e.g. Hard selling berlebihan" />
              </div>
            </div>
          </div>
          <div style={{ background: V.card, border: `1px solid ${V.border}`, borderRadius: 12, padding: '20px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: V.roseDeep, marginBottom: 14 }}>📅 Timeline & Contact</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <FormInput label="Draft Deadline" id="b-draft" value={f.draft} onChange={e => up('draft', e.target.value)} type="date" />
              <FormInput label="Posting Date" id="b-post" value={f.posting} onChange={e => up('posting', e.target.value)} type="date" />
              <FormInput label="Approval PIC" id="b-pic" value={f.pic} onChange={e => up('pic', e.target.value)} placeholder="e.g. Ika — Marketing Lead" />
              <FormInput label="Contact Person" id="b-contact" value={f.contact} onChange={e => up('contact', e.target.value)} placeholder="e.g. WA: +62..." />
            </div>
          </div>
          <button onClick={() => setGenerated(true)} className="btn-rose" style={{ background: `linear-gradient(135deg,${V.rose},#A03060)`, border: 'none', borderRadius: 9, padding: '13px 20px', fontFamily: "'Jost'", fontWeight: 600, fontSize: 15, color: '#fff', cursor: 'pointer', width: '100%', letterSpacing: '0.01em' }}>✦ Generate Content Brief</button>
        </div>
        <div style={{ position: 'sticky', top: 20, alignSelf: 'start' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep }}>Preview Brief</div>
            {generated && <button onClick={copyBrief} style={{ padding: '5px 12px', borderRadius: 6, border: `1.5px solid ${copied ? V.success : V.borderMid}`, background: copied ? V.successBg : 'transparent', color: copied ? V.success : V.txt3, fontFamily: "'Jost'", fontSize: 12, cursor: 'pointer' }}>{copied ? '✓ Copied!' : '📋 Copy Brief'}</button>}
          </div>
          <div style={{ background: V.cardTint, border: `1.5px solid ${generated ? V.borderMid : V.border}`, borderRadius: 12, padding: '22px', fontFamily: "'Jost'", fontSize: 13, lineHeight: 1.9, color: V.txt, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 580, overflowY: 'auto' }}>
            {!generated
              ? <div style={{ textAlign: 'center', padding: '60px 20px', color: V.txtMuted }}><div style={{ fontSize: 40, marginBottom: 12, opacity: 0.4 }}>✦</div><div style={{ fontSize: 14 }}>Isi form di kiri, lalu klik<br /><strong>Generate Content Brief</strong></div></div>
              : briefText}
          </div>
        </div>
      </div>
      <SectionHeading>Template Content Brief (Printable)</SectionHeading>
      <TblWrap>
        <thead><tr><Th>Section</Th><Th>Details</Th></tr></thead>
        <tbody>
          {["Campaign Name", "Campaign Objective", "Target Audience", "Platform", "Deliverables", "Key Message", "CTA", "Mandatory Mention", "DO", "DON'T", "Draft Deadline", "Posting Date", "Approval PIC", "Contact Person"].map((s, i) => (
            <TrBody key={s} even={i % 2 === 1}><Td><strong>{s}</strong></Td><Td><EditInput placeholder={`${s}...`} /></Td></TrBody>
          ))}
        </tbody>
      </TblWrap>
    </div>
  );
};

export default BriefingSection;
