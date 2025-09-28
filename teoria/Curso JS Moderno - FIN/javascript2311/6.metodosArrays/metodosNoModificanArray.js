const comidas = ["macarrones", "paella", "judias verdes"];

//CONCAT --> concatenar dos arrays y nos devuelve el nuevo

const newComidas = comidas.concat(["tomate", "garbanzos"])
console.log(newComidas);
console.log(comidas);   

//JOIN --> devuelve un string con nuestros elementos y el separador

let joinComidas = comidas.join(" @ ");
console.log(joinComidas);


// SLICE --> Devuelve un array con elementos
// 1 -- indice desde devolvemos un nuevo array
// 2 -- indice donde termina el nuevo array

const sliceComidas = newComidas.slice(1, 2)
console.log(sliceComidas);


//ToString --> convertir el array en string
const toStringComida = comidas.toString();
console.log(toStringComida);
