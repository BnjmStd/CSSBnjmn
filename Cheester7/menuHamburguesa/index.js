const addClassVisible = (event) => {
    event.preventDefault();
    $navbar.classList.add("visible");
};

const removeClassVisible = (event) => {
    event.preventDefault();
    $navbar.classList.remove("visible");
};

const $buttonOpenMenu = document.getElementById("open");
const $buttonCloseMenu =  document.getElementById("close");
const $navbar = document.getElementById("nav");

$buttonOpenMenu.addEventListener("click", addClassVisible);
$buttonCloseMenu.addEventListener("click", removeClassVisible);