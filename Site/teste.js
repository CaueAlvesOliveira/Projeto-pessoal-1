// Muda a cor dos menus, quando o mouse passa em cima deles (este A, é porque a palavra é um link)
const menus = document.querySelectorAll(".menu a");

menus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    menu.style.color = "red"; // muda a cor para vermelha
  });

  menu.addEventListener("mouseout", () => {
    menu.style.color = "white"; // muda a cor para vermelha
  });
});

/*----------------------------------------------------------------------------------------------------- */

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

/*----------------------------------------------------------------------------------------------------- */

// Muda a cor do botão e da zoom, quando o mouse passa em cima dele (botao de ver mais opçoes)
const botaos = document.querySelectorAll(".botao");

botaos.forEach((botao) => {
  botao.addEventListener("mouseenter", () => {
    botao.style.backgroundColor = "#90EE90"; // muda a cor para verde
    botao.style.transform = "scale(1.1)";
    botao.style.transition = "transform 0.3s ease";
  });

  botao.addEventListener("mouseleave", () => {
    botao.style.backgroundColor = "white"; // muda a cor para branco
    botao.style.transform = "scale(1)";
  });
});

/*----------------------------------------------------------------------------------------------------- */

// Muda a cor do botão, quando o mouse passa em cima dele (botao de enviar forms)
const botao = document.querySelectorAll(".botao-enviar");

botao.forEach((botao) => {
  botao.addEventListener("mouseenter", () => {
    botao.style.backgroundColor = "#90EE90"; // muda a cor para verde
  });

  botao.addEventListener("mouseleave", () => {
    botao.style.backgroundColor = "white"; // muda a cor para branco
  });
});
