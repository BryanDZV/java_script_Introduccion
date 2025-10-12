const boton = document.getElementById("1");

boton.addEventListener("click", () => {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "soy el nuevo parrafo";
  let div = document.getElementById("div");
  div.appendChild(nuevoParrafo);
  //document.body.appendChild(nuevoParrafo);
});
let div = document.getElementById("div");
const botonBorrar = document.getElementById("remove");
botonBorrar.addEventListener("click", () => {
  let ultimoParrafo = div.lastElementChild;
  if (ultimoParrafo) {
    ultimoParrafo.remove();
  }
});
