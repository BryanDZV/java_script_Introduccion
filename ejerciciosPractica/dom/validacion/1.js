let $input = document.getElementById("1");
let $btn = document.getElementById("btn-enviar");

$btn.addEventListener("click", () => {
  let color = $input.value;

  switch (color) {
    case "rojo":
      document.body.style.backgroundColor = "red";
      break;
    case "verde":
      document.body.style.backgroundColor = "green";
      break;
    case "azul":
      document.body.style.backgroundColor = "blue";
      break;

    default:
      console.log("color invalido");

      break;
  }
  $input.value = "";
});
