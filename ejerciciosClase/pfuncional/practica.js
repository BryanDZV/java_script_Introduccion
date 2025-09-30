
/*Ejercicio 1: Mostrar claves cuyo valor sea string


Recibir un objeto y devolver un array con las **claves** cuyos **valores** sean de tipo `"string"`.*/


/*Ejercicio 2: Buscar claves con valores string hasta cierta profundidad


Recorrer un objeto (o array de objetos) y devolver las claves cuyos valores sean strings, **hasta una profundidad opcional** (por defecto 1).*/


/*

## 🧩 Nivel 1: Funciones encadenadas (map, filter, reduce)

### 🎯 Ejercicio 1: Filtrar y transformar
**Objetivo:** Dado un array de números, filtra los pares y multiplícalos por 10.

```js
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(resultado); // [20, 40, 60]
```

🔧 Practicas: `.filter()`, `.map()`, funciones puras

---

## 🔁 Nivel 2: Recursión básica

### 🎯 Ejercicio 2: Sumar todos los números en un objeto anidado
**Objetivo:** Recorrer un objeto y sumar todos los valores numéricos, sin importar la profundidad.

```js
const datos = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: "hola"
};

const sumarNumeros = (obj) => {
  let total = 0;

  const recorrer = (o) => {
    if (typeof o === "number") total += o;
    else if (typeof o === "object" && o !== null) {
      for (let clave in o) {
        recorrer(o[clave]);
      }
    }
  };

  recorrer(obj);
  return total;
};

console.log(sumarNumeros(datos)); // 6
```

🔧 Practicas: recursión, `typeof`, `for...in`

---

## 🧠 Nivel 3: Composición funcional

### 🎯 Ejercicio 3: Clasificar claves por tipo de valor
**Objetivo:** Recibir un objeto y devolver un nuevo objeto con arrays de claves agrupadas por tipo (`string`, `number`, etc.)

```js
const objeto = {
  nombre: "Bryan",
  edad: 30,
  activo: true,
  datos: { email: "b@x.com" }
};

const clasificarPorTipo = (obj) =>
  Object.entries(obj).reduce((acc, [clave, valor]) => {
    const tipo = typeof valor;
    acc[tipo] = acc[tipo] || [];
    acc[tipo].push(clave);
    return acc;
  }, {});

console.log(clasificarPorTipo(objeto));
// { string: ["nombre"], number: ["edad"], boolean: ["activo"], object: ["datos"] }
```

🔧 Practicas: `.entries()`, `.reduce()`, composición funcional

---

/*

- **Empieza por funciones pequeñas** que hagan una sola cosa.
- **Encadena funciones** como si fueran filtros de datos.
- **Recursión = función que se llama a sí misma** con un parámetro que cambia.
- **Composición = unir funciones puras** para transformar datos paso a paso.
*/
/*
¡Claro, Bryan! Aquí tienes 10 ejercicios en formato texto plano para ayudarte a **conceptualizar qué es un objeto en JavaScript y qué no lo es**, y cómo trabajar con ellos de forma funcional:

---

1. **Recorre un array de valores mixtos y devuelve solo los que no son objetos.**

2. **Crea una función que clasifique un valor según su tipo (`string`, `number`, `object`, etc.).**

3. **Dado un objeto con claves y valores de distintos tipos, devuelve solo las claves cuyos valores no sean objetos.**

4. **Transforma un array de valores primitivos en un array de objetos con la forma `{ tipo: "string", valor: "hola" }`.**

5. **Crea una función que reciba cualquier valor y devuelva `true` si es un objeto, excluyendo arrays y funciones.**

6. **Dado un array de objetos, filtra solo los que tienen al menos una propiedad cuyo valor no sea un objeto.**

7. **Convierte un objeto en un array de pares clave/valor, y filtra los pares donde el valor no sea un objeto.**

8. **Crea una función que recorra un objeto anidado y devuelva todos los valores que no sean objetos, respetando una profundidad máxima.**

9. **Dado un array con valores de distintos tipos, usa `reduce` para contar cuántos son objetos y cuántos no.**

10. **Escribe una función que reciba un objeto y devuelva un nuevo objeto con solo las propiedades cuyo valor sea un tipo primitivo.**

---
¡Claro, Bryan! Aquí tienes 10 ejercicios diseñados para ayudarte a **conceptualizar todo lo que hemos hablado en este chat**: programación funcional, recursión, tipos de datos, funciones puras, profundidad, composición, y más. Están escritos en formato texto plano para que puedas enfocarte en la lógica sin distracciones 👇

---

1. **Crea una función pura que reciba dos números y devuelva su suma, sin modificar ninguna variable externa.**

2. **Dado un objeto con valores de distintos tipos, devuelve un array con las claves cuyos valores sean strings, respetando una profundidad máxima.**

3. **Convierte un array de objetos en un nuevo array que contenga solo los valores tipo número, usando `map` y `filter`.**

4. **Escribe una función que reciba un objeto y devuelva un nuevo objeto con solo las propiedades cuyo valor sea un tipo primitivo.**

5. **Usa `reduce` para contar cuántos valores tipo string hay en un array de valores mixtos.**

6. **Crea una función que recorra un objeto anidado y devuelva todos los valores tipo string, sin usar `for`, solo con funciones funcionales.**

7. **Dado un array de objetos, filtra los que tengan al menos una propiedad cuyo valor no sea un objeto.**

8. **Escribe una función que reciba un objeto y devuelva un array con las claves y valores tipo string, en formato `[clave: valor]`.**

9. **Transforma un objeto en un array de pares clave/valor, y luego filtra los pares donde el valor sea un número mayor que 10.**

10. **Crea una función que reciba un array de objetos y devuelva un nuevo array con los valores tipo string encontrados en todos ellos, respetando una profundidad opcional.**

---



*/ 