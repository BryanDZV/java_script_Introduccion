// CLASE --> Definición de los atributos y funciones de un tipo de dato
// OBJETO --> Instancia o creación de un elemento de una clase --> elemento tiene las propiedades y funciones que definimos en la clase
// Atributos --> Propiedades de una clase
// Metodos --> Funciones de una clase

class Nombre{
    propiedad1;
    propiedad2;
    // .... propiedadN;

    constructor(propiedad1, propiedad2 /** ... propiedadN */) {         //con el constructor generamos un nuevo objeto de la clase
        this.propiedad1 = propiedad1;   // con this seleccionamos propiedades o funciones de nuestra clase
        this.propiedad2 = propiedad2;
        // ... this.propiedadN = propiedadN;
    }

    funcion1(){
        //Hago lo que sea
    }

    funcion2(){

    }

}


class Animal {
    nombre;
    tipo;
    _edad;           // Si quiero que una propiedad sea protected le pondré _
    #color;         // si quiero que una propiedad sea private le pondré #

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    comer(){
        console.log(`${this.nombre} está comiendo`);
    }

    // getter y setter  --> a mis propiedades las cogeré y la seteare a través de funciones

    getColor(){
        return this.#color;
    }

    setColor(color){
        this.#color = color;
    }

    _hazAlgo(){

    }

    #hazAlgo2(){

    }
}

let pepito = new Animal("Pepito", "Perro"); // con new y el nombre de la clase creo(instancio) un elemento(objeto) de la clase Animal
console.log(pepito)

pepito.comer();
pepito._edad = 5;
console.log(pepito)

pepito.setColor("negro");
console.log(pepito.getColor());

let juanito = new Animal("Juanito", "Gato");


class Vehiculo{
    ruedas;
    marca;

    constructor(ruedas, marca){
        this.ruedas = ruedas;
        this.marca = marca;
    }

    aparcar(){
        console.log(`Aparco mi vehiculo ${this.marca}`);
    }
}

class Coche extends Vehiculo{   //Tenemos una clase coche que es hija de vehiculo y que obtiene al extenderla sus propiedades y sus metodos
    color;
    cilindrada;

    constructor(marca, color, cilindrada){
        super(4, marca)             //con super accedemos al consstructor de la clase padre
        this.color = color;
        this.cilindrada = cilindrada;

    }
}

let miCoche = new Coche("ford", "amarillo", "2000cc");
console.log(miCoche);

miCoche.aparcar();

class Moto extends Vehiculo{
    color;
    _cilindrada;

    constructor(marca, color, cilindrada){
        super(2, marca);
        this.color = color;
        this._cilindrada = cilindrada;
    }

    get cilindrada(){
        return this._cilindrada;
    }

    
    set cilindrada(newValue){
        if(typeof newValue == 'string'){
            this._cilindrada = newValue;
        }
    }
}

let miMoto = new Moto("Kawasaki", "verde", "600cc");
console.log(miMoto);
miMoto.aparcar();

miMoto.cilindrada = 300;        //aquí estaríamos llamando al set
console.log(miMoto.cilindrada);     //aquí estaríamos llamando al get
miMoto.cilindrada = "800cc";
console.log(miMoto.cilindrada); 