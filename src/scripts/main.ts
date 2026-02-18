import '@fontsource-variable/archivo';
import '@fontsource-variable/space-grotesk';

import { initThemeToggle } from './theme-toggle';
import { initScrollReveal } from './scroll-reveal';
import { initMobileNav } from './mobile-nav';

function initNavScroll() {
  const nav = document.querySelector('.nav-bg');
  if (!nav) return;

  function onScroll() {
    nav!.classList.toggle('nav-scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function init() {
  initThemeToggle();
  initScrollReveal();
  initMobileNav();
  initNavScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
