// Clase modular que maneja un contador animado
export class Counter {
  /**
   * @param {HTMLElement} element - Elemento donde se muestra el contador
   * @param {number} target - Valor final del contador
   * @param {number} duration - Duración de la animación en milisegundos
   */
  constructor(element, target = 100, duration = 2000) {
    this.element = element;
    this.target = target;
    this.duration = duration;
    this.startTime = null;
  }

  // Método público para iniciar la animación
  start = () => {
    requestAnimationFrame(this.#update);
  };

  // Método privado que actualiza el valor en cada frame
  #update = (timestamp) => {
    if (!this.startTime) this.startTime = timestamp;

    const progress = Math.min((timestamp - this.startTime) / this.duration, 1);
    const currentValue = Math.floor(progress * this.target);

    this.element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(this.#update);
    }
  };
}
