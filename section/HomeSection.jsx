import { V } from '../src/tokens.js';
import { Badge } from '@css/components.jsx';  

const HomeSection = ({ setSection }) => {
  const modules = [
    { id: 'fundamental', icon: '🎯', title: '02 · KOL Fundamental', desc: 'Tier, platform, funnel strategy, real vs fake influence, creator economy basics.' },
    { id: 'scoring', icon: '📊', title: '05 · KOL Scoring & Vetting', desc: 'Kalkulator scoring interaktif, vetting checklist, red flags, best practices evaluasi.' },
    { id: 'negotiation', icon: '💬', title: '06 · Negotiation & Rate Card', desc: 'Market rate Indonesia, strategi negosiasi, usage rights, payment terms, template.' },
    { id: 'workflow', icon: '🗓️', title: '07 · Campaign Workflow', desc: 'SOP 4-week campaign tracker interaktif, creator sourcing, escalation system.' },
    { id: 'briefing', icon: '✍️', title: '08 · Content Briefing', desc: 'Brief generator — isi form, generate, copy. Template siap kirim ke creator.' },
    { id: 'communication', icon: '📬', title: '12 · Communication Etiquette', desc: 'Standar komunikasi internal, client, KOL. Template follow-up & revision message.' },
    { id: 'tools', icon: '🛠️', title: '13 · Suggested Tools', desc: 'Tools per kategori: analytics, PM, reporting, AI, paid media. Free & paid options.' },
    { id: 'brand', icon: '🚀', title: '14 · Brand Campaign Dev.', desc: 'Strategic workflow dari business problem sampai post mortem. Template lengkap.' },
  ];
  return (
    <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
      <div style={{ background: `linear-gradient(135deg,#fff 0%,${V.roseBlush} 60%,${V.goldBlush} 100%)`, border: `1px solid ${V.border}`, borderRadius: 16, padding: '38px 36px', position: 'relative', overflow: 'hidden', marginBottom: 28 }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, background: 'radial-gradient(circle,rgba(196,121,90,0.12) 0%,transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, left: 60, width: 200, height: 200, background: 'radial-gradient(circle,rgba(184,78,110,0.08) 0%,transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'relative' }}>
          <Badge cls="badge-rose" style={{ marginBottom: 14 }}>Marketing Department · KOL & Campaign Specialist</Badge>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 700, color: V.roseDeep, marginTop: 14, marginBottom: 10, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            KOL Strategy<br /><em style={{ color: V.gold, fontStyle: 'italic' }}>Handbook</em>
          </h1>
          <p style={{ fontSize: 14, color: V.txt3, lineHeight: 1.7, maxWidth: 500, marginBottom: 20 }}>
            Platform operasional lengkap untuk KOL Specialist & Campaign Team. Dari sourcing hingga reporting — semua terdokumentasi, terstruktur, dan <em style={{ color: V.gold }}>actionable</em>.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[['8', 'Chapter'], ['5', 'KOL Tiers'], ['6', 'Platform'], ['12+', 'Templates']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 700, color: V.rose, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 11, color: V.txt3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {modules.map(m => (
          <button key={m.id} onClick={() => setSection(m.id)} className="mod-card"
            style={{ background: V.card, border: `1px solid ${V.border}`, borderRadius: 14, padding: '22px 20px', cursor: 'pointer', textAlign: 'left', boxShadow: '0 2px 16px rgba(90,20,40,0.07)' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep, marginBottom: 5 }}>{m.title}</div>
            <div style={{ fontSize: 12.5, color: V.txt3, lineHeight: 1.55 }}>{m.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
