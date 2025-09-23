let nombre = "sergio";
let apellido = "pitel";

let nombreApellido = "Mi nombre es " + nombre + " y mi apellido es " + apellido;

console.log(nombreApellido);

let nombreApellidoTemplateString = `Mi nombre es ${nombre} y mi apellido es ${apellido}`;

console.log(nombreApellidoTemplateString);

let persona = {
    name: "pepito",
    surname: "perez",
    email: "perez@gmail.com",
    image: "https://i.pinimg.com/474x/35/0c/4c/350c4ce3e8b0f507332eacc8b50e4241.jpg"
}

let miDiv = document.createElement('div');

miDiv.innerHTML = `
    <h4>${persona.name}</h4>
    <h5>${persona.surname}</h5>
    <img src="${persona.image}" alt="${persona.name}"/>
    <p>${persona.email}</p>
`

// ANTES DE TEMPLATE STRINGS LO HUBIERAMOS HECHO ASÍ
// miDiv.innerHTML = "<h4>" + persona.name + "</h4>" +
//     "<h5>" + persona.surname + "</h5>" +
//     "<img src="+ persona.image + " alt=" + persona.name + "/>" +
//     "<p>" + persona.email + " </p>"



document.body.appendChild(miDiv);


const arrayFrutas = ["sandia", "pomelo", "paraguaya"]

for (const fruta of arrayFrutas) {
    let miP = document.createElement('p')
    miP.innerHTML = `La siguiente fruta es: <span>${fruta}</span>`
    document.body.appendChild(miP)
}