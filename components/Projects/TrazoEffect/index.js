const IMAGES = [
  "https://placeholder.pics/svg/200x300/0000ff",
  "https://placeholder.pics/svg/200x300/00ff4c",
  "https://placeholder.pics/svg/200x300/ff00bb",
];

const COORDINATES = {
  X: 0,
  Y: 0,
};

function addNewImage(x, y) {
  const $image = document.createElement("img");

  $image.src = IMAGES[Math.floor(Math.random() * IMAGES.length)];
  $image.style.setProperty("top", `${y}px`);
  $image.style.setProperty("right", `${x}px`);
  document.body.append($image);

  setTimeout(() => {
    $image.classList.add("fadeOut");
    setTimeout(() => {
      $image.remove();
    }, 500);
  }, 500);
}

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  if (Math.abs(x - COORDINATES.X) > 150 || Math.abs(y - COORDINATES.Y) > 150) {
    COORDINATES.X = x;
    COORDINATES.Y = y;
    addNewImage(COORDINATES.X, COORDINATES.Y);
  }
});
