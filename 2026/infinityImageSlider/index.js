const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");

$prev.addEventListener("click", () => {
  const $$items = document.querySelectorAll(".deck");

  document.querySelector(".cards").appendChild($$items[0]);
});

$next.addEventListener("click", () => {
  const $$items = document.querySelectorAll(".deck");

  document.querySelector(".cards").prepend($$items[$$items.length - 1]);
});
