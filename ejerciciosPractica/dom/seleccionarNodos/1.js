//seleccionamos parrafo
//const boton = document.getElementById("2");
const boton = document.querySelector(".btn");
const parrafo = document.getElementById("1");
boton.addEventListener("click", (ev) => {
  parrafo.style.color = "red";
  console.log(ev.preventDefault);
});

//selecionar div y cambiar su mensje por otro y en negrita

const div = document.getElementById("3");
const boton2 = document.getElementsByClassName("color")[0];

boton2.addEventListener("click", () => {
  div.innerHTML = "<b>texto en negrita</b>";
  console.log("cambiado el texto");
});

const img = document.querySelector(".fondo");
const boton3 = document.querySelector(".imagen");
boton3.addEventListener("click", () => {
  img.setAttribute("src", "./asset/tux.jpg");
});
