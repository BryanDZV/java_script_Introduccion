las funciones son objetos es decir tiene claves y atributos
object es una funcino
iterar con values y entrys 
iterar con in
unobjeto es iterable comom un array
en un objeto se gurda tambien coleciones pero se accede mediante clave -valor donde la clave es el indice
y un array es indexado
pseudoarray ??¿Un pseudo-array en JavaScript es un objeto que se comporta un poco como un array, pero no es un array real.

Tiene índices numéricos (0, 1, 2…) y una propiedad length.

No tiene los métodos de los arrays reales (push, map, filter, etc.) a menos que se los añadas o conviertas.
Cuando en una función usas arguments:

function prueba(a, b, c) {
  console.log(arguments[0]); // a
  console.log(arguments.length); // 3
  // arguments.push(4); // ❌ Error, no es un array real
}


arguments parece un array (tiene índices y length), pero si intentas hacer arguments.push(4) te da error.
Esto es un pseudo-array.

array propotype.map

destructuring array objetos
importante concepto clave:valor y familiarizarse con sintaxis


sintaxisgify(objeto) te convierte en json

y desde json a o
JSON.parse(objeto) se convierte a json

EJERCICIO
crea una funcion que reciba un objeto y que muestre sus claves de tipo string
(sit teiensun objeto a:"sdsa" b:"asd"c:1 d:{})
solo muestra las claves que teng strin a b

2 ejercicio continuacion

la funcion recibe un parametro opcional que sea la profundidad a la que quieres buscar y q por defecto sea 1(mira como psar parametros opcionales maxDeep=1 es un ejempli ose al profuncidad de buscadena encadenada);;mandado