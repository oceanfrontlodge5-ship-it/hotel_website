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
      // Show the section in the address bar, so it can be shared and Back returns to where you were.
      if (location.hash !== href) history.pushState(null, '', href);
      // Move keyboard focus to the section too (the skip link relies on this).
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});

// Load the bar photo (a CSS background) only when its section gets near the screen.
const bar = document.querySelector('.fullbar-section');
if (bar) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        bar.classList.add('is-near');
        observer.disconnect();
      }
    }, { rootMargin: '600px 0px' });
    observer.observe(bar);
  } else {
    bar.classList.add('is-near');
  }
}
