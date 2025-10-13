let $input = document.getElementById("1");
let $btn = document.getElementById("btn-enviar");

$btn.addEventListener("click", () => {
  let color = $input.value;
  $input.value = "";
  if (color == "rojo") {
    document.body.style.backgroundColor = "red";
    console.log("valido");
  } else {
    console.log("invalido");
  }
});
