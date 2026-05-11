import { V } from './tokens.js';

export const TIERS = [
  {name:'Nano',range:'1K–10K',rate:'Rp 300K–1,5M',er:'5–20%',conv:92,color:V.success,trust:'Sangat Tinggi',trustClass:'badge-success',best:'Niche product, trust-based, conversion'},
  {name:'Micro',range:'10K–100K',rate:'Rp 1,5M–8M',er:'4–12%',conv:78,color:V.info,trust:'Tinggi',trustClass:'badge-info',best:'Sweet spot: reach + trust, MOFU'},
  {name:'Mid-tier',range:'100K–500K',rate:'Rp 8M–35M',er:'2–7%',conv:55,color:V.gold,trust:'Sedang-Tinggi',trustClass:'badge-gold',best:'Brand awareness + credibility'},
  {name:'Macro',range:'500K–1M',rate:'Rp 35M–100M',er:'1–4%',conv:35,color:V.warn,trust:'Sedang',trustClass:'badge-warn',best:'TOFU awareness, butuh funnel support'},
  {name:'Mega',range:'>1M',rate:'Rp 100M+',er:'0.5–3%',conv:18,color:V.danger,trust:'Bervariasi',trustClass:'badge-danger',best:'Mass awareness, brand campaign nasional'},
];

export const PLATFORMS = [
  {name:'TikTok',icon:'🎵',type:'Short Video & Trend-Driven',funnel:'TOFU–MOFU',format:'Video 15 detik–3 menit',er:'5–15%',strength:'Viral, discovery, trend-driven',tag:'Spark Ads Available',tagClass:'badge-rose'},
  {name:'Instagram',icon:'📸',type:'Visual Lifestyle & Branding',funnel:'TOFU–MOFU',format:'Feed, Reels, Story',er:'2–8%',strength:'Branding, lifestyle, aesthetic',tag:'Collab & Whitelisting',tagClass:'badge-mauve'},
  {name:'YouTube',icon:'▶️',type:'Long-form Trust Building',funnel:'MOFU–BOFU',format:'Video 5–20 menit',er:'1–5%',strength:'Trust building, review mendalam',tag:'Long-form Authority',tagClass:'badge-gold'},
  {name:'X / Twitter',icon:'✕',type:'Opinion & Virality',funnel:'TOFU',format:'Thread, tweet, reply',er:'0.5–3%',strength:'Virality, opini publik, PR',tag:'Opinion Leader',tagClass:'badge-info'},
  {name:'LinkedIn',icon:'💼',type:'B2B & Professional Authority',funnel:'MOFU–BOFU',format:'Post, artikel, video pendek',er:'2–6%',strength:'B2B, professional credibility',tag:'B2B Authority',tagClass:'badge-mauve'},
  {name:'Streaming',icon:'🎮',type:'Gaming & Live Interaction',funnel:'BOFU',format:'Live stream, clip',er:'8–25%',strength:'Real-time conversion, community',tag:'Live Commerce',tagClass:'badge-success'},
];

export const SCORING_DIMS = [
  {key:'audienceFit',label:'Audience Fit',weight:30,color:V.rose,desc:'Gender, usia, lokasi, interest, purchasing power audience sesuai target market brand'},
  {key:'engagementQuality',label:'Engagement Quality',weight:20,color:V.mauve,desc:'Relevansi komentar, save/share behavior, konsistensi engagement, genuine vs spam'},
  {key:'contentQuality',label:'Content Quality',weight:15,color:V.gold,desc:'Hook quality, storytelling, editing quality, clarity, CTA delivery, platform adaptation'},
  {key:'brandFit',label:'Brand Fit',weight:15,color:V.success,desc:'Personal branding creator, previous collab, reputation, controversy history, tone komunikasi'},
  {key:'professionalism',label:'Professionalism',weight:10,color:V.warn,desc:'Kecepatan respon, ketepatan deadline, revisi handling, contract compliance'},
  {key:'costEfficiency',label:'Cost Efficiency',weight:10,color:V.danger,desc:'Cost per reach, cost per engagement, content reusability value, ROI potential'},
];

