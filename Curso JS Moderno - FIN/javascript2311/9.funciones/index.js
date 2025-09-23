// FUNCTION NOMBRE(PARAMETROS){
//     HAREMOS LO QUE SEA
//     OPCIONALMENTE DEVOLVEREMOS ALGO CON RETURN
// }

// LLAMAREMOS A LA FUNCION POR SU NOMBRE Y LE PASAREMOS LOS PARAMETROS QUE REQUIERA
// NOMBRE(PARAMETROS);

function saluda(){
    console.log("hola");
}

saluda();

function saluda2(nombre){
    console.log("hola", nombre);
}
let nombre = "juanito"
saluda2("pepe");
saluda2(nombre);

function suma(num1, num2){
    return num1 + num2;
}

let resultado = suma(8, 4);
console.log("el resultado", resultado);


function addElementToArray(array, element){
    array.push(element);
}

const superheroes = ["hulk", "spiderman"];
const villanos = ["Joker", "Duende Verde"];
addElementToArray(superheroes, "thor")
addElementToArray(villanos, "venom") 
console.log(superheroes);
console.log(villanos);

function resta(num1 = 5, num2 = 3){
    return num1 - num2;
}

let resultadoResta = resta();
console.log(resultadoResta);

resultadoResta = resta(4);
console.log(resultadoResta);

resultadoResta = resta(5, 8);
console.log(resultadoResta);

function puedesConducir(edad){
    return edad >= 18 ? "puedes conducir" : "no puedes conducir";
}

console.log(puedesConducir(15));
console.log(puedesConducir(21));