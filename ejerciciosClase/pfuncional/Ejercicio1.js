/*CREA UNA FUNCION QUE RECIBIA UN ARRAY CON CADENA DE CARACTERES Y QUE DEVUELVA 
LAS QUE TENGAN UNA LONGITUD MAYOR A 3
CREAR OTRA FUNCION QUE RECIBIA NUMEROS Y QUE DEVUELVE LOS PARES
CREAR OTRA FUNCION QUE DEVUELVA LOS MENORES E IGUALES QUE 3*/

const palabras = ["sol", "luna", "mar", "cielo"];
const numeros = [1, 2, 3, 4, 5, 6];

//USANDO FILTER NATIVO

let maestra=palabras.filter(f);
let num=numeros.filter(fx);
let menores=numeros.filter(fj);

//logicas funciones definas
function f(p){
    if (p.length>3) {
        return p;
    }
};
function fx(n){
    if (n%2==0) {
        return n ;
    }
    
}

function fj(n){
    if (n<=3) {
        return n;
    }
}

//resultado
console.log(maestra);
console.log(num);
console.log(menores);


