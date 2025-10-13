let padre = document.getElementById("botones");

padre.addEventListener("click", (ev) => {
  if (ev.target.tagName !== "BUTTON") return; // Ignorar si no se hizo clic en un botón

  let hijos = padre.querySelectorAll("button");

  // Quitar el borde a todos
  hijos.forEach((h) => {
    h.style.border = ""; // reinicia el borde
  });

  // Aplicar el borde solo al botón clicado
  ev.target.style.border = "8px solid black";
});
