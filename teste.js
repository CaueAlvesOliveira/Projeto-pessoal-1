// Muda a cor dos menus, quando o mouse passa em cima deles (este A, é porque a palavra é um link)
const menus = document.querySelectorAll(".menu a");

menus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    menu.style.color = "red"; // muda a borda para vermelha
  });

  menu.addEventListener("mouseout", () => {
    menu.style.color = "white"; // muda a borda para vermelha
  });
});

// Muda a cor das bordas dos container's dos tenis, quando o mouse passa em cima deles
const boxes = document.querySelectorAll(
  ".box-tenis1, .box-tenis2, .box-tenis3, .box-tenis4, .box-tenis5"
);

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.border = "1px solid red"; // muda a borda para vermelha
  });

  box.addEventListener("mouseleave", () => {
    box.style.border = "1px solid white"; // muda a borda para vermelha
  });
});