export const TOOLS_DATA = [
  {cat:'KOL Analytics',color:V.mauve,items:[
    {name:'HypeAuditor',tier:'Paid',tierClass:'badge-danger',stars:5,desc:'Fake follower detection terbaik, audience quality score, demographic breakdown lengkap per platform'},
    {name:'Modash',tier:'Paid',tierClass:'badge-danger',stars:5,desc:'Creator discovery database global, performance tracking, email contact finder untuk outreach'},
    {name:'SocialBlade',tier:'Free/Paid',tierClass:'badge-warn',stars:3,desc:'Growth tracking, basic follower analytics, tier estimation. Gratis untuk basic insight.'},
    {name:'TikTok Creative Center',tier:'Free',tierClass:'badge-success',stars:4,desc:'Trending sounds, hashtag analysis, top creator insights Indonesia — wajib untuk Tim TikTok'},
  ]},
  {cat:'Workflow & Project Management',color:V.success,items:[
    {name:'Notion',tier:'Free/Paid',tierClass:'badge-warn',stars:5,desc:'All-in-one: creator database, campaign tracker, brief template, documentation — tool utama team'},
    {name:'ClickUp',tier:'Free/Paid',tierClass:'badge-warn',stars:4,desc:'Advanced workflow, campaign timeline, multi-team coordination, automation'},
    {name:'Asana',tier:'Free/Paid',tierClass:'badge-warn',stars:4,desc:'Task management, deadline tracking, campaign milestone, team collaboration'},
    {name:'Monday.com',tier:'Paid',tierClass:'badge-danger',stars:4,desc:'Visual project management, campaign calendar, reporting dashboard'},
  ]},
  {cat:'Reporting & Dashboard',color:V.gold,items:[
    {name:'Looker Studio',tier:'Free',tierClass:'badge-success',stars:5,desc:'Google dashboard gratis, connect ke GA4 & Sheets, visual reporting yang profesional'},
    {name:'Google Sheets',tier:'Free',tierClass:'badge-success',stars:5,desc:'KPI tracker, scoring template, budget allocation, historical creator database'},
    {name:'Airtable',tier:'Free/Paid',tierClass:'badge-warn',stars:4,desc:'Creator database hybrid spreadsheet, relational data, gallery view yang clean'},
    {name:'Power BI',tier:'Paid',tierClass:'badge-danger',stars:4,desc:'Enterprise reporting, advanced visualization untuk team yang butuh dashboard kompleks'},
  ]},
  {cat:'AI Tools',color:V.rose,items:[
    {name:'Claude',tier:'Free/Paid',tierClass:'badge-warn',stars:5,desc:'Strategic thinking, brief drafting, campaign analysis, research mendalam, data interpretation'},
    {name:'ChatGPT',tier:'Free/Paid',tierClass:'badge-warn',stars:4,desc:'Ideasi konten, brainstorming campaign angle, copy variations, hashtag research'},
    {name:'Perplexity',tier:'Free/Paid',tierClass:'badge-warn',stars:4,desc:'Research real-time, trend analysis, competitor monitoring dengan sumber yang dapat dikutip'},
    {name:'Gemini',tier:'Free/Paid',tierClass:'badge-warn',stars:3,desc:'Integrasi Google Workspace, multimodal analysis, real-time data dari Google Search'},
  ]},
];

export const NAV_ITEMS = [
  {id:'home',label:'Home',num:'★'},
  {id:'fundamental',label:'KOL Fundamental',num:'02'},
  {id:'scoring',label:'KOL Scoring & Vetting',num:'05'},
  {id:'negotiation',label:'Negotiation & Rate Card',num:'06'},
  {id:'workflow',label:'Campaign Workflow',num:'07'},
  {id:'briefing',label:'Content Briefing',num:'08'},
  {id:'communication',label:'Communication Etiquette',num:'12'},
  {id:'tools',label:'Suggested Tools',num:'13'},
  {id:'brand',label:'Brand Campaign Dev.',num:'14'},
];
