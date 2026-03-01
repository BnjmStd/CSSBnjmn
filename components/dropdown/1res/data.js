const menuData = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Home",
    href: "#",
    subMenu: [
      {
        title: "Company",
        href: "#",
      },
      {
        title: "Juanin",
        href: "#",
        subMenu: [
          {
            title: "Moka",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Home",
    href: "#",
  },
];

function createMenu(menuItems, depth = 0) {
  const ul = document.createElement("ul");
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.title;

    if (window.innerWidth <= 768) {
      a.style.paddingLeft = `${15 + depth * 20}px`;
      a.addEventListener("click", (e) => {
        if (item.subMenu) {
          e.preventDefault();
          li.classList.toggle("active");
        }
      });
    }

    li.appendChild(a);
    if (item.subMenu) {
      const subMenu = createMenu(item.subMenu, depth + 1);
      li.appendChild(subMenu);
    }
    ul.appendChild(li);
  });

  return ul;
}

document.getElementById("menu").appendChild(createMenu(menuData));
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("active");
});
