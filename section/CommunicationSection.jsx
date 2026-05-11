import { V } from '../tokens.js';
import { Callout, SectionTitle, SectionHeading, TblWrap, Th, Td, TrBody, EditInput, EditSelect } from '../components.jsx';

const CommunicationSection = () => (
  <div className="fade-up section-pad" style={{ padding: '32px 36px' }}>
    <SectionTitle title="12. Communication" em="Etiquette" sub="Panduan Komunikasi Profesional untuk Internal Team & External Partners — komunikasi yang buruk bisa merusak workflow, relationship, dan reputasi team." />
    <Callout type="rose">
      <span style={{ fontSize: 18 }}>✦</span>
      <div style={{ fontSize: 13.5, color: V.txt }}><strong>Prinsip Dasar:</strong> Jelas & langsung ke inti · Profesional tetapi tetap human · Tidak emosional · Semua komunikasi penting terdokumentasi · Hindari passive-aggressive communication · Respect timeline dan workload pihak lain</div>
    </Callout>
    <SectionHeading>Standard Komunikasi per Stakeholder</SectionHeading>
    <TblWrap>
      <thead><tr><Th>Stakeholder</Th><Th>Tone</Th><Th>Best Practice</Th><Th>Yang Harus Dihindari</Th></tr></thead>
      <tbody>
        {[['Internal Team', 'Direct, clear, collaborative', 'Mention PIC spesifik · Confirm deadline & ownership · Gunakan tracker', 'Chat terpisah untuk info penting · Instruksi ambigu · "Tolong cek ya" tanpa konteks'], ['Client', 'Profesional, warm, proactive', 'Response time cepat · Update transparan · Tidak overpromise', 'Menghilang saat ada masalah · Janji yang tidak bisa ditepati'], ['KOL / Creator', 'Profesional, respect, clear', 'Jelaskan campaign dengan jelas · Respect creator timeline · Hindari spam follow-up', 'Terlalu informal di awal komunikasi · Ghosting creator'], ['Management KOL', 'Formal, structured, businesslike', 'Kirim brief dalam format rapi · Semua deal dalam tulisan · Response cepat', 'Negosiasi via voice note · Deal verbal tanpa konfirmasi tertulis']].map(([st, tone, bp, avoid], i) => (
          <TrBody key={st} even={i % 2 === 1}><Td><strong>{st}</strong></Td><Td style={{ color: V.txt3, fontSize: 12 }}>{tone}</Td><Td style={{ fontSize: 12 }}>{bp}</Td><Td style={{ fontSize: 12, color: V.danger }}>{avoid}</Td></TrBody>
        ))}
      </tbody>
    </TblWrap>
    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
      <div>
        <SectionHeading>WhatsApp Etiquette</SectionHeading>
        {['Hindari chat di luar jam kerja kecuali benar-benar urgent', 'Jangan spam call tanpa konfirmasi terlebih dahulu', 'Gunakan format pesan yang rapi dengan bullet points jika perlu', 'Hindari voice note panjang untuk informasi penting — gunakan teks', 'Konfirmasi penerimaan pesan penting dengan reply atau react'].map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 14px', borderRadius: 9, border: `1px solid ${V.border}`, background: V.card, marginBottom: 6, fontSize: 13, color: V.txt }}>
            <span style={{ color: V.rose, flexShrink: 0 }}>✓</span>{t}
          </div>
        ))}
      </div>
      <div>
        <SectionHeading>Revision Communication</SectionHeading>
        <Callout type="info">
          <span style={{ fontSize: 18 }}>💡</span>
          <div style={{ fontSize: 13.5, color: V.txt }}><strong>Best practice:</strong> Gunakan timestamp · Jelaskan alasan revisi · Hindari wording menyerang creator · Fokus pada objective content.</div>
        </Callout>
        <SectionHeading>Crisis Communication</SectionHeading>
        {['Jangan panik — kumpulkan fakta dulu sebelum respond', 'Hindari blame game — fokus pada solusi', 'Gunakan komunikasi terpusat — satu PIC yang bicara', 'Pastikan semua pihak mendapat informasi yang sama'].map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 14px', borderRadius: 9, border: `1px solid ${V.border}`, background: V.card, marginBottom: 6, fontSize: 13, color: V.txt }}>
            <span style={{ color: V.warn, flexShrink: 0 }}>⚡</span>{t}
          </div>
        ))}
      </div>
    </div>
    <SectionHeading>Templates Siap Pakai</SectionHeading>
    {[['Template Follow-Up Message', 'Halo Kak,\n\nKami ingin follow up terkait campaign [Brand X] untuk periode [Bulan]. Apakah Kakak sudah sempat review brief yang kami kirim sebelumnya?\n\nMohon konfirmasinya ya Kak, agar kami bisa lanjutkan ke tahap berikutnya. Terima kasih! 🙏'], ['Template Revision Message', 'Halo Kak,\n\nTerima kasih untuk draft content-nya! Ada beberapa minor adjustment dari kami:\n\n• Menit 0:05 → Mohon logo produk lebih terlihat di frame\n• Menit 0:10 → CTA promo code mohon disampaikan lebih jelas\n\nSelain itu overall content sudah bagus dan sesuai direction campaign. Mohon revisi sebelum [tanggal] ya Kak. Terima kasih! 🌸']].map(([lbl, tmpl]) => (
      <div key={lbl} style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: V.rose, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{lbl}</div>
        <div style={{ background: V.cardTint, borderLeft: `4px solid ${V.rose}`, borderRadius: '0 10px 10px 0', padding: '16px 20px', fontSize: 13.5, lineHeight: 1.8, color: V.txt, whiteSpace: 'pre-line' }}>{tmpl}</div>
      </div>
    ))}
    <SectionHeading>Template Internal Update</SectionHeading>
    <TblWrap>
      <thead><tr><Th>Task</Th><Th>PIC</Th><Th>Status</Th><Th>Next Action</Th></tr></thead>
      <tbody>
        {['KOL Shortlist', 'Client Approval', 'Content Revision', 'Posting Monitoring', ''].map((t, i) => (
          <TrBody key={i} even={i % 2 === 1}>
            <Td><EditInput placeholder={t || 'Tambah task...'} /></Td>
            <Td><EditInput placeholder="Nama" /></Td>
            <Td><EditSelect /></Td>
            <Td><EditInput placeholder="Next action..." /></Td>
          </TrBody>
        ))}
      </tbody>
    </TblWrap>
  </div>
);

export default CommunicationSection;
