import { useState } from 'react';
import { V } from '../src/tokens.js';
import { TIERS, PLATFORMS } from '../CSS/data.js';
import { Badge, Callout, SectionTitle, SectionHeading, Card, TblWrap, Th, Td, TrBody } from '../CSS/components.jsx';

const FundamentalSection = () => {
  const [tab, setTab] = useState('definisi');
  const tabs = [['definisi', 'Definisi & Tier'], ['platform', 'Platform'], ['funnel', 'Funnel & Peran KOL'], ['realfake', 'Real vs Fake'], ['bestpractice', 'Best Practice']];
  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <SectionTitle title="02. KOL" em="Fundamental" sub="Handbook Dasar untuk KOL Specialist & Campaign Team — fondasi yang wajib dikuasai sebelum campaign apapun dimulai." />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 22 }}>
        {tabs.map(([id, lbl]) => (
          <button key={id} onClick={() => setTab(id)} className="tab-btn"
            style={{ padding: '7px 16px', borderRadius: 8, border: `1.5px solid ${tab === id ? V.rose : V.border}`, background: tab === id ? V.rose : 'transparent', color: tab === id ? '#fff' : V.txt3, fontFamily: "'Jost'", fontSize: 13, fontWeight: tab === id ? 600 : 500, cursor: 'pointer' }}>
            {lbl}
          </button>
        ))}
      </div>

      {tab === 'definisi' && (
        <div>
          <SectionHeading>Perbedaan KOL, Influencer, Creator & Affiliate</SectionHeading>
          <TblWrap>
            <thead><tr><Th>Tipe</Th><Th>Karakteristik Utama</Th><Th>Fokus</Th></tr></thead>
            <tbody>
              {[['KOL', 'badge-rose', 'Memiliki trust & authority pada niche tertentu', 'Trust & niche influence'], ['Influencer', 'badge-mauve', 'Kemampuan mempengaruhi audience, sering fokus pada reach', 'Reach & visibility'], ['Creator', 'badge-gold', 'Fokus membuat konten, belum tentu memiliki influence kuat', 'Content production'], ['Affiliate', 'badge-info', 'Fokus menghasilkan penjualan melalui link/code', 'Conversion & commission']].map(([t, bc, d, f], i) => (
                <TrBody key={t} even={i % 2 === 1}><Td><Badge cls={bc}>{t}</Badge></Td><Td>{d}</Td><Td>{f}</Td></TrBody>
              ))}
            </tbody>
          </TblWrap>
          <SectionHeading>KOL Tier — Followers, Rate & Kekuatan</SectionHeading>
          <TblWrap>
            <thead><tr><Th>Tier</Th><Th>Followers</Th><Th>Avg Rate / TikTok Video</Th><Th>Avg ER</Th><Th>Conv. Power</Th><Th>Trust Level</Th><Th>Best For</Th></tr></thead>
            <tbody>
              {TIERS.map((t, i) => (
                <TrBody key={t.name} even={i % 2 === 1}>
                  <Td><strong style={{ color: t.color }}>{t.name}</strong></Td>
                  <Td>{t.range}</Td><Td>{t.rate}</Td><Td>{t.er}</Td>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 60, height: 5, background: V.border, borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${t.conv}%`, height: '100%', background: t.color }} />
                      </div>
                      <span style={{ fontSize: 11, color: t.color, fontWeight: 700 }}>{t.conv}%</span>
                    </div>
                  </Td>
                  <Td><Badge cls={t.trustClass}>{t.trust}</Badge></Td>
                  <Td style={{ fontSize: 12, color: V.txt3 }}>{t.best}</Td>
                </TrBody>
              ))}
            </tbody>
          </TblWrap>
          <Callout type="rose">
            <span style={{ fontSize: 18 }}>💡</span>
            <div style={{ fontSize: 13.5, lineHeight: 1.65, color: V.txt }}>
              <strong style={{ color: V.roseDeep }}>Insight Penting:</strong> Follower besar tidak selalu lebih efektif. Micro KOL sering menghasilkan conversion lebih tinggi karena trust lebih kuat dengan audiencenya. Selalu prioritaskan <strong>trust dibanding reach semata</strong>.
            </div>
          </Callout>
          <SectionHeading>Kriteria Seseorang Bisa Disebut KOL</SectionHeading>
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {['Audience yang aktif & loyal', 'Engagement yang sehat & relevan', 'Niche yang jelas & konsisten', 'Trust & credibility terbukti', 'Konten konsisten & berkualitas', 'Pengaruh nyata terhadap keputusan audience'].map(c => (
              <div key={c} style={{ background: V.roseBlush, border: `1px solid ${V.rosePale}`, borderRadius: 12, padding: '14px 18px', fontSize: 13, color: V.txt }}>✅ {c}</div>
            ))}
          </div>
        </div>
      )}

      {tab === 'platform' && (
        <div>
          <SectionHeading>Platform-Based KOL di Indonesia</SectionHeading>
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {PLATFORMS.map(p => (
              <div key={p.name} style={{ background: V.card, border: `1px solid ${V.border}`, borderRadius: 12, padding: '18px 20px', boxShadow: '0 2px 16px rgba(90,20,40,0.07)' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{p.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: V.roseDeep }}>{p.name}</div>
                <div style={{ fontSize: 11, color: V.txt3, marginBottom: 12 }}>{p.type}</div>
                {[['Funnel', p.funnel], ['Format', p.format], ['Avg ER', p.er], ['Strength', p.strength]].map(([k, val]) => (
                  <div key={k} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 7 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: V.rose, minWidth: 54, paddingTop: 1 }}>{k}</span>
                    <span style={{ fontSize: 12, color: V.txt2, lineHeight: 1.45 }}>{val}</span>
                  </div>
                ))}
                <Badge cls={p.tagClass} style={{ marginTop: 8 }}>{p.tag}</Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'funnel' && (
        <div>
          <Callout type="warn">
            <span style={{ fontSize: 18 }}>⚠️</span>
            <div style={{ fontSize: 13.5, lineHeight: 1.65, color: V.txt }}>
              <strong>Kesalahan Umum:</strong> Menggunakan mega influencer untuk conversion tanpa support funnel lain. Awareness alone tidak convert. Selalu build funnel yang lengkap.
            </div>
          </Callout>
          {[
            { stage: 'TOFU', full: 'Top of Funnel', label: 'Awareness', labelCls: 'badge-rose', bg: V.roseBlush, border: V.rosePale, color: V.rose, creators: ['Mega Influencer', 'Macro KOL', 'Trending Creator'], kpi: 'Reach, Impression, CPM, View', example: 'Celebrity collab untuk launch produk skincare baru secara nasional' },
            { stage: 'MOFU', full: 'Middle of Funnel', label: 'Consideration', labelCls: 'badge-gold', bg: V.goldBlush, border: V.goldPale, color: V.gold, creators: ['Mid-tier KOL', 'Micro KOL', 'Review Creator'], kpi: 'Engagement, Watch Time, Saves, CTR', example: 'Beauty reviewer 50K followers untuk deep-dive review serum brightening' },
            { stage: 'BOFU', full: 'Bottom of Funnel', label: 'Conversion', labelCls: 'badge-success', bg: V.successBg, border: '#b8d8c8', color: V.success, creators: ['Micro KOL', 'Nano KOL', 'Affiliate Creator'], kpi: 'Conversion Rate, ROAS, CPO, Sales', example: 'Nano creator niche skincare dengan promo code eksklusif di story' },
          ].map(f => (
            <div key={f.stage} style={{ background: f.bg, border: `1.5px solid ${f.border}`, borderRadius: 12, padding: '20px 22px', marginBottom: 14 }}>
              <div className="funnel-grid" style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr 1fr', gap: 20, alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 700, color: f.color }}>{f.stage}</div>
                  <div style={{ fontSize: 10, color: V.txt3 }}>{f.full}</div>
                  <Badge cls={f.labelCls} style={{ marginTop: 6 }}>{f.label}</Badge>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, marginBottom: 8, textTransform: 'uppercase' }}>Creator Type</div>
                  {f.creators.map(c => <div key={c} style={{ fontSize: 13, color: V.txt, lineHeight: 2 }}>• {c}</div>)}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, marginBottom: 8, textTransform: 'uppercase' }}>KPI Utama</div>
                  <div style={{ fontSize: 13, color: V.txt, lineHeight: 1.7 }}>{f.kpi}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: V.txt3, marginBottom: 8, textTransform: 'uppercase' }}>Contoh Real</div>
                  <div style={{ fontSize: 12.5, color: V.txt2, lineHeight: 1.6, fontStyle: 'italic' }}>{f.example}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'realfake' && (
        <div>
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <SectionHeading color={V.success}>✓ Real Influence</SectionHeading>
              <Card tint style={{ borderLeft: `4px solid ${V.success}` }}>
                {[['Audience loyal & aktif', 'Comment section ramai dengan diskusi relevan dan genuine'], ['Engagement consistent', 'Tidak ada lonjakan ekstrem tanpa sebab yang jelas'], ['Komentar berkualitas', 'Respons genuine terhadap konten, pertanyaan real dari audience'], ['Impact nyata ke behavior', 'Purchase, save, share terjadi secara organik'], ['Growth pattern natural', 'Followers naik bertahap sesuai konten yang diposting']].map(([t, d]) => (
                  <div key={t} style={{ marginBottom: 12 }}><div style={{ fontSize: 13, fontWeight: 600, color: V.txt }}>{t}</div><div style={{ fontSize: 12, color: V.txt3 }}>{d}</div></div>
                ))}
              </Card>
            </div>
            <div>
              <SectionHeading color={V.danger}>✕ Fake Influence</SectionHeading>
              <Card tint style={{ borderLeft: `4px solid ${V.danger}` }}>
                {[['Followers tinggi, ER sangat rendah', 'ER di bawah 0.5% untuk nano/micro = red flag serius'], ['Komentar spam / irrelevant', '"Nice!" "Great content!" dari akun tanpa foto profil'], ['Audience negara tidak relevan', '70% follower dari India/Brazil untuk brand lokal Indonesia'], ['Views tidak stabil ekstrem', '1M views di satu post, 2K di post lain tanpa sebab jelas'], ['Followers naik drastis', 'Naik 50K dalam seminggu tanpa viral moment yang nyata']].map(([t, d]) => (
                  <div key={t} style={{ marginBottom: 12 }}><div style={{ fontSize: 13, fontWeight: 600, color: V.txt }}>{t}</div><div style={{ fontSize: 12, color: V.txt3 }}>{d}</div></div>
                ))}
              </Card>
            </div>
          </div>
          <Callout type="info">
            <span style={{ fontSize: 18 }}>🔍</span>
            <div style={{ fontSize: 13.5, color: V.txt }}><strong>Tools untuk cek:</strong> HypeAuditor (paling akurat), Modash, SocialBlade. Selalu minta <strong>media kit + screenshot insight</strong> langsung dari creator sebelum deal.</div>
          </Callout>
        </div>
      )}

      {tab === 'bestpractice' && (
        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <SectionHeading>Best Practice Dasar KOL Specialist</SectionHeading>
            {['Objective dulu, creator kemudian — Jangan mulai dari "siapa creatornya" tapi dari "apa yang ingin dicapai".', 'Selalu cek audience fit — Creator terbaik adalah yang audiencenya paling mirip target market brand.', 'Prioritaskan trust dibanding reach — Trust yang tinggi = conversion yang lebih tinggi.', 'Simpan historical performance — Dokumentasikan semua data creator untuk referensi campaign berikutnya.', 'Bangun long-term relationship — Creator yang sudah terbukti perform jauh lebih valuable dari creator baru.'].map(t => (
              <Callout key={t} type="rose"><span style={{ fontSize: 18, flexShrink: 0 }}>✦</span><div style={{ fontSize: 13, lineHeight: 1.65, color: V.txt }}>{t}</div></Callout>
            ))}
          </div>
          <div>
            <SectionHeading>Kesalahan Umum Team Junior</SectionHeading>
            {['Memilih creator hanya berdasarkan followers', 'Tidak cek audience demographic dan location', 'Tidak memahami objective campaign sebelum sourcing', 'Menganggap semua creator cocok untuk semua brand', 'Tidak menghitung cost efficiency dan ROI', 'Fokus pada vanity metrics saja'].map(t => (
              <Callout key={t} type="danger"><span style={{ fontSize: 18, flexShrink: 0 }}>✕</span><div style={{ fontSize: 13, color: V.txt }}>{t}</div></Callout>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FundamentalSection;
