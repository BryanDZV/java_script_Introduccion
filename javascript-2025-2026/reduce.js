"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = reduce;
// sumArray([1,2,3]) -> 6
// numberOfEvens([1,2,3,4]) -> 2
// acronym(['As', 'Soon', 'As', 'Possible']) -> 'ASAP'
// function reduce()
var numeros = [1, 2, 3];
function sumar(array) {
    var acc = 0;
    for (var i = 0; i < array.length; i++) {
        acc += array[i];
    }
    return acc;
}
console.log(sumar(numeros));
///
var pares = [1, 2, 3, 4];
function numberOfEvens(pares) {
    var acc = 0;
    for (var i = 0; i < pares.length; i++) {
        if (pares[i] % i == 0) {
            acc++;
        }
    }
    return acc;
}
;
console.log(numberOfEvens(pares));
///
var palabras = ['As', 'Soon', 'As', 'Possible'];
function acronym(palabras) {
    var acc = "";
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        acc += palabra[0];
    }
    return acc;
}
console.log(acronym(palabras));
//function reduce()
function reduce(f, initial, xs) {
    var acc = initial;
    for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
        var x = xs_1[_i];
        acc = f(acc, x);
    }
    return acc;
}
//funciones logica
function operacion(acc, elem) {
    return acc + elem;
}
function agregarPrimeraLetra(acc, palabra) {
    return acc + palabra[0];
}
function contarPares(acc, elem) {
    return elem % 2 === 0 ? acc + 1 : acc;
}
//uso
var resultado = reduce(operacion, 0, numeros);
console.log(resultado); // 6
var acronimo = reduce(agregarPrimeraLetra, "", palabras);
console.log(acronimo); // "ASA
var totalPares = reduce(contarPares, 0, pares);
console.log(totalPares); // 2
