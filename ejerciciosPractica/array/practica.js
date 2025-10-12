//array
let numero = [1, 2, "ana"];
//console.log(numero.length);
//seimpre entre corchetes[]


for (i = 0; i < numero.length; i++) {
  // console.log(numero[i]);
}
//funciones (funcinamiento del map interno)
function superior(funcion, array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray[i] = funcion(array[i]);
    //console.log(elemento);
  }
  return tempArray;
}

function f(x) {
  return x + 1;
}

console.log(superior(f, numero)); //creada

console.log(numero.map(f)); //nativa
