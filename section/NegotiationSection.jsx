import { useState } from 'react';
import { V } from '../src/tokens.js';
import { SectionTitle, SectionHeading, Card, TblWrap, Th, Td, TrBody, EditInput, EditSelect, FormInput } from '../CSS/components.jsx';

const NegotiationSection = () => {
  const [erF, setErF] = useState('');
  const [erE, setErE] = useState('');
  const erVal = erF && erE && Number(erF) > 0 ? (Number(erE) / Number(erF) * 100).toFixed(2) : null;
  const erColor = erVal ? erVal >= 5 ? V.success : erVal >= 2 ? V.warn : V.danger : V.txt3;
  const erVerdict = erVal ? erVal >= 5 ? '✓ Excellent ER' : erVal >= 2 ? '~ Average ER' : '✕ Low ER — Perlu investigasi' : 'Masukkan angka di atas';

  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <SectionTitle title="06. Negotiation" em="& Rate Card" sub="Panduan Negosiasi, Pricing, dan Commercial Handling Creator — profesional, value-driven, dan menjaga long-term relationship." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24, alignItems: 'start' }}>
        <div>
          <SectionHeading>Market Rate Indonesia — Estimasi 2024–2025</SectionHeading>
          <TblWrap>
            <thead><tr><Th>Tier</Th><Th>TikTok Video</Th><Th>IG Feed/Reels</Th><Th>YouTube Integration</Th><Th>IG Story</Th></tr></thead>
            <tbody>
              {[['Nano (1K–10K)', V.success, 'Rp 300K–1,5M', 'Rp 250K–1M', 'Rp 500K–2M', 'Rp 150K–500K'], ['Micro (10K–100K)', V.info, 'Rp 1,5M–8M', 'Rp 1M–6M', 'Rp 3M–15M', 'Rp 500K–2M'], ['Mid-tier (100K–500K)', V.gold, 'Rp 8M–35M', 'Rp 6M–25M', 'Rp 15M–60M', 'Rp 2M–8M'], ['Macro (500K–1M)', V.warn, 'Rp 35M–100M', 'Rp 25M–80M', 'Rp 60M–200M', 'Rp 8M–25M'], ['Mega (>1M)', V.danger, 'Rp 100M+', 'Rp 80M+', 'Rp 200M+', 'Rp 25M+']].map(([t, c, tk, ig, yt, st], i) => (
                <TrBody key={t} even={i % 2 === 1}><Td><strong style={{ color: c }}>{t}</strong></Td><Td>{tk}</Td><Td>{ig}</Td><Td>{yt}</Td><Td>{st}</Td></TrBody>
              ))}
            </tbody>
          </TblWrap>
          <SectionHeading>Negotiation Strategy</SectionHeading>
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {[{ icon: '📦', t: 'Bundle Deliverables', d: 'Daripada minta discount, minta tambahan deliverables. Rate tetap, dapat +3 IG story support.', bg: V.roseBlush }, { icon: '🤝', t: 'Long-term Deal', d: 'Tawarkan kontrak 3–6 bulan. Creator dapat stable income, brand dapat harga lebih efisien.', bg: V.goldBlush }, { icon: '📋', t: 'Usage Rights Extension', d: 'Jika harga tidak turun, negosiasi usage rights lebih lama (30→90 hari) untuk Spark Ads.', bg: V.mauvePale }, { icon: '📈', t: 'Performance-based', d: 'Base fee + bonus jika target engagement/conversion tercapai. Baik untuk creator baru.', bg: V.roseBlush }].map(s => (
              <div key={s.t} style={{ background: s.bg, border: `1px solid ${V.border}`, borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: V.roseDeep, marginBottom: 5 }}>{s.t}</div>
                <div style={{ fontSize: 12, color: V.txt2, lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
          <SectionHeading>Contoh Real Negosiasi</SectionHeading>
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
            <div style={{ background: V.cardTint, borderLeft: `4px solid ${V.danger}`, borderRadius: '0 10px 10px 0', padding: '18px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, textTransform: 'uppercase', marginBottom: 8 }}>Initial Ask</div>
              <div style={{ fontSize: 13, color: V.txt, marginBottom: 6 }}>1 TikTok Video</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 700, color: V.danger }}>Rp 15.000.000</div>
              <div style={{ fontSize: 11, color: V.txt3, marginTop: 4 }}>Tanpa usage rights · organik only</div>
            </div>
            <div style={{ background: V.cardTint, borderLeft: `4px solid ${V.success}`, borderRadius: '0 10px 10px 0', padding: '18px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, textTransform: 'uppercase', marginBottom: 8 }}>Final Deal</div>
              <div style={{ fontSize: 13, color: V.txt, marginBottom: 6 }}>1 TikTok + 3 IG Story + 30-day usage rights</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 700, color: V.success }}>Rp 16.500.000</div>
              <div style={{ fontSize: 11, color: V.success, marginTop: 4 }}>+Value Rp 5–8M dari deliverables tambahan</div>
            </div>
          </div>
          <SectionHeading>Template Rate Negotiation Sheet</SectionHeading>
          <TblWrap>
            <thead><tr><Th>Deliverables</Th><Th>Requested Rate</Th><Th>Final Deal</Th><Th>Usage Rights</Th><Th>Exclusivity</Th><Th>Notes</Th></tr></thead>
            <tbody>
              {[0, 1, 2].map(i => (
                <TrBody key={i} even={i % 2 === 1}>
                  <Td><EditInput placeholder="e.g. 1 TikTok Video" /></Td>
                  <Td><EditInput placeholder="Rp —" /></Td>
                  <Td><EditInput placeholder="Rp —" /></Td>
                  <Td><EditSelect options={['Organic Only', 'Spark Ads 30 Days', 'Spark Ads 60 Days', 'Full Transfer']} /></Td>
                  <Td><EditSelect options={['Tidak Ada', '1 Bulan', '3 Bulan', '6 Bulan']} /></Td>
                  <Td><EditInput placeholder="Catatan..." /></Td>
                </TrBody>
              ))}
            </tbody>
          </TblWrap>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 20, alignSelf: 'start' }}>
          <Card>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep, marginBottom: 14 }}>⚡ ER Quick Calculator</div>
            <FormInput label="Jumlah Followers" id="er-f" value={erF} onChange={e => setErF(e.target.value)} placeholder="e.g. 85000" type="number" />
            <div style={{ height: 10 }} />
            <FormInput label="Avg Views / Engagements" id="er-e" value={erE} onChange={e => setErE(e.target.value)} placeholder="e.g. 12000" type="number" />
            <div style={{ textAlign: 'center', padding: '16px', background: V.roseBlush, borderRadius: 10, border: `1px solid ${V.rosePale}`, marginTop: 14 }}>
              <div style={{ fontSize: 12, color: V.txt3, marginBottom: 4 }}>Engagement Rate</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, color: erColor }}>{erVal ? erVal + '%' : '—'}</div>
              <div style={{ fontSize: 11, color: erColor, marginTop: 2 }}>{erVerdict}</div>
            </div>
          </Card>
          <Card>
            <div style={{ fontSize: 13, fontWeight: 700, color: V.roseDeep, marginBottom: 12 }}>💳 Payment Terms Umum</div>
            {[['Full Upfront', V.rose, 'Nano–Micro KOL baru'], ['50/50 Split', V.gold, '50% before, 50% setelah posting'], ['Net 14/30 Days', V.mauve, 'Umum untuk management besar'], ['Performance-based', V.success, 'Base + bonus after reporting']].map(([t, c, d]) => (
              <div key={t} style={{ display: 'flex', gap: 10, paddingBottom: 9, borderBottom: `1px solid ${V.border}`, marginBottom: 9 }}>
                <div style={{ width: 3, background: c, borderRadius: 2, flexShrink: 0 }} />
                <div><div style={{ fontSize: 12.5, fontWeight: 600, color: V.txt }}>{t}</div><div style={{ fontSize: 11, color: V.txt3 }}>{d}</div></div>
              </div>
            ))}
          </Card>
          <div style={{ background: V.dangerBg, border: '1px solid #e8c0c0', borderRadius: 12, padding: '18px 20px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: V.danger, marginBottom: 10 }}>🚩 Red Flags Negotiation</div>
            {['Pricing tinggi tanpa data pendukung', 'Engagement rendah tapi rate premium', 'Menolak share performance insight', 'Tidak jelas soal usage rights', 'Sering ubah pricing last minute', 'Menolak contract tertulis sederhana', 'Respons sangat lambat sejak awal'].map(r => (
              <div key={r} style={{ fontSize: 12, color: V.txt, marginBottom: 7 }}>✕ {r}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NegotiationSection;
