const heroes = ["spiderman", "Thor", "hulk"]
const villanos = ["joker", "dr octopus", "duende verde"]

const heroesCopia = heroes;

// heroesCopia.pop();

// console.log(heroesCopia);
// console.log(heroes);


// SPREAD OPERATOR --> Podemos hacer una copia de un array o un objeto 

const heroesSpread = [...heroes]        // Copia en un nuevo array todos los elementos de mi array original
heroesSpread.pop()
console.log(heroesSpread);
console.log(heroes);

const heroesSpread2 = [...heroes, "batman", "superman"]
console.log(heroesSpread2);

const personajes = [...heroes, ...villanos]
console.log(personajes);

let arrayPersonajes = ["batman", "superman", "spiderman"]

const addPersonaje  = (personaje) => {
    arrayPersonajes = [personaje, ...arrayPersonajes]
}

const addPersonajes  = (personajes) => {
    arrayPersonajes = [...arrayPersonajes, ...personajes]
}

addPersonaje("hulk")
addPersonajes(["ironman", "thor"])
console.log(arrayPersonajes)



const heroe = {
    nombre: "Clark Kent",
    alias: "Superman",
    planeta: "Kripton"
}


const datos = {
    email: "superman@gmail.com",
    telefono: "900900900"
}

const newHeroe = {...heroe, profesion: "periodista", contacto: {...datos}, nombre: "clarkito kenecito"}

console.log(newHeroe)
console.log(heroe)




const stringArray = [..."pepito"]
console.log(stringArray)

const objeto = {..."pepito"}
console.log(objeto)