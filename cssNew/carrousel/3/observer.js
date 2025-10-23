export function observeVisibility(element, onVisible) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onVisible();
        observer.disconnect(); // solo activar una vez
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
}
