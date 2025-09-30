// FUNCION CALLBAK ES AQUELLA QUE PASAMOS COMO PARAMETRO PARA LUEGO UTILIZARLA

const hola = (juanito) => {
    console.log(`Hola ${juanito}`);
}
const adios = (texto) => {
    console.log(`Adios ${texto}`);
}

function adios2(nombrecito) {
    console.log(`Adios ${nombrecito}`);
}

const saludar = (funcion, nombrePintar) => { //Recibo como parametro una funcion
    funcion(nombrePintar);                   //Utilizo la funcion que recibo como parametro
}   

saludar(hola, "pepe");
saludar(adios, "juanito");
saludar(adios2, "felipito");



const suma = (num1, num2) => {
    console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
}

const resta = (num1, num2) => {
    console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
}

const multiplicacion = (num1, num2) => {
    console.log(`La multiplicacion de ${num1} y ${num2} es ${num1 * num2}`);
}

const division = (num1, num2) => {
    console.log(`La division de ${num1} y ${num2} es ${num1 / num2}`);
}


const operacion = (num1, num2, opera) => {
    opera(num1, num2);
}

operacion(4, 6, multiplicacion)
operacion(5, 8, suma)
operacion(40, 6, division)
operacion(6, 99, resta)