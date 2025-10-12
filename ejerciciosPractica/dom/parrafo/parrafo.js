let btn = document.getElementById("1");
btn.addEventListener("click", (ev) => {
  let padreNodo = document.getElementById("div");
  let parrafoOrginal = document.getElementById("parrafo");
  let parrafoNuevo = document.createElement("p");
  parrafoNuevo.textContent = "soy parrafo nuevo";
  padreNodo.insertBefore(parrafoNuevo, parrafoOrginal);
});
