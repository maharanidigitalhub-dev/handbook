import { V } from '../src/tokens.js';
import { NAV_ITEMS } from './data.js';

/* ─── Badge ─── */
export const Badge = ({ children, cls = 'badge-rose', style: s = {} }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', padding: '3px 9px', borderRadius: 5,
    fontSize: 10.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
    ...(cls === 'badge-rose' ? { background: V.roseBlush, color: V.rose, border: `1px solid ${V.rosePale}` } :
      cls === 'badge-gold' ? { background: V.goldBlush, color: V.gold, border: `1px solid ${V.goldPale}` } :
      cls === 'badge-mauve' ? { background: V.mauvePale, color: V.mauve, border: `1px solid ${V.mauveSoft}` } :
      cls === 'badge-success' ? { background: V.successBg, color: V.success, border: '1px solid #b8dfc8' } :
      cls === 'badge-warn' ? { background: V.warnBg, color: V.warn, border: '1px solid #e8d0a8' } :
      cls === 'badge-danger' ? { background: V.dangerBg, color: V.danger, border: '1px solid #e8b8b8' } :
      { background: V.infoBg, color: V.info, border: '1px solid #b8c8e8' }), ...s
  }}>
    {children}
  </span>
);

/* ─── Callout ─── */
export const Callout = ({ children, type = 'rose' }) => {
  const styles = {
    rose: { background: V.roseBlush, border: `1px solid ${V.rosePale}` },
    gold: { background: V.goldBlush, border: `1px solid ${V.goldPale}` },
    warn: { background: V.warnBg, border: '1px solid #e8d0a8' },
    danger: { background: V.dangerBg, border: '1px solid #e8c0c0' },
    success: { background: V.successBg, border: '1px solid #b8d8c4' },
    info: { background: V.infoBg, border: '1px solid #b8c8e4' },
  };
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', borderRadius: 10, padding: '14px 18px', marginBottom: 18, ...styles[type] }}>
      {children}
    </div>
  );
};

/* ─── SectionTitle ─── */
export const SectionTitle = ({ title, em, sub }) => (
  <div style={{ marginBottom: 28 }}>
    <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 700, color: V.roseDeep, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 6 }}>
      {title} {em && <em style={{ color: V.gold, fontStyle: 'italic' }}>{em}</em>}
    </h1>
    {sub && <p style={{ fontSize: 14, color: V.txt3, lineHeight: 1.7, maxWidth: 640 }}>{sub}</p>}
  </div>
);

/* ─── SectionHeading ─── */
export const SectionHeading = ({ children, color = V.roseDeep }) => (
  <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color, marginBottom: 14, paddingBottom: 8, borderBottom: `2px solid ${V.roseBlush}` }}>
    {children}
  </h2>
);

/* ─── Card ─── */
export const Card = ({ children, style: s = {}, tint, rose, gold, mauve }) => {
  const bg = rose ? V.roseBlush : gold ? V.goldBlush : mauve ? V.mauvePale : tint ? V.cardTint : V.card;
  const border = rose ? V.rosePale : gold ? V.goldPale : mauve ? V.mauveSoft : V.border;
  return (
    <div className="card-hover" style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: '20px 22px', boxShadow: '0 2px 16px rgba(90,20,40,0.07)', ...s }}>
      {children}
    </div>
  );
};

