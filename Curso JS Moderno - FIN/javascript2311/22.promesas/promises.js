//PROMESAS

//Peticiones de informacion que serán resueltas en algún o serán rechazadas
// new Promise((RESUELTO, RECHAZADO) => HAREMOS ALGO TANTO CUANDO SEA RESUELTA O CUANDO SEA RECHAZADA)

const promise = new Promise((resolve, reject) => {
    // resolve --> lo que pasa cuando se resuelve
    // reject --> lo que pasa cuando se rechaza
});


const saluda = (nombre) => {
    const promise = new Promise((resolve, reject) => {
        if(!nombre){
            return reject("no tengo nombre")
        }
        setTimeout(() => {
            resolve(`Hola ${nombre}`);
        },3000)
    });

    return promise;
}

console.log(saluda("pepe"));

// Como resolvemos la promesa??
// Utilizaremos .then((RESPUESTA) => HACEMOS LO QUE SEA CON LA RESPUESTA ) --> con .then esperaremos a cuando la promesa sea resuelta y entonces haremos lo que sea;
// Utilizaremos .catch((ERROR DEL REJECT) => HACEMOS LO QUE SEA CON EL ERROR) --> recogemos el reject con .catch cuando la promesa sea rechazada y haremos lo que sea con su respueta.

saluda("pepe").then((response) => console.log(response)).catch((error) => console.log(error));
saluda().then((response) => console.log(response)).catch((error) => console.log(error));

// console.log("promesa fetch", fetch("http://as.com"))

const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
        if(!item){
            return reject("no tengo item")            
        }
        if(!list){
            return reject("no tengo lista")
        }
        list.push(item);
        resolve(list)
    })
    return promise
}

addItem("pepe", ["maria"]).then((res) => console.log(res)).catch((err) => console.log(err))