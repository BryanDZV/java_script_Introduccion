//var --> creamos una variable // Forma antigua y es mejor usar let o const
//let --> creamos una variable // Forma nueva y recomendada
//const --> creamos una constante



//String
let cadena = "mi cadena";
console.log(cadena);

cadena = "este es el nuevo valor de mi cadena";
console.log(cadena);
console.log(typeof cadena);
//Number
let numero = 5;

//Boolean
let miBoleano = true;


//Null undefined
let variable = null; 
let variable2 = undefined; 
console.log(variable2);

cadena = 5;
console.log(cadena);


// Typeof nos dice el tipo de dato de mi variable
console.log(typeof cadena);

// Array es un listado de valores de cualquier clase y están dentro de corchetes [];
let myArray = [3, 4, "pepe", true];

// Objeto es un conjunto de claves y valores de cualquier clase y están dentro de  llaves {};
let objeto = {
    nombre: "sergio",
    apellido: "pitel",
    edad: 37,
    isAlive: true,
    ciudadesFavoritas: ["pamplona", "jerez de los caballeros"],
    padre: {
        nombre: "carlos"
    }
};

function hola(){
    console.log("hola soy una funcion");
}

hola()