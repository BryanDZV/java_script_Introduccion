/**
Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. 
La función sum sumara dos parametros a y b y los retornará. 
La función substract hará lo mismo pero restando y 
la función father recibirá como parámetros a, b y una función callback (sum o substract).
La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numbersList.
Ejecuta varias veces la función father y haz finalmente un console.log de numbersList

 */


const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    // let result = callback(a, b);
    // numbersList.push(result);
    numbersList.push(callback(a, b));
}

father(3, 5, sum)
father(4, 15, sum)
father(6, 5, sum)
father(3, 5, substract)
father(4, 15, substract)
father(6, 5, substract)

console.log(numbersList);
