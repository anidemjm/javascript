// POO - Programación Orientada a Objetos

// Qué son los objetos
const coche = {
    marca: "Ferrari",
    color: "Rojo",
    numRuedas: 4,
    aireAcondicionado: true,
    arrancar: function() {
        console.log("Brruumm, brrrum");
    },
    frenar: function() {
        console.log("Stop!!");
    }
};


// Acceder a la propiedad de un objeto --> dot notation (notación de punto)
// nombreDelObjeto.propiedad
// nombreDelObjeto.método()


// // Constructores --> Función que crea objetos. // Línea de montaje
// function Coche() {
//     this.marca = "Ferrari";
//     this.color = "Rojo";
//     this.numRuedas = 4;
//     this.arrancar = function() {
//         console.log("Brruumm, brrrum");
//     };
//     this.frenar = function() {
//         console.log("Stop!!");
//     };
// }

// // this hace referencia al contexto en el que se encuentra

// let ferrari = new Coche(); // Esto es una instancia del constructor Coche. Instanciar un objeto.

// // instanceof - Para saber si un objeto es instancia de un Constructor
// console.log('¿Ferrari es instancia de Coche?', ferrari instanceof Coche);
// console.log('¿Ferrari es instancia de Coche?', coche instanceof Coche);


// Mini ejercicio
// 1. Crea un constructor (se original)
// 2. Instancia un objeto con ese constructor
// 3. Comprueba si el objeto instanciado es instancia del Constructor


// // Constructores con parámetros
// function Coche(marca, color) {
//     this.marca = marca;
//     this.color = color;
//     this.numRuedas = 4;
//     this.arrancar = function() {
//         console.log("Brruumm, brrrum");
//     };
//     this.frenar = function() {
//         console.log("Stop!!");
//     };
// }

// let ferrari = new Coche('Ferrari', 'Rojo');


// // own properties (propiedades de él mismo)
// let renault = new Coche('Renault', 'Negro');

// // Para saber si una propiedad es ownProperty podemos usar el método .hasOwnProperty()
// for (let property in ferrari) {
//     if(ferrari.hasOwnProperty(property)) {
//         console.log('La own property es ', property);
//     }
// }


// protypes --> Las propiedades que están en el prototipo de un constructor se comparten en todas las instancias del constructor

// function Coche(marca, color) {
//     this.marca = marca; // own property
//     this.color = color; // own property
// }

// Coche.prototype.numRuedas = 4; // Añadimos una prototype property

// let ferrari = new Coche('Ferrari', 'Rojo');


// Propiedad Constructor - Constructor Property
// Todos los objetos instanciados tienen una propiedad especial llamada constructor, que es una referencia a la función
// constructor que generó la instancia. Nos sirve para ver qué tipo de objeto es.

// La propiedad constructor puede ser sobrescrita. Por eso, es mejor utilizar instanceof


// // Podemos establecer el prototype con un objeto que ya contiene las propiedades. Añadimos todos de golpe

// function Coche(marca, color) {
//     this.marca = marca; // own property
//     this.color = color; // own property
// }

// Coche.prototype = {
//     numRuedas: 4,
//     arrancar: function() {
//         console.log('Brummm brummm');
//     },
//     frenar: function() {
//         console.log('Stop!');
//     }
// };
// // Si lo hacemos de esta forma (setear el prototype con un objeto) nos estamos cargando el objetoInstanciado.constructor
// let ferrari = new Coche('Ferrari', 'Azul');



// Establecer el protype con un objeto sin cargarnos el objetoInstanciado.constructor
function Coche(marca, color) {
    this.marca = marca; // own property
    this.color = color; // own property
}

Coche.prototype = {
    constructor: Coche,
    numRuedas: 4,
    arrancar: function() {
        console.log('Brummm brummm');
    },
    frenar: function() {
        console.log('Stop!');
    }
};
// Si lo hacemos de esta forma (setear el prototype con un objeto) nos estamos cargando el objetoInstanciado.constructor
let ferrari = new Coche('Ferrari', 'Azul');

// Un objeto hereda su prototype de la función que lo ha instanciado
Coche.prototype.isPrototypeOf(ferrari); // Permite comprobar si un objeto es protipo del prototipo de la función creadora


// Todos los objetos en JS (salvo alguna excepción) tienen prototype. El propio objeto prototype es un objeto

// ferrari.hasOwnProperty(property)