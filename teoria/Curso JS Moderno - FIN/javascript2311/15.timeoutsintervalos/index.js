// setTimeout( function, tiempo)

setTimeout( () => {console.log('di hola');}, 3000);

console.log('adios');


setTimeout( () => {console.log('di hola de nuevo');}, 6000);




// setInterval(function, tiempo)
let contador = 0;

let miIntervalo = setInterval(
    () => {
        console.log('aqui estoy', contador);
        contador++;
        if(contador == 10){
            clearInterval(miIntervalo);
        }

    }, 1000);


let miP = document.querySelector('p');

let arrayMensajes = [
    "Hola bienvennido a nuestra web",
    "que disfrutes visitandola",
    "sabemos que es muy cutre",
    "ya pondremos al cristo de homer bailando"
]

let contadorTexto = 0;
let miIntervalo2 = setInterval(() => {
    miP.textContent = arrayMensajes[contadorTexto];
    contadorTexto++;
    if(contadorTexto == arrayMensajes.length){
        // contadorTexto = 0;
        clearInterval(miIntervalo2);
    }
}, 2000);

let miButton = document.querySelector('button');
let miDiv = document.querySelector('div');


let contador2 = 0;


const iniciarContador = () => {
    let intervalo = setInterval(() => {
        miDiv.textContent = contador2
        contador2+=10;
    
        if(contador2 > 1000){
            clearInterval(intervalo)
        }
    }, 1000)
}


miButton.addEventListener('click', iniciarContador)