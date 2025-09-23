let div = document.createElement('div');
document.body.appendChild(div);

div.innerHTML = "<p>soy un parrafito</p>"

let divFrutas = document.querySelector('.frutas');

const arrayFrutas = ["sandia", "melon", "naranja", "fresa"];

for (const fruta of arrayFrutas) {
    let pFruta = document.createElement('p');
    pFruta.textContent = fruta;
    divFrutas.appendChild(pFruta);
}

const superheroes = [
    {
        name: "Spiderman",
        power: 60,
        ciudad: "nueva york",
        image: "https://c8.alamy.com/compes/2h1d1y8/ilustracion-de-poder-de-spiderman-que-presenta-el-editorial-del-heroe-2h1d1y8.jpg"
    },{
        name: "Hulk",
        power: 150,        
        ciudad: "boston",
        image: "https://www.muralesyvinilos.com/murales/510000960_hulk_enfadado_y_saltando.jpg"
    },{
        name: "Superman",
        power: 500,        
        ciudad: "chicago",
        image: "https://unamglobal.unam.mx/wp-content/uploads/2023/06/destacada-superman.jpg"
    }
]

const divHeroes = document.querySelector('.heroes');

superheroes.forEach(function(hero) {
    const divHero = document.createElement('div');
    divHero.classList.add('hero');

    let h4Hero = document.createElement('h4');
    h4Hero.textContent = hero.name;

    let imgHero = document.createElement('img');
    imgHero.setAttribute('src', hero.image)
    imgHero.setAttribute('alt', hero.name);

    divHero.appendChild(h4Hero);
    divHero.appendChild(imgHero);
    divHeroes.appendChild(divHero);
});

let div2 = document.createElement('div');
div2.textContent = "pepito div";


let main = document.querySelector('main');

let footer = document.querySelector('footer');

main.insertBefore(div2, divHeroes)

console.log(main.parentNode)
console.log(main.firstElementChild)
console.log(main.lastElementChild)
console.log(footer.hasChildNodes())