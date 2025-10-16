const semaforo = document.querySelector(".semaforoo");

const jump = () => {
  semaforo.classList.add("jump");
  setTimeout(() => {
    semaforo.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", jump);
