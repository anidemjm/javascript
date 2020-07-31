/*

let telefono = Object.create(telefono.prototype);


let mixinJugar =  function(obj) {
obj.play = function() {
console.log("Estoy jugando");
}

};


let steam = {
     color: 'negro',
     numJuegos: 20

}

let Battlenet = {
    color: 'azul'
    plataForma: 'PC'
};

mixinJugar(steam);
mixinJugar(Battlenet);

*/

/*
function Elem1 () {
    let private = 'Esto esta chapado';    
   
    this.publicAccess = function () {
        return private;
    };

    // return {
    //     publicAccess: function () {
    //         return private;
    //     }
    // }
}; 

let instancia = new Elem1();


// instancia.publicAccess()  - se accede de forma pública

// instancia.private - En privado.

 */


const startup = {
    division1: "software",
    division2: "hardware",
    planta: 4,
    numDeTrabajadores: 10,
    obtieneBeneficios: true,
    generar: function() {
        console.log("picando código");
    },
    frenar: function() {
        console.log("Stop!!");
    }
};

function startup(){

};

startup.prototype = {
 
        constructor: startup,
        proyectos = true,


}


