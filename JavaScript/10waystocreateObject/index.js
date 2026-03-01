// propiedades que tienen un valor por defecto

const beer = {
  name: "Heineken",
  price: 8,
  showInfo() {
    console.log(`Beer: ${this.name}, Price: $${this.price}`);
  },
};

const beer2 = new Object();
beer2.name = "Corona";
beer2.price = 7;
beer2.showInfo = function () {
  console.log(`Beer: ${this.name}, Price: $${this.price}`);
};

// function constructor
function Beer(name, price) {
  this.name = name;
  this.price = price;
  this.showInfo = function () {
    console.log(`Beer: ${this.name}, Price: $${this.price}`);
  };
}

const beer3 = new Beer("Budweiser", 6);

// Object.create
const beer4 = Object.create({
  name: "Modelo",
  price: 9,
});

beer4.showInfo = function () {
  console.log(`Beer: ${this.name}, Price: $${this.price}`);
};

// class
class BeerClass {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(`Beer: ${this.name}, Price: $${this.price}`);
  }
}

beer5 = new BeerClass("Stella Artois", 10);

// factory function
function createBeer(name, price) {
  return {
    name,
    price,
    showInfo() {
      console.log(`Beer: ${this.name}, Price: $${this.price}`);
    },
  };
}

const beer6 = createBeer("Pilsner Urquell", 11);

// DESERIALIZACIÓN DE OBJETOS

const beer7 = JSON.parse('{"name": "Guinness", "price": 12}');
beer7.showInfo = function () {
  console.log(`Beer: ${this.name}, Price: $${this.price}`);
};
beer7.showInfo();

// fromEntries
const beer8 = Object.fromEntries([
  ["name", "Carlsberg"],
  ["price", 5],
]);
beer8.showInfo = function () {
  console.log(`Beer: ${this.name}, Price: $${this.price}`);
};

// metaprogramming
const beer9 = eval(
  '({ name: "Amstel", price: 4, showInfo() { console.log(`Beer: ${this.name}, Price: $${this.price}`); } })',
);

//

const beers = Reflect.construct(Beer, ["Becks", 3]);
