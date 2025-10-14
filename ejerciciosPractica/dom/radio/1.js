let padre = document.querySelector("padre");
let radios = padre.children;

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    // Aquí se ejecuta la lógica cuando el valor cambia
    console.log("Se ha cambiado la opción a:", this.value);
  });
});
