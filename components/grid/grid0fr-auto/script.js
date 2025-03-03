const accordionHeader = document.querySelector(".accordion__header");

accordionHeader.addEventListener("click", () => {
  const content = document.querySelector(".accordion__wrapper");
  content.classList.toggle("accordion__wrapper--open");
});
