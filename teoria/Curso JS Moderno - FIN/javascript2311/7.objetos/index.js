// OBJETO --> pares de propiedad o clave(key) y valor(value)
// let objeto = {
//      clave1: valor1,
//      clave2: valor2,
//      clave3: valor3
// }

const persona = {
    nombre: "sergio",
    apellido: "pitel",
    edad: 37,
    isAlive: true,
    ciudadesFavoritas: ["pamplona", "jerez de los caballeros"],
    padre: {
        nombre: "carlos"
    }
};

console.log(persona.nombre);
console.log(persona['apellido']);

persona.edad = 38;
console.log(persona);

// persona = "pepitos";

const frutas = ["sandia", "melon"]
frutas.push("naranja");
console.log(frutas);

// frutas =  ["sandia", "melon"]

persona.ciudad = "Alcorcon";
console.log(persona);