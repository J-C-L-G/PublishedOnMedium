/**
 * Clase Padre
 */
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.leerNombre = function(){
    return this.nombre;
};

Persona.prototype.leerEdad = function(){
    return this.edad;
};


/**
 * Clase Hija
 */
function Programador(nombre, edad, empresa, lenguajeDeProgramacion){
    Persona.call(nombre, edad);
    this.empresa = empresa;
    this.lenguajeDeProgramacion = lenguajeDeProgramacion;
}
//-- Crear cadena de prototipos
Programador.prototype = Object.create(Persona.prototype);
Programador.prototype.constructor = Programador;

Programador.prototype.leerEmpresa = function(){
    return this.empresa;
};

Programador.prototype.leerLenguajeDeProgramacion = function(){
    return this.lenguajeDeProgramacion;
};

/**
 * Prueba de Herencia
 */

var juan = new Persona('juan', 30);
console.log(juan instanceof Persona);
console.log(juan instanceof Programador);

var carlos = new Programador('carlos', 31, 'Macys', 'JavaScript');
console.log(carlos instanceof Persona);
console.log(carlos instanceof Programador);

