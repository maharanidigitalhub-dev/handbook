import { useState } from 'react';
import { V } from '../tokens.js';
import { SCORING_DIMS } from '../data.js';
import { Badge, Callout, SectionTitle, SectionHeading, Card, TblWrap, Th, Td, TrBody, EditInput } from '../components.jsx';

const ScoringSection = () => {
  const [scores, setScores] = useState({ audienceFit: 7, engagementQuality: 7, contentQuality: 8, brandFit: 8, professionalism: 6, costEfficiency: 7 });
  const [checks, setChecks] = useState({});
  const total = SCORING_DIMS.reduce((a, d) => a + (scores[d.key] * d.weight / 100), 0);
  const checksDone = Object.values(checks).filter(Boolean).length;
  const verdict = total >= 8.5
    ? { label: '✓✓ Sangat Direkomendasikan', detail: 'Creator sangat sesuai. Proceed dengan confidence.', type: 'success' }
    : total >= 7
    ? { label: '✓ Direkomendasikan', detail: 'Creator layak. Minor risiko perlu diperhatikan.', type: 'info' }
    : total >= 5.5
    ? { label: '~ Pertimbangkan Ulang', detail: 'Ada gap signifikan. Diskusi internal sebelum proceed.', type: 'warn' }
    : { label: '✕ Tidak Direkomendasikan', detail: 'Terlalu banyak red flag. Cari alternatif creator.', type: 'danger' };
  const vCol = verdict.type === 'success' ? V.success : verdict.type === 'info' ? V.info : verdict.type === 'warn' ? V.warn : V.danger;
  const vBg = verdict.type === 'success' ? V.successBg : verdict.type === 'info' ? V.infoBg : verdict.type === 'warn' ? V.warnBg : V.dangerBg;
  const checkList = [['Audience sesuai target market', 'danger'], ['Engagement relevan & natural', 'danger'], ['Tidak ada indikasi fake followers', 'danger'], ['Content style sesuai brand', 'danger'], ['Rate masih sesuai budget', 'danger'], ['Content quality stabil', 'danger'], ['Tidak ada controversy besar', 'warn'], ['Responsif saat komunikasi', 'warn'], ['Pernah handle brand collab', 'warn'], ['Posting consistency baik', 'warn']];

  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <SectionTitle title="05. KOL Scoring" em="& Vetting" sub="Panduan Evaluasi & Seleksi Creator untuk Campaign — evaluasi creator secara objektif, terstandarisasi, dan terukur." />
      <div className="score-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        <div>
          <SectionHeading>Framework Evaluasi KOL — Kalkulator Interaktif</SectionHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SCORING_DIMS.map(d => {
              const pct = ((scores[d.key] - 1) / 9 * 100).toFixed(1);
              return (
                <Card key={d.key}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: V.roseDeep }}>{d.label}</span>
                      <Badge cls={d.key === 'audienceFit' ? 'badge-rose' : d.key === 'engagementQuality' ? 'badge-mauve' : d.key === 'contentQuality' ? 'badge-gold' : d.key === 'brandFit' ? 'badge-success' : d.key === 'professionalism' ? 'badge-warn' : 'badge-danger'} style={{ marginLeft: 8 }}>Bobot {d.weight}%</Badge>
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 700, color: d.color }}>{scores[d.key]}<span style={{ fontSize: 14, color: V.txt3 }}>/10</span></div>
                  </div>
                  <p style={{ fontSize: 12, color: V.txt3, marginBottom: 12, lineHeight: 1.55 }}>{d.desc}</p>
                  <input type="range" min="1" max="10" value={scores[d.key]} onChange={e => setScores(s => ({ ...s, [d.key]: Number(e.target.value) }))}
                    style={{ background: `linear-gradient(to right,${d.color} ${pct}%,${V.border} ${pct}%)` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ fontSize: 10, color: V.txtMuted }}>1 – Sangat Buruk</span>
                    <span style={{ fontSize: 10, color: V.txtMuted }}>10 – Sempurna</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 20, alignSelf: 'start' }}>
          <div style={{ background: V.card, border: `2px solid ${vCol}40`, borderRadius: 14, padding: '24px 20px', textAlign: 'center', boxShadow: '0 2px 16px rgba(90,20,40,0.07)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Final Score</div>
            <div style={{ width: 110, height: 110, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `4px solid ${V.rosePale}`, background: V.surface, boxShadow: `0 0 0 8px ${V.roseBlush}`, margin: '0 auto 16px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, color: vCol, lineHeight: 1 }}>{total.toFixed(1)}</div>
              <div style={{ fontSize: 11, color: V.txt3 }}>dari 10</div>
            </div>
            <div style={{ background: vBg, border: `1px solid ${vCol}40`, borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: vCol }}>{verdict.label}</div>
              <div style={{ fontSize: 11.5, color: V.txt3, marginTop: 4 }}>{verdict.detail}</div>
            </div>
          </div>
          <Card>
            <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Breakdown Weighted</div>
            {SCORING_DIMS.map(d => (
              <div key={d.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: `1px solid ${V.border}`, fontSize: 12.5 }}>
                <span style={{ color: V.txt2 }}>{d.label}</span>
                <span style={{ color: d.color, fontWeight: 600 }}>{scores[d.key]} × {d.weight}% = <strong>{(scores[d.key] * d.weight / 100).toFixed(2)}</strong></span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${V.border}`, paddingTop: 10, marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: V.txt }}>Total</span>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: vCol }}>{total.toFixed(2)}</span>
            </div>
          </Card>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Vetting Checklist</div>
              <Badge cls={checksDone === 10 ? 'badge-success' : 'badge-rose'}>{checksDone}/10</Badge>
            </div>
            {checkList.map(([lbl, pri], idx) => (
              <label key={lbl} className="check-item"
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 9, cursor: 'pointer', border: `1px solid ${checks[idx] ? V.success : V.border}`, background: checks[idx] ? V.successBg : V.card, marginBottom: 5, fontSize: 13 }}>
                <input type="checkbox" checked={!!checks[idx]} onChange={e => setChecks(c => ({ ...c, [idx]: e.target.checked }))} style={{ accentColor: V.rose, width: 15, height: 15, cursor: 'pointer' }} />
                <span style={{ flex: 1, color: checks[idx] ? V.success : V.txt, textDecoration: checks[idx] ? 'line-through' : 'none' }}>{lbl}</span>
                <Badge cls={`badge-${pri}`} style={{ fontSize: 9 }}>{pri === 'danger' ? 'High' : 'Med'}</Badge>
              </label>
            ))}
          </Card>
        </div>
      </div>
      <SectionHeading>Template Scoring & Vetting KOL</SectionHeading>
      <TblWrap>
        <thead><tr><Th>Kategori Penilaian</Th><Th>Bobot</Th><Th>Score (1–10)</Th><Th>Weighted Score</Th><Th>Catatan</Th></tr></thead>
        <tbody>
          {[['Audience Fit', '30%'], ['Engagement Quality', '20%'], ['Content Quality', '15%'], ['Brand Fit', '15%'], ['Professionalism', '10%'], ['Cost Efficiency', '10%']].map(([cat, w], i) => (
            <TrBody key={cat} even={i % 2 === 1}><Td><strong>{cat}</strong></Td><Td>{w}</Td><Td><EditInput type="number" placeholder="—" /></Td><Td><EditInput placeholder="—" /></Td><Td><EditInput placeholder="Tulis catatan..." /></Td></TrBody>
          ))}
          <TrBody even><Td><strong>TOTAL SCORE</strong></Td><Td><strong>100%</strong></Td><Td colSpan={2}><EditInput placeholder="Final Score" /></Td><Td><EditInput placeholder="Rekomendasi akhir" /></Td></TrBody>
        </tbody>
      </TblWrap>
      <Callout type="danger">
        <span style={{ fontSize: 18 }}>🚩</span>
        <div style={{ fontSize: 13.5, color: V.txt }}><strong>Red Flag Creator — Hindari jika:</strong> Sering terlambat posting · Sulit dihubungi · Audience fake terdeteksi · Terlalu banyak endorsement dalam waktu singkat · Kontroversi berulang · Tidak mengikuti brief yang sudah disetujui</div>
      </Callout>
    </div>
  );
};

export default ScoringSection;
