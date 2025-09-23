const nombres = ["pepe", "maria", "juan"];

const indice = nombres.indexOf("juan");
console.log(nombres[indice]);

// FIND --> Recorrer el array y para cada elemento comprueba una condición y nos devuelve el primer elemento que la cumpla
// array.FIND((elemento) => ELEMENTO.PROPIEDAD == ALGO) --> El que primero cumpla la condición nos lo devuelve
const vengadores = [
  { name: "Tony", apellidos: "Stark", power: 100 },
  { name: "Steve", apellidos: "Rogers", power: 120 },
  { name: "Bruce", apellidos: "Banner", power: 220 },
  { name: "Natasha", apellidos: "Romanoff", power: 80 },
  { name: "Thor", apellidos: "Odinson", power: 220 },
  { name: "Clint", apellidos: "Barton", power: 70 },
];

const power220 = vengadores.find((vengador) => vengador.power == 220);
console.log(power220);

const powerUp100 = vengadores.find((vengador) => vengador.power > 100);
console.log(powerUp100);

const powerUp100NombreH = vengadores.find(
  (vengador) =>
    vengador.power > 100 && vengador.name.toLowerCase().includes("h")
);
console.log(powerUp100NombreH);

const numeros = [5, 78, 1202, 12, 56, 46];

const numeroMayor50 = numeros.find((numero) => numero > 50);
console.log(numeroMayor50);

// FINDINDEX y FINDLASTINDEX
const primerIndice = numeros.findIndex((numero) => numero > 50);
console.log(primerIndice);

const ultimoIndice = numeros.findLastIndex((numero) => numero > 50);
console.log(ultimoIndice);

const personas = [
  { nombre: "Cristian", edad: 25, sexo: "Masculino" },
  { nombre: "Ana", edad: 20, sexo: "Femenino" },
  { nombre: "Fernando", edad: 15, sexo: "Masculino" },
  { nombre: "Alejandra", edad: 11, sexo: "Femenino" },
];

const primerFemenino = personas.find((persona) => persona.sexo.toLowerCase().includes("f") && persona.edad < 18);
console.log(primerFemenino)
