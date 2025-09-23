// FILTER --> Recorre un array y para cada elemento, le ponemos una condición y si la cumple nos lo devuelve en un nuevo array
// ARRAY.FILTER((ELEMENTO) => ELEMENTO.PROPIEDAD == ALGO ) // Si cumple la condición nos devuelve ese elemento



const vengadores = [
    { name: "Tony", apellidos: "Stark", power: 100 },
    { name: "Steve", apellidos: "Rogers", power: 120  },
    { name: "Bruce", apellidos: "Banner", power: 200  },
    { name: "Natasha", apellidos: "Romanoff", power: 80  },
    { name: "Thor", apellidos: "Odinson", power: 220  },
    { name: "Clint", apellidos: "Barton", power: 70  },
  ];

const vengadoresFuertes = vengadores.filter((vengador) => vengador.power > 150);
// const vengadoresFuertes = vengadores.filter((vengador) => {
//     if(vengador.power > 150){
//         return vengador
//     }
// });
console.log(vengadoresFuertes)

const vengadoresConNombreEmpiezaT = vengadores.filter((vengador) => vengador.name.toLowerCase().includes('t'));
console.log(vengadoresConNombreEmpiezaT)


const vengadoresFuertesConNombreEmpiezaT = vengadores.filter((vengador) => vengador.name.includes('T') || vengador.power > 150);
console.log(vengadoresFuertesConNombreEmpiezaT)



const nombres = ["Pepe", "Juan", "Juan Antonio", "Antonio Manuel", "Maria", "Ana Luisa"]

const noPepes = nombres.filter((nombre) => !nombre.toLowerCase().includes('juan'));
console.log(noPepes)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filtrados = numbers.filter((num) => num % 3 === 0)
console.log(filtrados)
