/* ══════════════════════════════════════
   PORTFOLIO — script.js
   Valentín Juarez · 2026
══════════════════════════════════════ */

// ── Nav scroll effect ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load


// ── Mobile menu ────────────────────────────────────────────────────────────────
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// Close mobile menu when any link is clicked
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
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings inside the same grid/flex parent
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


// ── Contact form ───────────────────────────────────────────────────────────────
const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    setStatus('Por favor completá los campos obligatorios.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    setStatus('El email no parece válido.', 'error');
    return;
  }

  // Build mailto link as fallback (no backend needed for static hosting)
  const subject = form.subject.value.trim() || 'Contacto desde portfolio';
  const body    = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto  = `mailto:juarezvalentin627@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;

  setStatus('¡Gracias! Se abrió tu cliente de correo para enviar el mensaje.', 'success');
  form.reset();
});

function setStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className   = `form-note mono ${type}`;
  setTimeout(() => {
    formStatus.textContent = '';
    formStatus.className   = 'form-note mono';
  }, 6000);
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}


// ── Smooth scroll for anchor links ────────────────────────────────────────────
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
