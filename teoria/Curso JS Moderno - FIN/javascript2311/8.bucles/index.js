//BUCLE FOR
// 1-- Variable inicial --> normalmente la iniciamos a 0
// 2-- Condición --> condición que necesitamos cumplir para salir del bucle
// 3-- Modificador para mi variable inicial --> normalmente sumar 1

for(let i = 0; i < 10; i++) {
    console.log("EStoy en la vuelta", i);
}


const comidas = ["macarrones", "paella", "judias verdes"];
for(let i = 0; i < comidas.length; i++) {
    console.log("Mi comida es", comidas[i]);
}

const personas = [
    {
        name: "Pepe",
        surname: "Perez",
        email: "pepe@gmail.com",
        city: "New York",
        edad: 50
    },{
        name: "Juan",
        surname: "Perez",
        email: "juan@gmail.com",
        city: "Chicago",
        edad: 25
    },{
        name: "Manolo",
        surname: "Perez",
        email: "manolo@gmail.com",
        city: "Boston",
        edad: 31
    }
]

let edadTotal = 0;

for (let index = 0; index < personas.length; index++) {
    const persona = personas[index];
    console.log(persona.name);
    // console.log(personas[index].name);
    edadTotal += persona.edad;
}

console.log(edadTotal);

// total += numero ==> total = total + numero
// total -= numero ==> total = total - numero
// total *= numero ==> total = total * numero
// total /= numero ==> total = total / numero



//BUCLE FOREACH
// array.forEach(function(element) {       // De mi array cojo un elemento
//     // hago lo que sea con el elemento del array
// });

personas.forEach(function(persona){
    console.log(persona.city);
})

comidas.forEach(function(comida){
    console.log(comida);
})



// BUCLE FOR OF
// for(let elemento of array){ HACEMOS LO QUE SEA }
edadTotal = 0;

for(let persona of personas){
    if(persona.name == "Pepe"){
        console.log(persona.email);

    }
    edadTotal += persona.edad;
}

console.log(edadTotal);



//BUCLE FOR IN
// es específico para objetos
// for(let propiedad(key) in objeto){ Hacemos lo que sea con la propiedad }
let pepe = personas[0];

for( let juanito in pepe){
    console.log("la propiedad", juanito, "tiene el valor", pepe[juanito])
}


for(let key in personas){
    console.log(key)
    console.log(personas[key].city)
}

for(let persona of personas){
    for( let key in persona){
        if(key == "edad" && persona[key] > 25){
            console.log("la propiedad", key, "tiene el valor", persona[key])
        }
    }
}