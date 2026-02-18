export function initMobileNav() {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-nav');
  const overlay = document.getElementById('nav-overlay');
  const mobileNav = document.getElementById('mobile-nav');

  if (!menuBtn || !mobileNav) return;

  function open() {
    mobileNav?.classList.add('open');
    overlay?.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });
}
