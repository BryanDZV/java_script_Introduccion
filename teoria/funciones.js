

function nombre(parametro){
    console.log("soy instruccion de la  funcion",parametro);
};

nombre("soy el  valor de parametro");

function apellido(parametro){
    return `hola mundo ${pepe}`;
};
var pepe="soy pepe" //flujo da igual 

console.log(apellido("retornando"));

//argument palabra reservada acceso a parametros pasados a la funcion com indice

function sinParametros(){
    return `${arguments[0]}`;
};

console.log(sinParametros("sin paramentros"));
