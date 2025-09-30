// PASAMOS DE --> FUNCTION NOMBRE (PARAMETROS) { CONTENIDO FUNCION }
// A --> CONST NOMBREFUNCTION = (PARAMETROS) => { CONTENIDO FUNCION }

function diHola(nombre){
    console.log("Hola",nombre);
}

const diHolaArrow = (nombre) => {
    console.log("Hola Arrow",nombre);
}

diHola("pepito");
diHolaArrow("juanito");

const suma = (num1 = 5, num2 = 3) => {
    return num1 + num2;
}

console.log(suma())
console.log(suma(2))
console.log(suma(8, 4))

const diMiNombre = (nombre) => nombre;

console.log(diMiNombre("juanito"))

const multiplicacion = (num1 = 5, num2 = 6) => num1 * num2;
console.log(multiplicacion());


const pudeConducir = (edad, tieneVehiculo) => (edad >= 18 && tieneVehiculo) ? "puede Conducir" : "No puede";

console.log(pudeConducir(22, false));
console.log(pudeConducir(18, true));


const returnObject = () => ({name: "pepe", apellido: "perez"})
console.log(returnObject())