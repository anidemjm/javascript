





/*
// Declaración de la function
function saludar(){
   console.log("Hola desde una función");
}


// Llamar function
saludar();


// Parametros se pasan por valor
// Declaramos y le asignamos valor a la varibles globles
let variable = 100;
let n2 = 2; 

// función en la que vamos a modificar los valores que vienen por parametro
function sumer( n1, n2 ){
    n1 = 50;// modificar valor del parametro n1
    n2 = 20;// modificar valor del parametro n2
    console.log("****** Dentro de la function **********");
    console.log("valor de n1 : " + n1 );// aquí vemos que se han modificado;
    console.log("valor de n2 : " + n2 );// aquí vemos que se han modificado;
}

// llamamos a la function pasandole los valores
sumer( variable, n2 );

// observar que las varibles no han sido modificadas
console.log("****** Fuera de la function *******");
console.log("Valor de la variable: " + variable);
console.log("Valor de la variable: " + n2);

let n = "Marcos";
let a = "Martin";
let c = "marcos@neoland.es";

setUser( n, a, c );


let n1 = 100;
let n2 = 200;

sumar2( n1 );

let n1 = 2;
let n2 = 3;

let s = sumar3( n1, n2 ); 

console.log( "El resultado de la suma es : " + s );

let numero1 = 2;
let numero2 = 10;
let numero3 = 100;

let m = mult( numero1 ,numero2, numero3 );

console.log( m );

let n1 = 123;
let n2 = 234;
let n3 = 244;

let s = sumar4();

console.log("La suma es : " + s );


let field = "";
let check =  checkField(field);

console.log("Check = " + check);

// Informa
if(check){

    console.log("El pago se ha realizado correctamente.");

}else{

    console.log("Error de pago!!!");

}


let n1 = 30;
let n2 = 25;

let resultado = cualMasGrande( n1, n2 );

alert(resultado);
let nombreConcesionario = "coches.net";
let coches = ["Ferrari","Porsche","Tesla","Bogatiy","Seat","Renault","Nissan","Volvo"];


coches("coches.net","Seu d´ Urgel nº 22", "Ferrari","Porsche","Tesla","Bogatiy","Seat","Renault","Nissan","Volvo");

let lista = ["Macarrones","Manzanas","Peras","Aire acondiconado"];
// index         0            1         2            3
console.log("**** desde un for ********")
for (let i = 0; i < lista.length ; i++){
    
    console.log(lista[i])
}

console.log("******** mostrada desde el parametro Spread **********")
listaCompra(...lista);

let n1 = "300";
let nN = +n1 
let n2 = 23;
console.log( nN + n2 );//

let n = "323,99";// Tenemos un string que reprensenta un número con coma.
// replace("lo buscado", "por lo que queremos remplazar") 
let nPunto = n.replace(',','.');// remplazar coma por punto
let nNumber = Number(nPunto);// Pasamos a Number
console.log("Tipo : "+ typeof nNumber);// de que tipo es
console.log(nNumber + 2);// Suma 

let bool = true;
console.log(typeof bool);
let boolString = String(bool);
console.log(typeof boolString);


let nString = "20";

console.log( isNaN( 20 ) );

if( !isNaN(nString) ){
    console.log("Pasando a Number");
    nString = +nString;
}

console.log(typeof nString);


let a = "32.22";
let aInt = parseInt(a);
console.log(aInt);
let aNumber = Number(a);
console.log(aNumber);

let n = parseInt("2A", 16);
console.log(n)

let n = "22.344P43";
let nInt = parseInt(n);
console.log(nInt);
let nFloat = parseFloat(n);// Number()
console.log(nFloat);
let nNum = Number(n);
console.log(nNum);

let n = 22;

function sumar(){
    n = 50;
    console.log("Dentro: " + n);
}

sumar();
console.log( "Fuera: " + n);


let miNumero = 22;// Global
miNumero = 22 + 22;

function sumer(){
    let miNumero = 2;// Local
    miNumero =  miNumero + 2
    console.log("Dentro: " + miNumero);
}
sumer();
console.log("Fura "+miNumero);



let nString = "20";

console.log("tipo variable: " + typeof nString)

console.log("JS " + isNaN(nString) );

console.log("Nuestra: " + miIsNaN(nString) );

if( miIsNaN(nString) ){
    console.log("Pasando a Number");
    nString = +nString;
}

console.log(typeof nString)


let miAnonima = function(){
    console.log("Hola desde una function Ánonima ");
}

miAnonima();


function sumar1(n1,n2){

    let s = n1 + n2;
    return s;
}

let resultado = sumar1(2,4);

console.log("Sumar: " + resultado);

resultado = resultado + 200;
console.log(resultado);// resultado 6



// llamada a sumar pasando function anonima
sumar22( 2, 4, function(d){

   // d = d + 200;

    console.log(d);

});

sumar22(2, 4, function(d){
    //let s  = d;
    d = d * 10;

    //console.log(s);
    console.log(d);
})


// ()=>{ cuerpo de la functio }
function nombreFunctio(){
    // Cuerpo de function
}


// Pasar number string
let numero = 1234;
console.log(typeof numero);
let numeroString = numero.toString();
console.log(typeof numeroString);

let st1 = "LuNes";
st1m = st1.toLowerCase();
console.log(st1m);
st1u = st1.toUpperCase();
console.log(st1u);

let texto = "Hola estamos en el curso de Javascript";
let busqueda = texto.indexOf("en");

if (busqueda < 0){
    console.log("Palabra no encontrada");
}else{
    console.log("Palabra encontrada");
}

console.log(busqueda);

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let buscado = texto.indexOf("curso");
console.log("Primera palabra encontrada: "+buscado);
let busqueda = texto.lastIndexOf("curso");
console.log("Segunda palabra encontrada: "+busqueda);

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let busqueda = texto.match("curso");
console.log(busqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let busqueda = texto.match(/curso/g);
console.log(busqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let startBusqueda = texto.startsWith("Hola");
console.log(startBusqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let startBusqueda = texto.endsWith("!!!");
console.log(startBusqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
let startBusqueda = texto.includes("curso");
console.log(startBusqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";
// substr(donde comienza, cuantos caracters queremos sacar)
let startBusqueda = texto.substr(19,5);
console.log(startBusqueda); 

let texto = "Hola estamos en el curso de javascript, este curso es genial!!!";

let startBusqueda = texto.charAt(20);
console.log(startBusqueda); 

let numero = "12,23" ;
console.log(numero);
let startBusqueda = numero.replace(",", ".");
console.log(startBusqueda);
*/