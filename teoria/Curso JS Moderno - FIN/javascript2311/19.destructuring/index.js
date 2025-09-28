const superman = {
    nombre: 'clarkito kenecito',
    alias: 'Superman',
    planeta: 'Kripton',
    profesion: 'periodista',
    contacto: { email: 'superman@gmail.com', telefono: '900900900' }
}

const nombreSuperman = superman.nombre;
console.log(nombreSuperman)


const {planeta, profesion} = superman;

console.log(planeta, profesion)

const getMyHeroName = ({nombre, contacto, ...restElements}) => {
    const {telefono} = contacto;
    console.log(nombre, telefono, restElements)
}

getMyHeroName(superman)

const {alias, ...newSuperman} = superman;
console.log(newSuperman);
console.log(superman);


//arrays
const numeros = [5, 78, 91, 102]
const [pepito, juanito, manolito, maria] = numeros
console.log(pepito, juanito, maria);