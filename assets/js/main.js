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

  /* ---- Botão "Agende uma sessão": rola até Contato (âncora #contato, sem
     preventDefault) e, ao mesmo tempo, abre o WhatsApp em nova aba ---- */
  const btnAgendar = document.querySelector('.nav__cta');

  if (btnAgendar) {
    btnAgendar.addEventListener('click', () => {
      window.open('https://wa.me/5514988092529', '_blank', 'noopener,noreferrer');
    });
  }

  /* ---- FAQ: acordeão exclusivo (uma resposta aberta por vez) ---- */
  const faqItens = document.querySelectorAll('.faq__list details');

  faqItens.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItens.forEach((outro) => {
        if (outro !== item && outro.open) outro.open = false;
      });
    });
  });

  /* ---- Carrossel de fotos do consultório ---- */
  const carousel = document.getElementById('consultorio-carousel');

  if (carousel) {
    const slides = carousel.querySelectorAll('.carousel__slide');
    const dots = carousel.querySelectorAll('.carousel__dot');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intervalo = 5000;

    let current = 0;
    let timer = null;

    const irPara = (index) => {
      if (index === current) return;

      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      dots[current].removeAttribute('aria-current');

      current = index;

      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-current', 'true');
    };

    const proxima = () => irPara((current + 1) % slides.length);

    const iniciarAutoAvanco = () => {
      pararAutoAvanco();
      if (prefersReducedMotion) return;
      timer = window.setInterval(proxima, intervalo);
    };

    const pararAutoAvanco = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        irPara(index);
        iniciarAutoAvanco();
      });
    });

    /* Setas: dão a volta nas pontas (última -> primeira e vice-versa). */
    const anterior = carousel.querySelector('.carousel__arrow--prev');
    const seguinte = carousel.querySelector('.carousel__arrow--next');

    if (anterior) {
      anterior.addEventListener('click', () => {
        irPara((current - 1 + slides.length) % slides.length);
        iniciarAutoAvanco();
      });
    }

    if (seguinte) {
      seguinte.addEventListener('click', () => {
        proxima();
        iniciarAutoAvanco();
      });
    }

    carousel.addEventListener('mouseenter', pararAutoAvanco);
    carousel.addEventListener('mouseleave', iniciarAutoAvanco);
    carousel.addEventListener('focusin', pararAutoAvanco);
    carousel.addEventListener('focusout', iniciarAutoAvanco);

    iniciarAutoAvanco();
  }
})();
