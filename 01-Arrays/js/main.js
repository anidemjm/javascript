
/*
// Array creando mi primer array
var miArray = [ "Pepe", "Juan", "Maria"];
var valor2 = miArray[1];// Acceso a los valores del array
console.log(valor2);
console.log(miArray.length);// Para saber la cantidad de datos de  un array

// Conctenando arrays con el método concat
var miArray2 = new Array("Ferrari","Porsche", "Munstang");
var con = miArray.concat(miArray2);
console.log(con)


// Join devolver los valores de un array en una cadena de texto separados según el separador
var join = miArray.join(" ====> ");
console.log(join);

// usando pop() para eliminar el último valor del array
var borrar = miArray.pop();
console.log(borrar);
console.log(miArray);

// usando push() para añadir datos al final
miArray.push("Maria");
console.log(miArray);


// Array multidimensionales

let arr1 = ["Pepe","Fran","Irene"];// Array 1 con la información de nombres
// index       0     1       2
let arr2 = ["Ferrari","Seat","Prosche"];// Array 2 con información de coches
// index       0        1       2
// Array Multidimensional
let arrMult = [arr1,arr2];
// index        0     1
let nombre = arrMult[0][2];
console.log(nombre);

*/

// mi function para recorrer array multi....
function arrayMulti( fran ){
    for( let m = 0 ; m < fran.length ; m++ ){
        console.log( m+1 + " - Plato" );
        for( let i = 0 ; i < fran[m].length ; i++ ){
            console.log(fran[m][i]);
        }
    }
};

// Menú del día
let arr1 = ["Ensala","Pollo"];// primer plato
// index      0        1
let arr2 = ["Macarrones", "Canalones"];// segundo plato
// index         0             1
let arr3 = ["Flan", "Manzana"];// tercer plato
// index      0         1
// array mult...
let primerMenu = [arr1, arr2, arr3 ]; // Menú  

// index        0      1     2

// Menú del día
let arrr1 = ["Sopa de pescado","Salmon"];// primer plato
// index      0        1
let arrr2 = ["Carne a la brasa", "Pollo"];// segundo plato
// index         0             1
let arrr3 = ["Flan", "Pera"];// tercer plato
// index      0         1
// array mult...
let primerSegundo = [arrr1, arrr2, arrr3 ]; // Menú  

// index        0      1     2

console.log("***** Primer Menú *******");
arrayMulti( primerMenu );
console.log("****** Segundo Menú *******");
arrayMulti(primerSegundo);















