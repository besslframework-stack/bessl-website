export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const sunIcon = btn.querySelector('.icon-sun');
  const moonIcon = btn.querySelector('.icon-moon');

  function syncIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
    if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    btn!.setAttribute('aria-pressed', String(isDark));
  }

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('bessl-theme', isDark ? 'dark' : 'light');
    syncIcons();
  });

  syncIcons();
}
