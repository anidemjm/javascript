


// if 
/*
var a = 300;
var b = 200;

if( a > b ){
    console.log("A es mayor");
};

// if else
if( a > b ){
    console.log(" A es mayor ");
}else if( a < b ){
    console.log(" B es mayor ");
}else{
    console.log(" A = B ");
}

// switch - case
let dias = "Martes"
switch ( dias ){

    case "Lunes":
        console.log("ir a comer con los amigos");
    break;

    case "Martes":
        console.log("Estudiar programción ");
    break;

    case "Miercoles":
        console.log("Estudiar programción ");
    break;

}
*/
// For 
// for (inicializar variable; condición a cumplir ; incremento del contador ){bloque de instruciones }
/*
for( let i = 0 ; i <= 10 ; i++ ){
    console.log("2 x " + i + " = " + 2 * i);
}

var arr = ["Manzanas", "Peras", "Naranjas"];
        
for(let i = 0; i < 3 ; i++ ){
    console.log(arr[i]);
}

// bucle while
let a = 0;
while( a < 10 ){
    
    console.log(a);
    a++;
}

let a = 0;
do{
    console.log(a);
    a++;
}while( a < 10)


let alumnos = new Array();
let miNombre;

do{

    miNombre = prompt("¿Cúal es tu nombre?" );

    if ( miNombre != "" && miNombre != null ){

        alumnos.push(miNombre);

    }else{

        alert("Escribe un nombre");

    }
        console.log(miNombre);

}while( miNombre != null );




let numeros = new Array();// Declaración del array
let num; // declaración de una varible num
let i = 0; // inicializamos la varible i a 0
// while hasta 2
while( i < 2){

    num = prompt("Pon un número");// pop-up parara introducir valores
   
    let c = Number(num);
  
    if( !isNaN(c) ){

        numeros.push(num);// metemos los valores en la arry
        i++;// incrementa el contador

    }

}
// condicionales, numero 1 mayor numero 2 
if( numeros[0] > numeros[1]){

    alert(numeros[0] + " es el mayor");
// condicional, numero 1 menor a numero 2
}else if( numeros[0] < numeros[1] ){

    alert(numeros[0] + " es menor");

// son inguales
}else{

    alert("Son iguales");
}


let i = 0;// inicializamos el contador
let nombre;// declaramos una varible global
// while con la condicion de que i sea menor 1
while( i < 1){

    nombre = prompt("Pon un nombre");// lanzamos el prompt
    // Verificamos que el campo no este vacio
    if ( nombre == ""){
        alert("Pon un nombre...");// mostramos un alerta error 
    }else{
        alert("Hola " + nombre);// mostrmos por alerta el saludo
        i++;// incrementamos contador
    }

}



let checkDia = false;

do{
    let dia = prompt("¿Pon un día?");
    dia = dia.toLowerCase;

    switch ( dia ){
        case "lunes":
            alert("Comer con los amigos");
            checkDia = true;
        break;

        case "martes":
            alert("Cenamos con los amigos");
            checkDia = true;
        break;

        case "miercoles":
            alert("estudiar porgramación");
            checkDia = true;
        break;
        default:
            alert("Pon un día...");
    }
    

}while( checkDia != true )


let numero
let i = 0;
while( i < 1 ){

    numero = prompt( "Pon un número..." );

    if ( numero > 0 && numero < 11 ){
        
        for( let i = 1 ; i <= 10  ; i++ ){
            console.log( numero + " x " + i + " = " + i*numero );
        };

        i++;

        }else{
    
            alert("Poner un número entre 1 y 10 " + i);
            
    };

   
}

*/


let arr = ["Pepe", "Anna", "Lucia"];

for( index in arr ){
    console.log(arr[index]);
}
























