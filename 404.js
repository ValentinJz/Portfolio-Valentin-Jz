(function () {
  var root = document.documentElement;

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  // Tema: se aplica de inmediato (este script se carga en el <head>) para evitar parpadeo
  var theme;
  try {
    theme = localStorage.getItem('theme');
    if (!theme) theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (e) { theme = 'dark'; }
  root.setAttribute('data-theme', theme);

  // ── Traducciones ──────────────────────────────────────────────
  var translations = {
    es: {
      page:    '404 · Página no encontrada',
      title:   'Página no encontrada',
      desc:    'La página que buscás no existe o fue movida. Puede que el enlace esté mal escrito.',
      term:    'Error: destino inaccesible (404).',
      home:    'Volver al inicio',
      contact: 'Contacto'
    },
    en: {
      page:    '404 · Page not found',
      title:   'Page not found',
      desc:    "The page you're looking for doesn't exist or was moved. The link may be mistyped.",
      term:    'Error: destination unreachable (404).',
      home:    'Back to home',
      contact: 'Contact'
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Mismas claves de localStorage que el portfolio: 'lang' y 'theme'
    var langToggle = document.getElementById('langToggle');
    var themeToggle = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');

    function applyLang(lang) {
      store('lang', lang);
      root.lang = lang;
      langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
      document.title = translations[lang].page;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var val = translations[lang][el.getAttribute('data-i18n')];
        if (val !== undefined) el.textContent = val;
      });
    }

    function applyTheme(t) {
      root.setAttribute('data-theme', t);
      store('theme', t);
      themeIcon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    var currentLang = 'es';
    try { currentLang = localStorage.getItem('lang') || 'es'; } catch (e) {}
    if (!translations[currentLang]) currentLang = 'es';

    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      applyLang(currentLang);
    });

    themeToggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    // Ruta pedida en la "terminal" (textContent: no interpreta HTML)
    var path = location.pathname;
    if (path.length > 60) path = path.slice(0, 57) + '...';
    document.getElementById('nfPath').textContent = path;

    applyLang(currentLang);
    applyTheme(root.getAttribute('data-theme') || 'dark');
  });
})();
