// function cambiarTitulo() {
//   const myTitle$$ = document.querySelector("h1");
//   // console.log(myTitle$$);
//   myTitle$$.textContent = "ACABO DE CAMBIAR DE TEXTO";
// }
const cambiarTitulo = () => {
  const myTitle$$ = document.querySelector("h1");
  // console.log(myTitle$$);
  myTitle$$.textContent = "ACABO DE CAMBIAR DE TEXTO";
};



// const devolverMiArray = () => {
//     let array =  ["peras","manzans","granada","platanos"]
//     for (const fruta of array) {
//         if (fruta==="peras") {
//             array= fruta
//         }
//     }
//     // console.log(array);
//     // console.log("estoy dentro");
//     return array
// }
// // console.log(devolverMiArray());
// const nuevoArray = devolverMiArray()
// console.log(nuevoArray);
// console.log(array);

const saludar = () => {
    alert("Hola Genaro")
}
const leerTecla = () => {
    const myInput$$ = document.querySelector("input")
    console.log(myInput$$.value);
}
const leerInput = () => {
    const myInput$$ = document.querySelector(".buscador")
    console.log(myInput$$.value);
}

const myButton$$ = document.querySelector(".sumar")

const sumar = (event) => {
    console.log(event);
    event.target.innerText= " acabo de cambiar"
    // console.log("esto es una suma");
}
// console.log(myButton$$);
// myButton$$.onclick= sumar

myButton$$.addEventListener("click", sumar)

const inputEvento$$ = document.querySelector(".evento")
// console.log(inputEvento$$);
const leerEvento = (event) => {
console.log(event.target.value);
}

inputEvento$$.addEventListener("input",leerEvento)

const resizeWindows = (event) => {
console.log(event);
}
window.addEventListener("resize",resizeWindows)
const calcular=() => {
    
    const input1$$ = document.querySelector(".numero1")
    const input2$$ = document.querySelector(".numero2")
    
    const num1 = input1$$.value
    const num2 = input2$$.value
    
    let resultadop$$ = document.createElement("p")
    resultadop$$.innerText = parseInt(num1) + parseInt(num2)
    document.body.appendChild(resultadop$$) 
   
}

