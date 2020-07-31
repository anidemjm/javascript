



// acceso al DOM
/*
// acceso por getElementById
let parrafo = document.getElementById("texto");
let textoParrafo = parrafo.innerHTML

console.log(textoParrafo);
*/
/*
// acceso por getElementsByClassName creamos un array
let parrafos = document.getElementsByClassName("bg")[0];
console.log(parrafos)

let parrafo1 = parrafos[0];
let textoParrafo1 = parrafo1.innerHTML; 
console.log(textoParrafo1);

// Acceso al DOM Por la TagName creamos un array
let parrafos = document.getElementsByTagName("p");
let parrafo2 = parrafos[0]
console.log(parrafo2);

// querySelector()
// querySelector por clase
let parrafo = document.querySelector(".saludo");
console.log(parrafo);

// querySelector por ID
let parrafo = document.querySelector("#sal");
console.log(parrafo);

// querySlector por etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);
// cambiar texto con innerHTML
let mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Angular";

let mainTitle = document.getElementById("mainTitle");
mainTitle.style.color= "red";
mainTitle.style.padding = "20px";
mainTitle.style.display = "block";


// Creando etiuqeta <p></p>
let parrafo = document.createElement("p");

// creado un texto ---> Hola a tod@s
let texto = document.createTextNode("Hola mundo!!!");

// añadir texto al parrafo <p>Hola mundo!!!</p>
parrafo.appendChild(texto);

// coger el div de html y traer lo al js
let div = document.querySelector("#curso"); 

//añadir el parrafo al div
div.prepend(parrafo);

// traer el div

let div = document.querySelector("#b-group");
div.className = "b-background-yellow";


let status = true;// booleana---> dos estados true, false 

let divCaja = document.querySelector("#b-group");

if(status){
    divCaja.style.display = "none";
}else{
    divCaja.style.display = "block";
}

let div2 = document.querySelector("#b-group1");
div2.style.color = "red";
div2.style.background = "yellow";




let nombre = "Fran"

let plantilla = `
                <div>
                    <ul>
                        <li>1- Manzana</li>
                        <li>2- Pera</li>
                    </ul>
                    <p>Profesor del curso es: ${nombre}</p>
                </div>
`
let div3 = document.querySelector("#b-group1");
div3.innerHTML = plantilla;

// creamos la array
let cursos = ["HTML", "CSS", "Javascript", "Angular", "NodeJS","PHP", "Laravel"];

// index        0       1         2            3         4
// array[index]
// nos traemos deonde vamos a pintar
let div3 = document.querySelector("#b-group1");
let ul = document.createElement("ul");
// recorrer la array
let i;
for ( i in cursos ){
    let li = document.createElement("li");
    let texto = document.createTextNode(cursos[index]);
    // <li>texto</li>
    li.append(texto);
    // <lu><li>Texto</li></lu>
    ul.append(li);
    // <div><lu><li>texto</li></lu></div>
    div3.append(ul);

}

let divs = document.querySelectorAll(".roja");
divs[1].style.background ="yellow";
console.log(divs[1]);
*/