if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('motion-ready');
  const revealTargets = document.querySelectorAll('.journey-card, .capability-card, .manager-visual, .faq-list > details');
  revealTargets.forEach(item => item.classList.add('reveal-pending'));
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealTargets.forEach(item => revealObserver.observe(item));
}

const topShortcut = document.querySelector('.floating-top');
if ('IntersectionObserver' in window) {
  const topObserver = new IntersectionObserver(([entry]) => topShortcut.classList.toggle('is-visible', !entry.isIntersecting));
  topObserver.observe(document.querySelector('.hero-art-section'));
} else {
  topShortcut.classList.add('is-visible');
}
