//CONDICIONALES

//IF --> Si se cumple una condición será true y si no false
//True --> cualquier valor que no sea false, 0, "", null o undefined

//Truthy --> cualquier valor que no es un booleano true, pero que un if toma como verdadero, EJ: numero 3, texto "soy texto"
//Falsy --> cualquier valor que no es un booleano false pero que un if toma como falso, EJ: numero '0, texto vacío "", null o undefined
let variable = -6;

if(variable){
    console.log("Es verdadero");
}else{
    console.log("Es false");
}


// Tipos de condiciones

// Mayor que --> >
// Menor que --> <
// Mayor o igual que --> >=
// Menor o igual que --> <=
// Igual que --> ==
// Estrictamente igual --> === // En este caso comparamos tipo y valor
// Distinto que --> !=
// Estrictamente distinto que --> !==

if( 1 == "1"){
    console.log("Es verdadero");
}else{
    console.log("Es false");
}


if( 1 === "1"){
    console.log("Es verdadero");
}else{
    console.log("Es false");
}

let age = 25;

if( age >= 18){
    console.log("Puedes entrar a la discoteca");
}else{
    console.log("No puedes entrar");
}

// Else If --> Añadiremos una o varias condiciones adicionales

let comidaFavorita = "garbanzos";

if(comidaFavorita == "lentejas"){
    console.log("Su comida favorita son las lentejas");
}else if(comidaFavorita == "pescado"){
    console.log("Su comida favorita es el pescado");
}else if(comidaFavorita == "garbanzos"){
    console.log("Su comida favorita son los garbanzos");
}
else if(comidaFavorita == "chuleton"){
    console.log("Su comida favorita es el chuleton");
}else if(comidaFavorita == "brocoli"){
    console.log("Su comida favorita es el brocoli");
}else if(comidaFavorita == "garbanzos"){
    console.log("Su comida favorita son los garbanzos 222");
}
else {
    console.log("Ninguna de las opciones es la favorita");
}


let respuesta2 = "";
age = 15;
comidaFavorita = "macarrones";
if(age > 18 && comidaFavorita == "garbanzos"){
    respuesta2 = "esto es true en el if"
    console.log("Su comida favorita favorita son los garbanzos y tiene más de 18");
}else if(age > 18 || comidaFavorita == "garbanzos"){
    
    respuesta2 = "esto es true en el else if"
    console.log("Su comida favorita favorita son los garbanzos o tiene más de 18");
}else{
    
    respuesta2 = "esto es false"
    console.log("ni su comida favorita favorita son los garbanzos ni tiene más de 18");
}
console.log(respuesta2)

//Ternario --> otro tipo de comparación donde nos ahorramos el if y else
// COMPARACION ? SI SE CUMPLE : SI NO SE CUMPLE
age = 25;
comidaFavorita = "garbanzos";


age > 18 && comidaFavorita == "garbanzos" ? console.log("Su comida favorita favorita son los garbanzos y tiene más de 18") : console.log("su comida favorita favorita no son los garbanzos o no tiene más de 18");

age > 18 && comidaFavorita == "garbanzos" 
    ? console.log("Su comida favorita favorita son los garbanzos y tiene más de 18") 
    : age > 18 || comidaFavorita == "garbanzos" 
    ? console.log("Su comida favorita favorita son los garbanzos o tiene más de 18")
    : console.log("ni su comida favorita favorita son los garbanzos ni tiene más de 18")

let color = "verde"
let respuesta = color == "rojo" ? "Su color favorito es el rojo" : "Su color favorito no es el rojo";
console.log(respuesta)