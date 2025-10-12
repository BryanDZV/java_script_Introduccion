let teclado = document.getElementById("1");
let parrafo = document.getElementById("2");
teclado.addEventListener("input", (ev) => {
  //console.dir(ev.target); //ver propiedades que puedo usar con ev
  console.log(ev);
  parrafo.textContent = teclado.value;
});
