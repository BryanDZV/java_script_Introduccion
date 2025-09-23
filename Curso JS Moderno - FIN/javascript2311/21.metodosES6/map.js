// MAP --> recorremos un array, lo tratamos y devolvemos un nuevo array
// array.MAP((elemento) => { HAGO LO QUE SEA CON ELEMENTO Y LO DEVUELVO })

const superheroes = [
  {
    name: "Peter Parker",
    alias: "SpiderMan",
  },
  {
    name: "Bruce Wayne",
    alias: "BatMan",
    img: "https://www.shutterstock.com/shutterstock/photos/2287604763/display_1500/stock-vector-batman-design-logo-sign-icon-art-mask-gotham-city-style-face-head-flash-wing-walk-walking-war-fight-2287604763.jpg",
  },
  {
    name: "Clark Kent",
    alias: "SuperMan",
  },
];

const aliasSuperheroes = superheroes.map((heroe) => heroe.alias);
console.log(aliasSuperheroes);

const superheroesArrayWithID = superheroes.map((heroe, index) => ({
  ...heroe,
  id: index + 1,
}));
console.log(superheroesArrayWithID);

const superheroesWithImage = superheroes.map((heroe) =>
  heroe.img
    ? heroe
    : {
        ...heroe,
        img: "https://brideofbigfoot.files.wordpress.com/2012/04/random-superhero-name-generator.png",
      }
);
// const superheroesWithImage = superheroes.map((heroe) => {
//     if(heroe.img){
//         return heroe
//     }else{
//         heroe.img = "https://brideofbigfoot.files.wordpress.com/2012/04/random-superhero-name-generator.png";
//         return heroe;
//     }
// })

console.log(superheroesWithImage);

const heroesFiltrados = superheroes.map(
  (heroe) => heroe.alias != "BatMan" && heroe.alias != "SuperMan" && heroe
);
// const heroesFiltrados = superheroes.map((heroe) => {
//     if(heroe.alias != "BatMan") {
//         return heroe
//     } } )
console.log(heroesFiltrados);

const vengadores = [
  { name: "Tony", apellidos: "Stark" },
  { name: "Steve", apellidos: "Rogers" },
  { name: "Bruce", apellidos: "Banner" },
  { name: "Natasha", apellidos: "Romanoff" },
  { name: "Thor", apellidos: "Odinson" },
  { name: "Clint", apellidos: "Barton" },
];

const getNameSurname = ({name, apellidos}, i, array) => `${i} ${name} ${apellidos} ${array[i].name}`
const vengadoresArray = vengadores.map(getNameSurname)
console.log(vengadoresArray)