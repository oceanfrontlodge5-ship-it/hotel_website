const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      // Move keyboard focus to the section too (the skip link relies on this).
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
