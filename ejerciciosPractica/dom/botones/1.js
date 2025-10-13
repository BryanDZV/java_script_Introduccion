let $input = document.getElementById("datos");
let $boton = document.getElementById("boton");
$boton.addEventListener("click", () => {
  let nuevoBoton = document.createElement("button");
  $input.addEventListener("input", () => {
    //console.log($input.value);
  });

  nuevoBoton.textContent = $input.value;
  nuevoBoton.style.backgroundColor = $input.value;
  $boton.after(nuevoBoton);
  $input.value = "";
});
