const carrito = [
  {
    name: "pantalon",
    cantidad: 1,
    precio: 20,
    exento: false,
  },
  {
    name: "camiseta",
    cantidad: 2,
    precio: 10,
    exento: false,
  },
  {
    name: "zapatos",
    cantidad: 1,
    precio: 50,
    exento: false,
  },
  {
    name: "calcetines",
    cantidad: 3,
    precio: 3,
    exento: true,
  },
];

const total = carrito
  .filter(
    (producto) => producto.name == "zapatos" || producto.name == "pantalon"
  )
  .reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);

console.log(total);

const vengadores = [
  { name: "Tony", apellidos: "Stark", power: 100 },
  { name: "Steve", apellidos: "Rogers", power: 120 },
  { name: "Bruce", apellidos: "Banner", power: 200 },
  { name: "Natasha", apellidos: "Romanoff", power: 80 },
  { name: "Thor", apellidos: "Odinson", power: 220 },
  { name: "Clint", apellidos: "Barton", power: 70 },
];

const totalPowerUpper150 = vengadores
  .filter((vengador) => vengador.power > 150)
  .reduce((suma, vengador) => vengador.power + suma, 0);
console.log(totalPowerUpper150);

const arrayNumerosNumeros = [
  [5, 8, 10],
  [4, 2, 8],
  [9, 6, 2],
];

const totalNumerosMenorIgual5 = arrayNumerosNumeros.map((arrayNumero) =>
  arrayNumero.filter((numero) => numero <= 5).reduce((suma, numero) => suma + numero, 0)
).reduce((suma, numero) => suma + numero, 0);

console.log(totalNumerosMenorIgual5);
