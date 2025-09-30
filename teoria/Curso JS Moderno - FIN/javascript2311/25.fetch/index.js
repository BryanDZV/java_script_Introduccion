

const getDigimons = (page = 0) => {
    
    fetch(`https://digi-api.com/api/v1/digimon?page=${page}`)
        .then((response) => response.json())    // Cuando hemos resuelto una petición de fetch con el .then necesitamos transformarla a formato json con .json
        .then((resJson) =>  pintarDatos(resJson)) // Hacemos otro then para resolver la promesa del .json y así obtener el body la respuesta
    
}

// getDigimons();

const getDigimonsAsync = async (page = 0) => {
    
    let response = await fetch(`https://digi-api.com/api/v1/digimon?page=${page}`);
    let resJson = await response.json();
    pintarDatos(resJson)
}

getDigimonsAsync();

let divs = document.createElement('div');
document.body.appendChild(divs);

const pintarDatos = ({content, pageable}) => {
    divs.innerHTML = '';

    console.log(content);
    for (const digimon of content) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h4 = document.createElement('h4');
        
        div.classList.add('digimon');
        
        h4.classList.add('digimon__title');
        h4.textContent = digimon.name

        img.setAttribute('src', digimon.image)
        img.setAttribute('alt', digimon.name)
        img.classList.add('digimon__image')

        div.appendChild(h4)
        div.appendChild(img);
        divs.appendChild(div);
    }

    if(pageable.currentPage > 0){
        let buttonMas = document.createElement('button');
        buttonMas.textContent = "anterior";
        buttonMas.addEventListener('click', () => getDigimons(pageable.currentPage - 1))
        divs.appendChild(buttonMas);
    }

    if(pageable.currentPage < pageable.totalPages){
        let buttonMas = document.createElement('button');
        buttonMas.textContent = "siguiente";
        buttonMas.addEventListener('click', () => getDigimons(pageable.currentPage + 1))
        divs.appendChild(buttonMas);
    }
}