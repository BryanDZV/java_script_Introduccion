// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

// Todos tus selectores inician con document...
const header = document.getElementsByClassName("header"); // Es muy importante las mayusculas y minusculas...
console.log(header);

const hero = document.getElementsByClassName("contenido-hero");
console.log(hero);

// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);

// getElementsByClassName no usa . en el nombre de la clase.

const boton = document.getElementsByClassName("color");

// — Pon solo el nombre de la clase, sin el punto ..
// getElementsByClassName devuelve una colección (HTMLCollection), no un solo elemento.
// — Por eso no puedes usar addEventListener directamente sobre boton.
// — Necesitas seleccionar un elemento dentro de esa colección, por ejemplo el primero:

const boton2 = document.getElementsByClassName("color")[0];
