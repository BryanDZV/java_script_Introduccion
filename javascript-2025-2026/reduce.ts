import { it } from 'vitest';
// sumArray([1,2,3]) -> 6

// numberOfEvens([1,2,3,4]) -> 2

// acronym(['As', 'Soon', 'As', 'Possible']) -> 'ASAP'

// function reduce()

let numeros=[1,2,3];
function sumar(array:number[]) {
    let acc :number =0;
    
    for (let i = 0; i < array.length; i++) {
        acc += array[i];
        
    }
    return acc;
}
console.log(sumar(numeros));
///
let pares=[1,2,3,4];

function numberOfEvens(pares:number[]) {
    let acc :number =0;
    for (let i = 0; i < pares.length; i++) {
        if (pares[i]%i==0) {
            acc++;
        }
        
    }
    return acc;
};
console.log(numberOfEvens(pares));
///
let palabras=['As', 'Soon', 'As', 'Possible'];

function acronym(palabras:string[]) {
    let acc :string ="";
    for (let i = 0; i < palabras.length; i++) {
        let palabra= palabras[i];
        acc+=palabra[0];
        
    }
return acc;
    
}
console.log(acronym(palabras));

//function reduce()

export function reduce<T,U>(f: (acc: U, x: T) => U, initial: U, xs: T[]): U {
    let acc = initial;
    for (const x of xs) {
        acc = f(acc, x);
    }
    return acc;
}

//funciones logica
function operacion(acc: number, elem: number): number {
    return acc + elem;
}


function agregarPrimeraLetra(acc: string, palabra: string): string {
    return acc + palabra[0];
}

function contarPares(acc: number, elem: number): number {
    return elem % 2 === 0 ? acc + 1 : acc;
}


//uso


let resultado = reduce( operacion, 0,numeros);
console.log(resultado); // 6

let acronimo = reduce( agregarPrimeraLetra, "",palabras);
console.log(acronimo); // "ASA


let totalPares = reduce( contarPares, 0,pares,);

console.log(totalPares); // 2
