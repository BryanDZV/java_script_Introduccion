// SCOOPE -- AMBITO DE UNA VARIABLE

let nombre = "sergio";

for (let i = 0; i < 5; i++) {
    console.log("for",i,  nombre);
    
}

// console.log(i)       // no puedo acceder a la variable creada en un for//if  fuera de el

function diMiNombre(){
    let apellido = "pitel";
    console.log("funcion", nombre, apellido);
}

diMiNombre();

//console.log(apellido);  // no puedo acceder a la variable creada en una función fuera de ella



var heroe = "Superman";

if(true){
    var heroe = "hulk";
    console.log("dentro if", heroe);
}

console.log("fuera if", heroe);


let heroe2 = "Superman";
if(true){
    let heroe2 = "hulk";
    heroe2 = "spiderman"
    console.log("dentro if", heroe2);
}


console.log("fuera if", heroe2);