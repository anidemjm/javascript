// Developer by JMMR


const h1 = document.querySelector("h1");
const letras = h1.innerText.split("");
let html = "";

letras.forEach((letter) => {
  classes = "";
  if (letter !== " ") {
    classes = "letra movimiento";
  }
  html = html + `<span class="${classes}">${letter}</span>`;
});

h1.innerHTML = html;


const movimientos = document.querySelectorAll(".movimiento");
movimientos.forEach((letter) => {
  letter.addEventListener("mouseover", function (e) {
    this.classList.add("active");
  });
  letter.addEventListener("mouseout", function (e) {
    this.classList.remove("active");
  });
});