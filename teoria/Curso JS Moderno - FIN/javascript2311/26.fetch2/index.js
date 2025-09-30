let divs = document.createElement('div');
document.body.appendChild(divs);
divs.classList.add('characters');
let page = 1;

const characters = async (page) => {
    const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    console.log(result)
    const resJson = await result.json();
    console.log(resJson)

    drawCharacters(resJson);
}


const drawCharacters = ({results, info}) => {
    divs.innerHTML = '';
    console.log(results)
    for (const character of results) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h4  = document.createElement('h4');


        img.setAttribute('src', character.image)
        img.setAttribute('alt', character.name)

        h4.textContent = character.name

        div.appendChild(h4);
        div.appendChild(img);
        divs.appendChild(div);
    }
    drawButtons(info)
} 

const drawButtons = ({pages}) => {
    if(page < pages){
        let buttonSiguiente = document.createElement('button');
        buttonSiguiente.textContent = "Siguiente";
        buttonSiguiente.addEventListener("click", ()=>characters(++page)) // con ++page incremento la variable antes de usarla
        divs.appendChild(buttonSiguiente)
    }

    if(page > 1){
        let buttonAnterior = document.createElement("button");
        buttonAnterior.textContent = "Anterior";
        buttonAnterior.addEventListener("click", ()=>characters(--page)) // con --page decremento la variable antes de usarla
        divs.appendChild(buttonAnterior);
    }
}


characters(page)
