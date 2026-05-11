/* ═══════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════ */
export const V = {
  bg:'#FAF0F3', surface:'#FFFFFF', card:'#FFFFFF', cardTint:'#FDF5F7',
  border:'#EDD8DF', borderMid:'#DEC0CB',
  rose:'#B84E6E', roseDeep:'#7A2A44', roseSoft:'#D4799A', rosePale:'#F0C8D6', roseBlush:'#FAE8EF',
  gold:'#C4795A', goldSoft:'#DDA080', goldPale:'#F5DDD4', goldBlush:'#FBF0EB',
  mauve:'#8A5070', mauveSoft:'#C090A8', mauvePale:'#F0DDE8',
  txt:'#1A0C10', txt2:'#5C3040', txt3:'#9A7080', txtMuted:'#C4A8B2',
  success:'#3D7A58', successBg:'#EAF5EF',
  warn:'#9A6830', warnBg:'#FBF3E8',
  danger:'#B03030', dangerBg:'#FAECEC',
  info:'#30508A', infoBg:'#ECF0FA',
};

/* ═══════════════════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════════════════ */
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Jost',sans-serif;background:#FAF0F3;color:#1A0C10;}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:#FAE8EF;}
::-webkit-scrollbar-thumb{background:#F0C8D6;border-radius:3px;}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:5px;border-radius:3px;outline:none;cursor:pointer;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#B84E6E;border:3px solid #fff;box-shadow:0 1px 6px rgba(184,78,110,0.35);cursor:pointer;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.fade-up{animation:fadeUp 0.3s ease;}
.card-hover{transition:box-shadow 0.2s,transform 0.2s;}
.card-hover:hover{box-shadow:0 4px 24px rgba(90,20,40,0.10);transform:translateY(-1px);}
.nav-item{transition:all 0.18s ease;}
.nav-item:hover{background:#FAE8EF;color:#B84E6E;}
.tab-btn{transition:all 0.18s;}
.tab-btn:hover{border-color:#B84E6E;color:#B84E6E;background:#FAE8EF;}
.wf-step{transition:all 0.18s;}
.wf-step:hover{border-color:#F0C8D6;background:#FAE8EF;}
.check-item{transition:all 0.18s;}
.check-item:hover{border-color:#F0C8D6;background:#FAE8EF;}
.mod-card{transition:all 0.2s;}
.mod-card:hover{transform:translateY(-3px);box-shadow:0 4px 24px rgba(90,20,40,0.12);}
.btn-rose:hover{box-shadow:0 4px 16px rgba(184,78,110,0.3);}
.btn-outline:hover{border-color:#B84E6E;color:#B84E6E;background:#FAE8EF;}
@media(max-width:768px){
  .sidebar-full{width:100%!important;flex-direction:row!important;overflow-x:auto;border-right:none!important;border-bottom:1px solid #EDD8DF;}
  .nav-inner{flex-direction:row!important;padding:8px!important;}
  .nav-label-el{display:none!important;}
  .main-area{height:calc(100vh - 60px);}
  .grid-4-col{grid-template-columns:1fr 1fr!important;}
  .grid-3-col{grid-template-columns:1fr 1fr!important;}
  .grid-2-col{grid-template-columns:1fr!important;}
  .funnel-grid{grid-template-columns:1fr!important;}
  .sidebar-logo-block{display:none!important;}
  .score-layout{flex-direction:column!important;}
}
@media(max-width:480px){
  .grid-4-col,.grid-3-col,.grid-2-col{grid-template-columns:1fr!important;}
  .section-pad{padding:16px!important;}
}
`;
