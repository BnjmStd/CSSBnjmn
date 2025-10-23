import { Carousel } from './carrousel.js';
import { observeVisibility } from './observer.js';

document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.getElementById('carousel');
  const carousel = new Carousel(carouselElement, { interval: 3000 });

  observeVisibility(carouselElement, () => {
    carousel.start();
  });
});
