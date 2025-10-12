const div = document.getElementById("botones");

div.addEventListener("click", (ev) => {
  console.log("soy el target", ev);
  let botones = document.querySelectorAll(".color");
  //console.log(botones);
  botones.forEach((b) => {
    b.style.backgroundColor = "white";
  });

  switch (ev.target.id) {
    case "verde":
      ev.target.style.backgroundColor = "green";
      break;
    case "rojo":
      ev.target.style.backgroundColor = "red";
      break;
    case "azul":
      ev.target.style.backgroundColor = "blue";
      break;

    default:
      ev.target.style.backgroundColor = "white";

      break;
  }
});