/* ─── Table helpers ─── */
export const TblWrap = ({ children }) => (
  <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${V.border}`, boxShadow: '0 2px 16px rgba(90,20,40,0.07)', marginBottom: 18 }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>{children}</table>
  </div>
);
export const Th = ({ children }) => (
  <th style={{ background: `linear-gradient(135deg,${V.roseDeep},#6A1E34)`, color: '#fff', fontFamily: "'Jost'", fontWeight: 600, padding: '13px 16px', textAlign: 'left', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
    {children}
  </th>
);
export const Td = ({ children, style: s = {} }) => (
  <td style={{ padding: '12px 16px', color: V.txt, lineHeight: 1.5, verticalAlign: 'top', ...s }}>{children}</td>
);
export const TrBody = ({ children, even }) => (
  <tr style={{ borderBottom: `1px solid ${V.border}`, background: even ? 'rgba(250,230,237,0.35)' : 'transparent' }}>
    {children}
  </tr>
);

/* ─── Editable inputs ─── */
export const EditInput = ({ placeholder = '', type = 'text', defaultValue = '' }) => (
  <input
    type={type} defaultValue={defaultValue} placeholder={placeholder}
    style={{ background: 'transparent', border: `1px dashed ${V.borderMid}`, borderRadius: 5, padding: '5px 8px', fontFamily: "'Jost'", fontSize: 13, color: V.txt, width: '100%', minWidth: 70, outline: 'none' }}
    onFocus={e => { e.target.style.borderColor = V.rose; e.target.style.borderStyle = 'solid'; e.target.style.background = V.roseBlush; }}
    onBlur={e => { e.target.style.borderColor = V.borderMid; e.target.style.borderStyle = 'dashed'; e.target.style.background = 'transparent'; }}
  />
);

export const EditSelect = ({ options = ['Belum Mulai', 'On Progress', 'Done', 'Blocked'] }) => (
  <select
    defaultValue={options[0]}
    style={{ background: 'transparent', border: `1px dashed ${V.borderMid}`, borderRadius: 5, padding: '5px 8px', fontFamily: "'Jost'", fontSize: 13, color: V.txt, width: '100%', outline: 'none', cursor: 'pointer' }}
    onFocus={e => { e.target.style.borderColor = V.rose; e.target.style.borderStyle = 'solid'; }}>
    {options.map(o => <option key={o}>{o}</option>)}
  </select>
);

/* ─── Form inputs ─── */
export const FormInput = ({ label, id, value, onChange, placeholder, type = 'text' }) => (
  <div>
    {label && <label htmlFor={id} style={{ fontSize: 11, fontWeight: 700, color: V.txt3, display: 'block', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>}
    <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}
      style={{ width: '100%', background: V.cardTint, border: `1px solid ${V.borderMid}`, borderRadius: 8, padding: '9px 13px', color: V.txt, fontFamily: "'Jost'", fontSize: 13.5, outline: 'none' }}
      onFocus={e => { e.target.style.borderColor = V.rose; e.target.style.boxShadow = '0 0 0 3px rgba(184,78,110,0.1)'; }}
      onBlur={e => { e.target.style.borderColor = V.borderMid; e.target.style.boxShadow = 'none'; }} />
  </div>
);

export const FormSelect = ({ label, id, value, onChange, options = [] }) => (
  <div>
    {label && <label htmlFor={id} style={{ fontSize: 11, fontWeight: 700, color: V.txt3, display: 'block', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>}
    <select id={id} value={value} onChange={onChange}
      style={{ width: '100%', background: V.cardTint, border: `1px solid ${V.borderMid}`, borderRadius: 8, padding: '9px 13px', color: V.txt, fontFamily: "'Jost'", fontSize: 13.5, outline: 'none', cursor: 'pointer' }}>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);

export const FormTextarea = ({ label, id, value, onChange, placeholder, rows = 2 }) => (
  <div>
    {label && <label htmlFor={id} style={{ fontSize: 11, fontWeight: 700, color: V.txt3, display: 'block', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>}
    <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} rows={rows}
      style={{ width: '100%', background: V.cardTint, border: `1px solid ${V.borderMid}`, borderRadius: 8, padding: '9px 13px', color: V.txt, fontFamily: "'Jost'", fontSize: 13.5, outline: 'none', resize: 'vertical', minHeight: 60 }}
      onFocus={e => { e.target.style.borderColor = V.rose; }}
      onBlur={e => { e.target.style.borderColor = V.borderMid; }} />
  </div>
);

/* ─── Stars ─── */
export const Stars = ({ n = 5, color = V.mauve }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} style={{ width: 14, height: 3, borderRadius: 2, background: i <= n ? color : V.border }} />
    ))}
  </div>
);

/* ─── Sidebar ─── */
export const Sidebar = ({ section, setSection }) => (
  <aside className="sidebar-full" style={{ width: 240, background: V.surface, borderRight: `1px solid ${V.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0, overflowY: 'auto', zIndex: 10 }}>
    <div className="sidebar-logo-block" style={{ padding: '22px 20px 16px', borderBottom: `1px solid ${V.border}` }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${V.rose},${V.gold})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>K</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: V.roseDeep, lineHeight: 1.2 }}>KOL Handbook</div>
      <div style={{ fontSize: 11, color: V.txt3, marginTop: 3, letterSpacing: '0.03em' }}>Marketing Department</div>
    </div>
    <nav style={{ flex: 1, padding: '12px 10px' }}>
      <div className="nav-inner" style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="nav-label-el" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: V.txtMuted, textTransform: 'uppercase', padding: '14px 10px 6px', display: 'block' }}>Navigation</span>
        {NAV_ITEMS.map(n => (
          <button key={n.id} onClick={() => setSection(n.id)} className="nav-item"
            style={{
              display: 'flex', alignItems: 'center', gap: 9, padding: '9px 10px', borderRadius: 9, border: 'none', cursor: 'pointer', marginBottom: 2, textAlign: 'left', lineHeight: 1.3, width: '100%',
              background: section === n.id ? V.roseBlush : 'transparent',
              color: section === n.id ? V.rose : V.txt3,
              fontFamily: "'Jost'", fontSize: 12.5, fontWeight: section === n.id ? 600 : 400,
              borderLeft: section === n.id ? `3px solid ${V.rose}` : '3px solid transparent'
            }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: section === n.id ? V.roseDeep : V.rosePale, borderRadius: 5, padding: '1px 5px', flexShrink: 0, lineHeight: 1.5 }}>{n.num}</span>
            {n.label}
          </button>
        ))}
      </div>
    </nav>
  </aside>
);
