/**
 * Clase Padre
 */
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    leerNombre(){
        return this.name;
    }
    leerEdad(){
        return this.edad;
    }
}


/**
 * Clase Hija
 */
class Programador extends Persona{
    constructor(nombre, edad, empresa, lenguajeDeProgramacion){
        super(nombre, edad);
        this.empresa = empresa;
        this.lenguajeDeProgramacion = lenguajeDeProgramacion;
    }
    leerEmpresa(){
        return this.empresa;
    }
    leerLenguajeDeProgramacion(){
        return this.lenguajeDeProgramacion;
    }
}

/**
 * Prueba de Herencia
 */

const juan = new Persona('juan', 30);
console.log(juan instanceof Persona);
console.log(juan instanceof Programador);

const carlos = new Programador('carlos', 31, 'Macys', 'JavaScript');
console.log(carlos instanceof Persona);
console.log(carlos instanceof Programador);