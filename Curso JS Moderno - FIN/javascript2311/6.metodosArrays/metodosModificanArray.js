const comidas = ["macarrones", "paella", "judias verdes"];


//POP --> elimina el último elemento del array //Nos da la opción a recuperar el elemento eliminado

let eliminado = comidas.pop();
console.log(comidas);
console.log(eliminado);


//PUSH --> añadir uno o más elementos a mi array
comidas.push("Alcachofas", eliminado);
console.log(comidas);

//REVERSE --> invierte el orden del array
comidas.reverse();
console.log(comidas);


//SHIFT --> Elimina el primer elemento del array //Nos devuelve el elemento eliminado
let eliminado2 = comidas.shift();
console.log(comidas);
console.log(eliminado2);


//SPLICE --> elimina uno o varios elementos segun parametros que reciba //nos devuelve los elementos eliminados
//1 -- Inidice desde donde modificamos
//2 -- Numero de elementos a eliminar
//3 -- Nuevos elementos a añadir en la posición que hemos definido en el parametro 1

let eliminados = comidas.splice(0, 0);
console.log(comidas);
console.log(eliminados)

comidas.splice(comidas.length - 2, 0, "Judias verdes", "Gambas")
console.log(comidas);


//SORT => Ordenar Alfabeticamente
comidas.sort();
console.log(comidas)


const numeros = [50, 345, 24, 60];
numeros.sort()
console.log(numeros);


numeros.sort(function(a, b){
    console.log(a, b)
    return b - a;
})

console.log(numeros);
// [50, 345, 24, 60]
// [50, 24, 345, 60]
// [24, 50, 345, 60]
// [24, 50, 345, 60]
// [24, 50, 60, 345]