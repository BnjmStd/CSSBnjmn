function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    loseAllMenu();
  }

  button.nextElementSibling.classList.toggle("show");

  button.classList.toggle("rotate");

  if ($sidebar.classList.contains("close")) {
    $sidebar.classList.toggle("close");
    $toggleBtn.classList.toggle("rotate");
  }
}

const $toggleBtn = document.getElementById("toggle-btn");
const $sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  $sidebar.classList.toggle("close");
  $toggleBtn.classList.toggle("rotate");

  loseAllMenu();
}

function loseAllMenu() {
  Array.from($sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}
