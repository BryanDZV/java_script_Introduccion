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
----
this. es el objeto sin ella la bariable es windows o global es mutable
llaar a una funcion de objetoo con windows y this 
bind devuevle una funcion cuyo this es cambiado por la funcion call de dentro.... no llama a ala fucnion crea una funcion que devuevle una fucion call que cambia el this q le pases a esa funcion
en las arrow funcitno this esn inmutable y se refiere a windows o global
funcion constructora con new
proorype

EJERCICIO
