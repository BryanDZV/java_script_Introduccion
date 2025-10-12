let btn = document.getElementById("1");

btn.addEventListener("click", (ev) => {
  let entrada = document.getElementById("entrada");
  let list = document.getElementById("2");
  let crearLi = document.createElement("li");
  let parrafoNuevo = document.createElement("p");
  parrafoNuevo.textContent = entrada.value;
  crearLi.appendChild(parrafoNuevo);
  list.appendChild(crearLi);
  // 🧹 Limpiar el input para volver a escribir
  entrada.value = "";

  //console.log(parrafoNuevo);
});
