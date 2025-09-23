console.log(document.body)
document.querySelector('title').textContent = "soy el nuevo titulo"

let myDiv = document.querySelector('div') // con querySelector selecciono un nodo de nuestro DOM (nuestro HTML)
console.log(myDiv)

let myDivClass = document.querySelector('.div'); // con .NOMBRECLASE selecciono el primero nodo que tenga esa clase
console.log(myDivClass)

let myDivId = document.querySelector('#div'); // con #NOMBRECLASE selecciono el primer nodo que tenga esa id
console.log(myDivId);

myDiv.textContent = "soy un div seleccionado por su tag";
myDivClass.textContent = "soy un div seleccionado por su clase";
myDivId.textContent = "soy un div seleccionado por su id";


let myP = document.querySelector('p');
myP.textContent = "soy un parrafo";

let myPs = document.querySelectorAll('.parrafito');
for (const parrafo of myPs) {
    parrafo.textContent = "soy un parrafito";
}

let myAnchor = document.querySelector('[href="http://google.com"]');
myAnchor.textContent = "enlace a google";

// Metodos antiguos para hacer seleccion de elementos
let ps = document.getElementsByTagName('p');
console.log(ps);

let parrafitos = document.getElementsByClassName('parrafito');
console.log(parrafitos);

let divId = document.getElementById('div');
console.log(divId);
divId.id = "idModificado";

let imagencita = document.querySelector('img');
console.log(imagencita.attributes);

imagencita.setAttribute('src', 'https://i.pinimg.com/474x/33/f6/b9/33f6b93b86a10325b6e86287d4aea1ce.jpg')
imagencita.classList.add('myImageClass');
imagencita.classList.add('myImageClass2');
imagencita.id = "id_imagencita"

imagencita.classList.remove('clase_borrar')



// myAnchor.style = "color: red; font-size: 20px";
myAnchor.classList.add('anchorClass');