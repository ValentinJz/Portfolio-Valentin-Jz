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
//
//  INSTRUCCIONES:
//  1. Creá una cuenta gratis en https://formspree.io
//  2. Creá un nuevo formulario ("New Form")
//  3. Reemplazá "YOUR_FORM_ID" con el código que te dan (ej: xyzabcde)
//
const FORMSPREE_ID = 'mgojwdln'; // <-- reemplazá esto

const form        = document.getElementById('contactForm');
const submitBtn   = form.querySelector('button[type="submit"]');
const formStatus  = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  // Validación básica
  if (!name || !email || !message) {
    setStatus('Por favor completá nombre, email y mensaje.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    setStatus('El email no parece válido.', 'error');
    return;
  }

  // Si no está configurado Formspree, abrir mailto como fallback
  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    const subject = form.subject.value.trim() || 'Contacto desde portfolio';
    const body    = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:juarezvalentin627@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Se abrió tu cliente de correo. Recordá configurar Formspree para que esto funcione desde móvil.', 'success');
    return;
  }

  // Envío real via Formspree
  setStatus('Enviando...', '');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

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
      setStatus('¡Mensaje enviado! Te respondo a la brevedad.', 'success');
      form.reset();
    } else {
      const errMsg = data?.errors?.map(e => e.message).join(', ') || 'Error desconocido.';
      setStatus(`No se pudo enviar: ${errMsg}`, 'error');
    }
  } catch (err) {
    setStatus('Error de conexión. Escribime directo a juarezvalentin627@gmail.com', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';
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
