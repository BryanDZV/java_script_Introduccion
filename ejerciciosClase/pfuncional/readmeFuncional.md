para ser funcional:

USAR:
funciones puras(siempre devuevlve lo mismo pra el mismo input, NO CAMBIA NI DEPENDE DEL EXTERRIOR )
no cambias los datos originales sean lo quea objeto array
comosicion de funciones(encadenas funciones ej: filter().map().reduce())


HERRAMIENTAS:
reemplazar bucles con .map(), .filter(), .reduce(), hazlo::

.map()	Transforma cada elemento	arr.map(x => x * 2)
.filter()	Filtra según condición	arr.filter(x => x > 10)
.reduce()	Acumula en un solo valor	arr.reduce((a, b) => a + b)
.every()	¿Todos cumplen la condición?	arr.every(x => x > 0)
.some()	¿Alguno cumple la condición?	arr.some(x => x === 5)
.find()	Encuentra el primero que cumple	arr.find(x => x === 3)
Object.entries() / Object.values() → convierten objetos en arrays


COMO PENSAR FUNCIONALMENTE: 

¿Qué quiero obtener? → Piensa en el resultado, no en los pasos.

¿Puedo usar una función pura? → Que no dependa de nada externo.

¿Puedo encadenar métodos? → Como array.map().filter().reduce()

¿Puedo evitar mutar datos? → Usa const, devuelve nuevos arrays u objetos.