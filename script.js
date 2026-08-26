/* ══════════════════════════════════════
   PORTFOLIO — script.js
   Valentín Juarez · 2026
══════════════════════════════════════ */

// ── Translations ───────────────────────────────────────────────────────────────
const translations = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.skills':     'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.contact':    'Contacto',

    'hero.badge':   'Disponible para oportunidades',
    'hero.eyebrow': 'Hola, soy',
    'hero.title':   'Soporte IT Junior · Córdoba, Argentina',
    'hero.desc':    'Analista de Soporte IT Junior N1-N2 con experiencia real en gestión de incidencias, monitoreo de infraestructura y administración de entornos corporativos. Orientado al aprendizaje continuo y al crecimiento dentro del área IT.',
    'hero.cv':      'Descargar CV',
    'hero.contact': 'Contacto',

    'about.title':        'Sobre mí',
    'about.p1':           'Tengo 19 años y vivo en Córdoba, Argentina. Desde temprana edad me llamó la atención entender cómo funciona la tecnología por dentro: armar PCs, diagnosticar fallas, explorar sistemas, optimización en recursos ajustados. Esa curiosidad me llevó a formarme en soporte IT y a dar mis primeros pasos en el mundo laboral.',
    'about.p2':           'Completé una práctica profesional en <strong>Ankaloo Construcciones</strong>, donde trabajé de forma real con tickets de soporte, gestión de incidencias, monitoreo de infraestructura, Active Directory, scripting y documentación técnica. No fue teoría: fue resolver problemas reales para usuarios reales, todos los días.',
    'about.p3':           'Me interesa seguir creciendo en áreas de soporte técnico y, a largo plazo, infraestructura y redes. Me gusta documentar lo que aprendo, porque creo que escribir sobre algo es la mejor manera de entenderlo.',
    'about.education':    'Bachiller en Economía y Administración · ISADA',
    'about.languages':    'Español (nativo) · Inglés (intermedio) · Portugués (básico)',
    'about.availability': 'Disponible para trabajo presencial | remoto | híbrido',
    'about.stat1':        'Experiencia Corporativa',
    'about.stat2':        'Referencias Profesionales',
    'about.stat3':        'Herramientas y tecnologías trabajadas',

    'skills.title':  'Habilidades',
    'skills.group1': 'Soporte & Help Desk',
    'skills.group2': 'Infraestructura & Sistemas',
    'skills.group3': 'Redes',
    'skills.group4': 'Hardware & OS',
    'skills.group5': 'Software & Scripting',
    'skills.group6': 'Seguridad & Otros',

    'skill.tickets':  'Gestión de Tickets',
    'skill.remote':   'Soporte Remoto',
    'skill.users':    'Atención a Usuarios',
    'skill.useradmin':'Administración de Usuarios',
    'skill.virt':     'Virtualización Básica',
    'skill.firewall': 'Firewall básico',
    'skill.logs':     'Análisis de Logs',
    'skill.linux':    'Linux básico',
    'skill.pcbuild':  'Armado y reparación de PCs',
    'skill.diag':     'Diagnóstico de fallas',
    'skill.format':   'Formateo e instalación de SO',
    'skill.backup':   'Backup y recuperación',
    'skill.python':   'Python básico',
    'skill.sql':      'SQL básico',
    'skill.docs':     'Documentación Técnica',
    'skill.js':       'Javascript básico',
    'skill.sec':      'Ciberseguridad básica',
    'skill.vuln':     'Análisis de vulnerabilidades',
    'skill.custserv': 'Atención al Cliente',

    'exp.title':          'Experiencia · Recorrido en IT',
    'exp.job1.role':      'Analista de Soporte IT e Infraestructura',
    'exp.job1.date':      'Dic 2025 – May 2026',
    'exp.job1.li1':       'Gestión y seguimiento de tickets e incidencias con <strong>Zammad Helpdesk</strong>.',
    'exp.job1.li2':       'Monitoreo de infraestructura con <strong>Zabbix</strong>: servidores, switches, firewall, APs e impresoras.',
    'exp.job1.li3':       'Administración de usuarios, grupos y accesos en <strong>Active Directory</strong>.',
    'exp.job1.li4':       'Soporte técnico presencial y remoto via <strong>AnyDesk</strong>; diagnóstico de hardware y software.',
    'exp.job1.li5':       'Preparación, formateo e instalación de sistemas operativos y software corporativo.',
    'exp.job1.li6':       'Desarrollo de scripts en <strong>PowerShell y Python</strong> para automatizar procesos internos.',
    'exp.job1.li7':       'Creación de documentación técnica, tutoriales y base de conocimiento interna.',
    'exp.job1.li8':       'Análisis de logs, identificación de vulnerabilidades y elaboración de reportes técnicos.',
    'exp.job1.li9':       'Administración básica de DNS y servicios web (Hostinger, Cloudflare).',
    'exp.job1.li10':      'Creación de firmas corporativas en HTML para toda la organización.',
    'exp.job2.role':      'Soporte Técnico Freelance',
    'exp.job2.company':   'Particular · Córdoba',
    'exp.job2.date':      '2023 – Actualidad',
    'exp.job2.li1':       'Soporte técnico presencial y remoto a usuarios particulares.',
    'exp.job2.li2':       'Armado, mantenimiento y reparación de computadoras de escritorio y notebooks.',
    'exp.job2.li3':       'Diagnóstico y resolución de fallas de hardware y software.',
    'exp.job2.li4':       'Instalación, configuración y optimización de Windows.',
    'exp.job2.li5':       'Reemplazo e instalación de componentes: SSD/NVMe/HDD, RAM, CPU, GPU, PSU, Motherboard.',
    'exp.job2.li6':       'Limpieza preventiva y mantenimiento de equipos.',
    'exp.job2.li7':       'Asesoramiento en compra, actualización y venta de equipos informáticos.',

    'recs.title': 'Recomendaciones',

    'proj.title':        'Proyectos',
    'proj.subtitle':     'Cosas que hice o en las que participé, aplicando lo aprendido.',
    'proj.p1.title':     'Scripts PowerShell',
    'proj.p1.desc':      'Scripts desarrollados durante mi experiencia en Ankaloo para automatizar tareas: Optimizadores, limpiadores residuales, creación de usuarios, reportes de equipos y gestión de servicios. Aplicación real en producción.',
    'proj.p2.title':     'Documentación Técnica Interna',
    'proj.p2.desc':      'Participé en la creación de documentación técnica, tutoriales y base de conocimiento interna en Ankaloo: guías de resolución de incidencias y procedimientos para el equipo.',
    'proj.tag.auto':     'Automatización',
    'proj.more':         'Más proyectos en GitHub',
    'proj.viewprofile':  'Ver perfil',

    'certs.title': 'Certificaciones',
    'certs.c1':    'Introducción a la Programación, Domótica y Robótica',
    'certs.c2':    'Reparación y ensamblado de equipos informáticos',
    'certs.done':  'Completado',

    'contact.title':          'Contacto',
    'contact.subtitle':       '¿Tenés una oportunidad o querés hablar sobre IT? Escribime.',
    'contact.phone':          'Teléfono | WhatsApp',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Córdoba, Argentina',

    'form.name':       'nombre',
    'form.name.ph':    'Tu nombre',
    'form.subject':    'asunto',
    'form.subject.ph': '¿De qué se trata?',
    'form.message':    'mensaje',
    'form.message.ph': 'Tu mensaje...',
    'form.send':       'Enviar mensaje',

    'form.err.required': 'Por favor completá nombre, email y mensaje.',
    'form.err.email':    'El email no parece válido.',
    'form.err.conn':     'Error de conexión. Escribime directo a juarezvalentin627@gmail.com',
    'form.sending':      'Enviando...',
    'form.success':      '¡Mensaje enviado! Te respondo a la brevedad.',
  },

  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.contact':    'Contact',

    'hero.badge':   'Open to opportunities',
    'hero.eyebrow': 'Hi, I\'m',
    'hero.title':   'Junior IT Support · Córdoba, Argentina',
    'hero.desc':    'Junior IT Support Analyst N1-N2 with real-world experience in incident management, infrastructure monitoring and corporate environment administration. Focused on continuous learning and growth within the IT field.',
    'hero.cv':      'Download CV',
    'hero.contact': 'Contact',

    'about.title':        'About me',
    'about.p1':           'I\'m 19 years old and based in Córdoba, Argentina. I\'ve always been drawn to understanding how technology works under the hood: building PCs, diagnosing failures, exploring systems. That curiosity led me to train in IT support and take my first steps into the professional world.',
    'about.p2':           'I completed a professional internship at <strong>Ankaloo Construcciones</strong>, where I worked hands-on with support tickets, incident management, infrastructure monitoring, Active Directory, scripting and technical documentation. It wasn\'t theory — it was solving real problems for real users, every day.',
    'about.p3':           'I\'m eager to keep growing in IT support and, long-term, in infrastructure and networks. I enjoy documenting what I learn, because writing about something is the best way to truly understand it.',
    'about.education':    'High School Diploma in Economics & Administration · ISADA',
    'about.languages':    'Spanish (native) · English (intermediate) · Portuguese (basic)',
    'about.availability': 'Available for on-site | remote | hybrid roles',
    'about.stat1':        'Corporate Experience',
    'about.stat2':        'Professional References',
    'about.stat3':        'Tools & technologies used',

    'skills.title':  'Skills',
    'skills.group1': 'Support & Help Desk',
    'skills.group2': 'Infrastructure & Systems',
    'skills.group3': 'Networking',
    'skills.group4': 'Hardware & OS',
    'skills.group5': 'Software & Scripting',
    'skills.group6': 'Security & Other',

    'skill.tickets':  'Ticket Management',
    'skill.remote':   'Remote Support',
    'skill.users':    'End-user Support',
    'skill.useradmin':'User Administration',
    'skill.virt':     'Basic Virtualization',
    'skill.firewall': 'Basic Firewall',
    'skill.logs':     'Log Analysis',
    'skill.linux':    'Basic Linux',
    'skill.pcbuild':  'PC Assembly & Repair',
    'skill.diag':     'Fault Diagnosis',
    'skill.format':   'OS Formatting & Installation',
    'skill.backup':   'Backup & Recovery',
    'skill.python':   'Basic Python',
    'skill.sql':      'Basic SQL',
    'skill.docs':     'Technical Documentation',
    'skill.js':       'Basic Javascript',
    'skill.sec':      'Basic Cybersecurity',
    'skill.vuln':     'Vulnerability Analysis',
    'skill.custserv': 'Customer Service',

    'exp.title':          'Experience · IT Journey',
    'exp.job1.role':      'IT Support & Infrastructure Analyst',
    'exp.job1.date':      'Dec 2025 – May 2026',
    'exp.job1.li1':       'Ticket and incident management using <strong>Zammad Helpdesk</strong>.',
    'exp.job1.li2':       'Infrastructure monitoring with <strong>Zabbix</strong>: servers, switches, firewall, APs and printers.',
    'exp.job1.li3':       'User, group and access management via <strong>Active Directory</strong>.',
    'exp.job1.li4':       'On-site and remote technical support via <strong>AnyDesk</strong>; hardware and software diagnosis.',
    'exp.job1.li5':       'Setup, formatting and installation of operating systems and corporate software.',
    'exp.job1.li6':       'Development of <strong>PowerShell and Python</strong> scripts to automate internal processes.',
    'exp.job1.li7':       'Creation of technical documentation, tutorials and internal knowledge base.',
    'exp.job1.li8':       'Log analysis, vulnerability identification and technical report writing.',
    'exp.job1.li9':       'Basic DNS and web services administration (Hostinger, Cloudflare).',
    'exp.job1.li10':      'Creation of HTML corporate email signatures for the entire organization.',
    'exp.job2.role':      'Freelance Technical Support',
    'exp.job2.company':   'Self-employed · Córdoba',
    'exp.job2.date':      '2023 – Present',
    'exp.job2.li1':       'On-site and remote technical support for individual clients.',
    'exp.job2.li2':       'PC assembly, maintenance and repair for desktops and laptops.',
    'exp.job2.li3':       'Hardware and software fault diagnosis and resolution.',
    'exp.job2.li4':       'Windows installation, configuration and optimization.',
    'exp.job2.li5':       'Component replacement and installation: SSD/NVMe/HDD, RAM, CPU, GPU, PSU, Motherboard.',
    'exp.job2.li6':       'Preventive cleaning and equipment maintenance.',
    'exp.job2.li7':       'Advisory on purchasing, upgrading and selling computer equipment.',

    'recs.title': 'Recommendations',

    'proj.title':        'Projects',
    'proj.subtitle':     'Things I built or participated in, applying what I\'ve learned.',
    'proj.p1.title':     'PowerShell Scripts',
    'proj.p1.desc':      'Scripts developed during my internship at Ankaloo to automate tasks: optimizers, residual cleaners, user creation, equipment reports and service management. Real production use.',
    'proj.p2.title':     'Internal Technical Documentation',
    'proj.p2.desc':      'Participated in creating technical documentation, tutorials and an internal knowledge base at Ankaloo: incident resolution guides and team procedures.',
    'proj.tag.auto':     'Automation',
    'proj.more':         'More projects on GitHub',
    'proj.viewprofile':  'View profile',

    'certs.title': 'Certifications',
    'certs.c1':    'Introduction to Programming, Home Automation & Robotics',
    'certs.c2':    'Computer Equipment Repair & Assembly',
    'certs.done':  'Completed',

    'contact.title':          'Contact',
    'contact.subtitle':       'Have an opportunity or want to talk about IT? Reach out.',
    'contact.phone':          'Phone | WhatsApp',
    'contact.location.label': 'Location',
    'contact.location.value': 'Córdoba, Argentina',

    'form.name':       'name',
    'form.name.ph':    'Your name',
    'form.subject':    'subject',
    'form.subject.ph': 'What\'s it about?',
    'form.message':    'message',
    'form.message.ph': 'Your message...',
    'form.send':       'Send message',

    'form.err.required': 'Please fill in name, email and message.',
    'form.err.email':    'That email doesn\'t look valid.',
    'form.err.conn':     'Connection error. Email me directly at juarezvalentin627@gmail.com',
    'form.sending':      'Sending...',
    'form.success':      'Message sent! I\'ll get back to you soon.',
  }
};

