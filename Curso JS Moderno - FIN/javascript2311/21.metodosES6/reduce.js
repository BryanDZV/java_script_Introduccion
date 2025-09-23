const vengadores = [
    { name: "Tony", apellidos: "Stark", power: 100 },
    { name: "Steve", apellidos: "Rogers", power: 120  },
    { name: "Bruce", apellidos: "Banner", power: 200  },
    { name: "Natasha", apellidos: "Romanoff", power: 80  },
    { name: "Thor", apellidos: "Odinson", power: 220  },
    { name: "Clint", apellidos: "Barton", power: 70  },
  ];

  // REDUCE --> lo usamos para recorrer un array y por cada elemento sumar en un acumulador algo y devolver ese valor
  // array.REDUCE((ACUMULADOR, ELEMENTO) => ACUMULADOR + ELEMENTO.PROPIEDAD, VALOR INICIAL DEL ACUMULADOR )

  const totalPower = vengadores.reduce((acc, vengador) => acc + vengador.power ,0)
  console.log(totalPower)


  const carrito = [
    {
        name: "pantalon",
        cantidad: 1,
        precio: 20,
        exento: false
    },
    {
        name: "camiseta",
        cantidad: 2,
        precio: 10,
        exento: false
    },
    {
        name: "zapatos",
        cantidad: 1,
        precio: 50,
        exento: false
    },
    {
        name: "calcetines",
        cantidad: 3,
        precio: 3,
        exento: true
    }
]


const precioTotal = carrito.reduce((total, prenda) => prenda.exento ? total + prenda.precio*prenda.cantidad: total + prenda.precio*prenda.cantidad*1.21 , 0)
console.log(precioTotal)

const numeros = [5, 7 ,8]

console.log(numeros.reduce((total, numero) => total + numero, 0))

const textos = ["juan", "pepe", "maria"]

console.log(textos.reduce((total, texto) => total + texto, ""))