// Arrays
const comidaArrays = ["garbanzos", "lentejas", "macarrones", "sandia"];
const numeros = [5, 67, 89];
const mezclo = ["patata", 56, true, numeros]


console.log("Quiero coger el segundo elemento de mi array comidas", comidaArrays[1])


// LENGTH --> numero de elementos de un array --> LEN GO TO HELL 
console.log("El numero de elementos de mi array comidas", comidaArrays.length)


comidaArrays[1] = "paella";
console.log("Quiero coger el segundo elemento de mi array comidas", comidaArrays[1])
console.log("Quiero ver el primer elemento del array que está en la posicion cuarta de mezclo", mezclo[3][2]);

// podemos tratar un string como un array
console.log("Quiero ver el numero de letras de mi tercera comida", comidaArrays[2].length);
console.log("quiero ver la tercera letra de la cuarta palabra de mis comidas", comidaArrays[3][2])
comidaArrays[3] = "fideua";
console.log("Quiero coger el cuarto elemento de mi array comidas", comidaArrays[3])
