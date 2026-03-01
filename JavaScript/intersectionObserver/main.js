// objeto intersection

new IntersectionObserver();

// requiere de 2 cosas, un objeto que requiere opciones

const opcion = {
  root: null,
  rootMargin: "0px",
  threshold: 0, // valor de intersección, puede ser un valor o una matriz
};

// elemento root por defecto es la visibilidad del objeto que por defecto es el viewport

// el segundo componente es el callback
// se ejecutara cuando haya un cambio en la intersección del eleemento observado con respecto al root

// por defecto recibe un array

const callback = () => {};

const callbackk = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    }
  });
};

const observer1Element = new IntersectionObserver({
  callback,
  option,
});

observer.observer1Element(element);

// si son varios

elements.forEach((element) => {
  observer.observer1Element(element);
});
