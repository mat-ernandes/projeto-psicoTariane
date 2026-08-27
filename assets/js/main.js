(() => {
  'use strict';

  /* ---- Menu mobile acessível ---- */
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = nav ? nav.querySelectorAll('.nav__link, .nav__cta') : [];

  const closeMenu = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  const openMenu = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
        navToggle.focus();
      }
    });

    // Fecha o menu mobile automaticamente se a tela crescer para desktop
    const desktopQuery = window.matchMedia('(min-width: 48rem)');
    desktopQuery.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  /* ---- Destaca o item de menu correspondente à seção visível ---- */
  const sections = document.querySelectorAll('main section[id]');
  const linkBySectionId = new Map();
  document.querySelectorAll('.nav__link').forEach((link) => {
    const id = link.getAttribute('href').replace('#', '');
    linkBySectionId.set(id, link);
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkBySectionId.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            linkBySectionId.forEach((l) => l.removeAttribute('aria-current'));
            link.setAttribute('aria-current', 'true');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ---- Ano atual no rodapé ---- */
  const anoAtual = document.getElementById('ano-atual');
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }
})();
