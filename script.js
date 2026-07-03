/* ---------- translations ---------- */
const translations = {
  pt: {
    nav_about:"sobre", nav_services:"especialidades", nav_experience:"experiência", nav_contact:"contato",
    theme_light:"modo claro", theme_dark:"modo escuro", typed_text:"Guilherme Lima — Senior Salesforce Solution Architect",
    role:"Senior Salesforce Solution Architect",
    role_sub:"Trusted Advisor · CoE · TOGAF · +15 anos de experiência em Salesforce",
    tagline:"Desenho arquiteturas Salesforce escaláveis e governança de plataforma para grandes empresas, conectando estratégia de negócio a soluções técnicas robustas.",
    cta_contact:"Falar comigo", cta_experience:"Ver experiência",
    about_eyebrow:"sobre", about_title:"Arquitetura que sustenta o negócio, não só o sistema",
    about_sub:"+15 anos desenhando e governando soluções Salesforce em ambientes corporativos.",
    about_p1:"Atuo como Trusted Advisor para lideranças de tecnologia e negócio, traduzindo objetivos estratégicos em arquiteturas Salesforce sólidas, seguras e prontas para escalar.",
    about_p2:"Tenho experiência liderando Centros de Excelência (CoE), estabelecendo padrões, governança e boas práticas que elevam a maturidade das equipes e da plataforma.",
    about_p3:"Aplico frameworks de arquitetura corporativa para garantir que cada solução esteja alinhada ao roadmap de longo prazo da organização.",
    services_eyebrow:"especialidades", services_title_1:"Como posso ajudar",
    services_sub_1:"Arquitetura, governança e evolução de plataforma Salesforce.",
    s1_tag:"01 · arquitetura", s1_title:"Solution Architecture", s1_desc:"Desenho de arquiteturas Salesforce escaláveis, seguras e alinhadas à estratégia do negócio.",
    s2_tag:"02 · governança", s2_title:"Center of Excellence", s2_desc:"Implementação de CoE, padrões de desenvolvimento e governança multi-org.",
    s3_tag:"03 · consultoria", s3_title:"Trusted Advisor", s3_desc:"Aconselhamento estratégico contínuo para lideranças técnicas e de negócio.",
    services_eyebrow:"expertise", services_title_2:"Quinze anos, uma plataforma.",
    services_sub_2:"Uma linha do tempo condensada das eras que ajudei a construir.",
    exp1_yr:"2020 — ATUAL", exp1_title:"Sr. Salesforce Solution Architect", exp1_desc:"Liderança de programas multi-cloud, revisões de arquitetura e adoção de IA para clientes enterprise.",
    exp2_yr:"2015 — 2020", exp2_title:"Salesforce Tech Lead", exp2_desc:"Rollouts de Sales, Service e Community Cloud pela América Latina com stakeholders globais.",
    exp3_yr:"2010 — 2015", exp3_title:"Sr. Salesforce Consultant & Developer", exp3_desc:"Construí os fundamentos — Apex, Visualforce, automação declarativa — e me apaixonei pela plataforma.",
    contact_eyebrow:"contato", contact_title:"Vamos conversar", contact_sub:"Cosetumo responder em até 1 dia útil.",
    contact_p:"Tem um desafio de arquitetura Salesforce, uma iniciativa de CoE ou quer trocar uma ideia sobre estratégia de plataforma? Me chame por qualquer um dos canais abaixo.",
    footer_made:"feito com HTML & café ☕"
  },
  en: {
    nav_about:"about", nav_services:"expertise", nav_experience:"experience", nav_contact:"contact",
    theme_light:"light mode", theme_dark:"dark mode",
    typed_text:"Guilherme Lima — Senior Salesforce Solution Architect",
    role:"Senior Salesforce Solution Architect",
    role_sub:"Trusted Advisor · CoE · TOGAF · +15 years of Salesforce experience",
    tagline:"I design scalable Salesforce architectures and platform governance for large enterprises, connecting business strategy to robust technical solutions.",
    cta_contact:"Get in touch", cta_experience:"View experience",
    about_eyebrow:"about", about_title:"Architecture that supports the business, not just the system",
    about_sub:"15+ years designing and governing Salesforce solutions in enterprise environments.",
    about_p1:"I act as a Trusted Advisor to technology and business leadership, translating strategic goals into solid, secure, and scalable Salesforce architectures.",
    about_p2:"I have experience leading Centers of Excellence (CoE), establishing standards, governance, and best practices that raise team and platform maturity.",
    about_p3:"I apply enterprise architecture frameworks to ensure every solution aligns with the organization's long-term roadmap.",
    services_eyebrow:"expertise", services_title_1:"How I can help",
    services_sub_1:"Architecture, governance, and evolution of the Salesforce platform.",
    s1_tag:"01 · architecture", s1_title:"Solution Architecture", s1_desc:"Design of scalable, secure Salesforce architectures aligned with business strategy.",
    s2_tag:"02 · governance", s2_title:"Center of Excellence", s2_desc:"CoE implementation, development standards, and multi-org governance.",
    s3_tag:"03 · advisory", s3_title:"Trusted Advisor", s3_desc:"Ongoing strategic advisory for technical and business leadership.",
    services_eyebrow:"expertise", services_title_2:"Fifteen years, one platform.",
    services_sub_2:"A condensed timeline of the eras I helped build.",
    exp1_yr:"2020 — PRESENT", exp1_title:"Sr. Salesforce Solution Architect", exp1_desc:"Leading multi-cloud programs, architecture reviews, and AI adoption for enterprise clients.",
    exp2_yr:"2015 — 2020", exp2_title:"Salesforce Tech Lead", exp2_desc:"Sales, Service, and Community Cloud rollouts across Latin America with global stakeholders.",
    exp3_yr:"2010 — 2015", exp3_title:"Sr. Salesforce Consultant & Developer", exp3_desc:"Built the fundamentals — Apex, Visualforce, declarative automation — and fell in love with the platform.",
    contact_eyebrow:"contact", contact_title:"Let's talk", contact_sub:"I usually reply within 1 business day.",
    contact_p:"Have a Salesforce architecture challenge, a CoE initiative, or want to talk platform strategy? Reach out through any of the channels below.",
    footer_made:"made with HTML & coffee ☕"
  }
};

let currentLang = 'pt';

function applyTranslations(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById('themeToggle').textContent =
    document.body.getAttribute('data-theme') === 'dark' ? translations[lang].theme_light : translations[lang].theme_dark;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langPt').classList.toggle('active', lang==='pt');
  document.getElementById('langEn').classList.toggle('active', lang==='en');
}

document.getElementById('langPt').addEventListener('click', ()=>{
  currentLang='pt'; applyTranslations('pt'); runTyping();
});
document.getElementById('langEn').addEventListener('click', ()=>{
  currentLang='en'; applyTranslations('en'); runTyping();
});

/* ---------- theme toggle ---------- */
const root = document.body;
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){
  root.setAttribute('data-theme', t);
  themeToggle.textContent = t === 'dark' ? translations[currentLang].theme_light : translations[currentLang].theme_dark;
}
applyTheme('dark');
themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ---------- typed line effect ---------- */
const el = document.getElementById('typedLine');
let typingTimer;
function runTyping(){
  clearTimeout(typingTimer);
  const text = translations[currentLang].typed_text;
  let i = 0;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.innerHTML = text;
    return;
  }
  function type(){
    if(i <= text.length){
      el.innerHTML = text.slice(0,i) + '<span class="cursor"></span>';
      i++;
      typingTimer = setTimeout(type, 28);
    }
  }
  type();
}
runTyping();
