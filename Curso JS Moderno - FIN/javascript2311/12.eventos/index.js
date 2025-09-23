function saluda(nombre, evento){
    console.log("Hola", nombre, evento);
}

function adios(evento){
    console.log("Adios", evento);
}

let buttonAdios = document.querySelector('.adios');

buttonAdios.addEventListener('click', adios);
buttonAdios.addEventListener('click', function(){
    console.log("Adios Clicked");
});

let div1 = document.querySelector('.div1');
div1.addEventListener('mouseenter', function(){
    console.log("entro en div 1")
    div1.style = "background-color: green;";
});

div1.addEventListener('mouseout', function(){
    console.log("salgo de div 1")
    div1.style = "background-color: red;";
});


let input = document.createElement('input');
document.body.appendChild(input);

input.addEventListener('focus', function(ev){
    console.log("tengo el foco", ev.target);
})
input.addEventListener('input', function(ev){
    console.log("tecleo ", input.value, ev);
})
input.addEventListener('change', function(){
    console.log("cambio a ", input.value);
})
input.addEventListener('keyup', function(){
    console.log("key up ", input.value);
})


let darkButton = document.querySelector('.dark');

darkButton.addEventListener('click', function(){
    buttonAdios.classList.toggle('noche')
})


darkButton.addEventListener('click', (ev) => saluda("pepe", ev))