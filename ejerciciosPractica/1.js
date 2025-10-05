/*Crea una función esperar(ms, callback) que espere los milisegundos indicados y después llame al callback.*/
// function esperar(ms,callback){
//     setTimeout(()=>{
//         let resultado="hola";

//         callback(resultado);
//     },ms)
// };

// esperar(2000,(x)=>{
// console.log(x);

// });
/*Crea una función saludar(nombre, callback) que imprima "Hola <nombre>" tras 1 segundo y luego ejecute el callback.*/
// function saludar(nombre,callback){
//     setTimeout(()=>{
//         console.log("hola "+nombre);
//         callback();
//     },1000)
// }
// saludar("pedro",()=>{
//     console.log("saludo terminado");

// })

/*Ejercicio 3
ctrl + k ctrl +c o ctrl +u
Simula una secuencia encadenada con callbacks:
1️⃣ “Cargando datos”
2️⃣ “Procesando datos”
3️⃣ “Mostrando resultados”
Cada paso tarda 1 segundo.*/

// function procesos(dato, cargandoDatos) {
//   setTimeout(() => {
//     console.log("cargado datos");

//     setTimeout(() => {
//       console.log("procesando datos");

//       setTimeout(() => {
//         console.log("mostrando datos");
//         console.log(dato);
//       }, 3000);
//     }, 2000);
//   }, 1000);
// }
// procesos("pepe", () => {
//   console.log("terminado");
// });
/* CALL BACKS
Son funciones que se pasan a otra función como argumento. 
Se utilizan para ejecutar código después de que una tarea asíncrona (como una solicitud de red) se complete. 
Al anidar múltiples callbacks para operaciones secuenciales, puede surgir un "callback hell", un código desorganizado y difícil de mantener. */

/*Ejercicio 4
/*¿Qué son lPRMOESAS?
Son objetos que representan un valor eventual que podría estar disponible en el futuro, o un error. 
Tienen tres estados: pendiente (inicial), cumplida (con éxito) o rechazada (con error). 
Proporcionan una forma más limpia y estructurada de manejar la asincronía. 
Los métodos .then() se usan para manejar el éxito, .catch() para errores, y .finally() para ejecutar código independientemente del resultado. */

/*Crea una promesa que se resuelva en 2 segundos con el mensaje "Tarea completada".*/

// let promesa = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (!(2 % 2 === 1)) {
//       resolve("tarea resuelta");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// promesa
//   .then(function (resultado) {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally((fin) => {
//     console.log("se ha terminado");
//   });

/*Ejercicio 5

Crea una promesa comprobarEdad(edad) que:

se resuelva con "Mayor de edad" si edad >= 18

se rechace con "Menor de edad" en caso contrario.*/
// let miPromesa = new Promise((resolve, reject) => {
//   let resultado = "";
//   let edad = 18;

//   setTimeout(() => {
//     if (edad >= 18) {
//       resultado = "es mayor de edad";
//       resolve(resultado);
//     } else {
//       resultado = "no es mayor de edad";
//       reject(resultado);
//     }
//     console.log("resulto despues de 1 segundo");
//   }, 1000);
// });

// miPromesa.then((x) => {
//   console.log(x);
// });

// function comprobarEdad(edad) {
//   return new Promise((resolve, reject) => {
//     if (edad >= 18) {
//       resolve("mayor de dedad");
//     } else {
//       reject("no es mayor de edad");
//     }
//   });
// }
// comprobarEdad(20).then((x) => {
//   console.log(x);
// });
//console.log(resultado);

/*Ejercicio 6

Encadena tres promesas:
1️⃣ “Conectando”
2️⃣ “Descargando”
3️⃣ “Listo”

Cada una tarda distinto tiempo.*/

function conectar(params) {
  console.log();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("conectando");
    }, 1000);
  });
}
conectar()
  .then(descargar)
  .then(listo)
  .then((x) => {
    console.log(x);
  })
  .catch((err) => console.error(err));
