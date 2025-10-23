export class Carousel {
  constructor(root, { interval = 3000 } = {}) {
    this.root = root;
    this.track = root.querySelector(".carousel__track");
    this.items = Array.from(this.track.children);
    this.index = 0;
    this.interval = interval;
    this.timer = null;
  }

  start() {
    if (this.timer) return; // evitar duplicar intervalos
    this.timer = setInterval(() => this.next(), this.interval);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  next() {
    this.index = (this.index + 1) % this.items.length;
    this.update();
  }

  update() {
    const offset = -this.index * 100;
    this.track.style.transform = `translateX(${offset}%)`;
  }
}
