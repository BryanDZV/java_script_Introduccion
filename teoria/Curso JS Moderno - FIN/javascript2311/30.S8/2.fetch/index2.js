/*
Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>



const baseUrl = 'https://api.nationalize.io?name=';



En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado 
y que si el usuario hace click en este botón eliminemos el parrafo asociado.
*/

const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector('input');
const button = document.querySelector('button');


const getFetch = () => {
    fetch(`${baseUrl}${input.value}`)
            .then((response) => response.json())
            .then((resJson) => drawName(resJson))
}

drawName = ({country, name}) => {
    console.log(country);
    for (const element of country) {
        let p = document.createElement('p');
        let button = document.createElement('button');
        p.textContent = `El nombre ${name} tiene un ${element.probability * 100} porciento de ser de ${element.country_id}`;
        button.textContent = "X";
        p.addEventListener('click', () => p.remove());
        
        p.appendChild(button);
        document.body.appendChild(p);
    }

}

button.addEventListener('click', getFetch);