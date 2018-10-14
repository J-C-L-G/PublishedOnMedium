// 1.   Por Defecto - Funcion ejecutada como “funcion”.

function regresaMiContexto(){
    return this;
}

function regresaMiContextoEnModoEstricto(){
    'use strict';
    return this;
}
console.log(regresaMiContexto());               //regresara el objeto 'window' en el browser o 'global' en NodeJS
console.log(regresaMiContextoEnModoEstricto()); //regresara undefined



// 2.  Implicito - Funcion ejecutada como “metodo”.

const persona = {
    name: 'carlos',
    leerNombre(){
        return this.name
    }
};

console.log(persona.leerNombre()); // carlos


// 3.  Explicito – Funcion ejecutada con “call / apply”.

const carlos = {
    name: 'carlos',
    leerNombre(){
        return this.name
    }
};
const jose = {
    name: 'jose'
};

console.log(carlos.leerNombre.call(jose));


// 4.  Enlazada – Funcion resultante de llamar una Funcion con “bind”.

const funcionEnlazadaAJose = carlos.leerNombre.bind(jose);

console.log(funcionEnlazadaAJose()); //jose


// 5.  Funcion Constructora – Funcion ejecutada utilizando “new”.


function Autos(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

const constructorEnlazado = Autos.bind({marca:'test', modelo:'test2', test:'1'});

console.log(new constructorEnlazado('1','2'));
console.log(new Autos('toyota', 2016));