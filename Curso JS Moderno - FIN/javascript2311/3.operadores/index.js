// OPERADORES ARITMETICOS

// Suma --> +
// Resta --> -
// Multiplicación --> *
// División --> /
// Resto --> %


let a = 5;
let b = 2;

console.log("Suma: ", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación: ", a * b);
console.log("División:", a / b);
console.log("Resto:", a % b);

//OPERADORES LÓGICOS
// Y --> &&
// O --> ||
// NO --> !

let tengoCarnet = false;
let tengoCoche = true;
let tengoMoto = true;
let tengoPrestado = true;

let puedoConducir = tengoCarnet && (tengoCoche || tengoMoto || tengoPrestado); 
console.log("puedo conducir", puedoConducir);

let tengoEfectivo = false;
let tengoTarjeta = false;
console.log("puedo pagar", tengoEfectivo || tengoTarjeta);