// ── Language system ────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'es';
const langToggle = document.getElementById('langToggle');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = translations[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

   // Cambiar el CV según el idioma
  const cvBtn = document.getElementById('cvDownload');
  if (cvBtn) {
    cvBtn.href = lang === 'en' ? 'CV_Valentin_Juarez_EN.pdf' : 'CV_Valentin_Juarez.pdf';
    }
}

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});


// Apply on load
applyLang(currentLang);


// ── Theme system ───────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const root        = document.documentElement;

const savedTheme  = localStorage.getItem('theme');
const systemDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');

applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
});


// ── Nav scroll effect ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();


// ── Mobile menu ────────────────────────────────────────────────────────────────
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});


// ── Scroll-reveal ──────────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(idx * 80, 320));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));


// ── Active nav link on scroll ──────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach(s => sectionObserver.observe(s));


// ── Contact form via Formspree ─────────────────────────────────────────────────
const FORMSPREE_ID = 'mgojwdln';

const form        = document.getElementById('contactForm');
const submitBtn   = form.querySelector('button[type="submit"]');
const formStatus  = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const t       = translations[currentLang];
  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    setStatus(t['form.err.required'], 'error'); return;
  }
  if (!isValidEmail(email)) {
    setStatus(t['form.err.email'], 'error'); return;
  }

  setStatus(t['form.sending'], '');
  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = t['form.sending'];

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        nombre:  name,
        email:   email,
        asunto:  form.subject.value.trim() || '(sin asunto)',
        mensaje: message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus(t['form.success'], 'success');
      form.reset();
    } else {
      const errMsg = data?.errors?.map(e => e.message).join(', ') || 'Error desconocido.';
      setStatus(`Error: ${errMsg}`, 'error');
    }
  } catch (err) {
    setStatus(t['form.err.conn'], 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = translations[currentLang]['form.send'];
  }
});

function setStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className   = `form-note mono ${type}`;
  if (type === 'success') {
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className   = 'form-note mono';
    }, 8000);
  }
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}


// ── Smooth scroll ──────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 12;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
