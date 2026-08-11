
  (function () {
    'use strict';

    const THEME_STORAGE_KEY = 'site-theme';

    function setCurrentYear() {
      const el = document.getElementById('current-year');
      if (!el) return;
      el.textContent = new Date().getFullYear();
    }

    function initThemeToggle() {
      const toggleBtn = document.getElementById('theme-toggle');
      const root = document.documentElement;
      if (!toggleBtn) return;

      const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        toggleBtn.setAttribute('aria-pressed', String(theme === 'light'));
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      };

      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      applyTheme(saved || (prefersLight ? 'light' : 'dark'));

      toggleBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        applyTheme(current === 'light' ? 'dark' : 'light');
      });
    }

    function initScrollTop() {
      const btn = document.getElementById('scroll-top');
      if (!btn) return;

      const SHOW_AFTER_PX = 400;
      let ticking = false;

      const updateVisibility = () => {
        const shouldShow = window.scrollY > SHOW_AFTER_PX;
        btn.classList.toggle('is-visible', shouldShow);
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateVisibility);
          ticking = true;
        }
      });

      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      updateVisibility();
    }

    function initScrollReveal() {
      const targets = document.querySelectorAll('[data-animate]');
      if (!targets.length) return;

      if (!('IntersectionObserver' in window)) {
        targets.forEach((el) => el.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      targets.forEach((el) => observer.observe(el));
    }

    // Cada integrante tiene su propio enlace .copy-email y su propio
    // <span class="copy-feedback"> justo al lado (hermano dentro de
    // .team-actions), así que se buscan TODOS y cada uno se maneja por
    // separado en vez de depender de un único id fijo.
    function initCopyEmail() {
      const links = document.querySelectorAll('.copy-email');
      if (!links.length) return;

      links.forEach((link) => {
        link.addEventListener('click', async (event) => {
          const email = link.dataset.email;
          const feedback = link.closest('.team-actions')?.querySelector('.copy-feedback');
          if (!email || !navigator.clipboard) return; // deja el mailto: como fallback

          event.preventDefault();
          try {
            await navigator.clipboard.writeText(email);
            if (feedback) {
              feedback.textContent = 'Copiado';
              feedback.classList.add('is-visible');
              setTimeout(() => feedback.classList.remove('is-visible'), 1800);
            }
          } catch (err) {
            window.location.href = `mailto:${email}`;
          }
        });
      });
    }

    function initSmoothAnchors() {
      const anchors = document.querySelectorAll('.footer-anchor');
      anchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
          const targetId = anchor.getAttribute('href');
          const targetEl = targetId && document.querySelector(targetId);
          if (!targetEl) return;

          event.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      setCurrentYear();
      initThemeToggle();
      initScrollTop();
      initScrollReveal();
      initCopyEmail();
      initSmoothAnchors();
    });
  })();