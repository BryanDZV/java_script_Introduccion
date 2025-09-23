const comidas = ["macarrones", "paella", "judias verdes", "paella", "judias verdes"];

//INDEX OF --> devuelve la primera posicion donde esta un elemento
const paellaIndexOf = comidas.indexOf("paella");
console.log(paellaIndexOf);

//LAST INDEX OF --> devuelve la ultima posicion donde esta un elemento
const paellaLastIndexOf = comidas.lastIndexOf("paella");
console.log(paellaLastIndexOf);


//INCLUDES --> nos devuelve true o false dependiendo de si un elemento está o no en el array
let includesMacarrones = comidas.includes("macarrones");
console.log(includesMacarrones);


let includesGarbanzos = comidas.includes("Garbanzos");
console.log(includesGarbanzos);