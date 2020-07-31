//Desarollado por JMMR

'use strict';

/* Variables que almacenaran los datos de cada personaje */
var character1;
var character2;
/* Variable que almacenará el dato del turno, la utilizaremos para saber a quién le toca atacar */
var turn = 0;
/* Variables relacionadas con nuestra ventana modal */
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modalContent");
var span = document.getElementsByClassName("close")[0];
/* Variables relacionadas con nuestros botones */
var btnFight = document.getElementById('button-fight');
var btnRestart = document.getElementById('button-restart');
/* Sección de log */
var logGame = document.getElementById('log-game');
/* Variables relacionadas con barras de vida */
var healthBar1 = document.getElementById('health-bar-player1');
var healthBar2 = document.getElementById('health-bar-player2');



/* Definición de la clase del personaje */
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}



/**
 * Construcción del personaje seleccionado
 * 
 * @param pokemonSelected  Pokémon seleccionado por el usuario, el nombre.
 * @param player           El jugador 1 o 2          
 */
function buildCharacter(pokemonSelected, player) {
  /* Construimos el personaje con sus estadísticas */
  let character = new Character(pokemonSelected, generateRandomNumb(100, 85), generateRandomNumb(100, 70), generateRandomNumb(70, 40))

  /* Comportamiento de la imagen del personaje
    Según el pokémon seleccionado cambiamos el src de la imagen, para mostrar el que corresponde */
  document.getElementById('character-image'+player).src='./assets/img/'+pokemonSelected+'.png'

  /* Comportamiento de las estadísticas de cada personaje 
    Conectamos cada valor con el input correspondiente del html */
  document.getElementById('damage'+player).value = character.attack;
  document.getElementById('defense'+player).value = character.defense;
  document.getElementById('life'+player).value = character.health;

  /* Comportamiento de la barra de vida de cada personaje 
    La mostramos cuando el pokémon ha sido seleccionado y le 
    indicamos el valor que contendrá en función de la vida de cada pokémon */
  document.getElementById('health-bar-player'+player).style.display = 'block';
  document.getElementById('health-bar-player'+player).value = character.health;
  document.getElementById('health-bar-player'+player).max = character.health;

  /* Guardamos el objeto completo en las variables globales para más tarde 
    poder tener acceso a ellas y usarlas en la pelea */
  if(player == 1) {
    character1 = character;
  }else{
    character2 = character;
  }
}


/**
 * Comenzamos el proceso de la pelea
 */
function startFight() {
  /* Controlamos primero que ambos personajes estén seleccionados. En caso de que no lo estén
    mostramos la ventana modal con el error y retornamos 0, lo que frena toda la ejecución del código */
  if(!character1 || !character2) {
    modalContent.innerHTML = '<h1>Debes seleccionar personajes para iniciar la pelea</h1>'
    modal.style.display = "block";
    return 0;
  }

  /* Generamos el turno */
  if(turn == 0) {
    /* La primera vez, el turno siempre es 0, por lo que generaremos un 1 o un 2 al inicio,
      para que el comienzo sea aleatorio y quitamos el botón de comenzar pelea, porque ya estamos
      iniciando el proceso */
    btnFight.style.display = 'none';
    turn = generateRandomNumb(2, 1)
  }else{
    /* Después del primer turno siempre vamos sumando 1, para que le vaya tocando al siguiente jugador */
    turn++
  }

  /* Mientras que la vida de cualquiera de los dos continúe > 0, seguimos generando rondas de pelea */
  if (character1.health > 0 && character2.health > 0) {
    setTimeout(() => {
      /* Generamos una ronda de pelea y pasamos el turno como parámetro */
      runRound(turn);
    }, 1500);
  }else {
    /* Si la vida de cualquiera de los dos es menor a 0
      Detenemos la pelea y mostramos la ventana modal con el ganador y su pokémon */
    modal.style.display = "block";
    if (character1.health > 0) {
      modalContent.innerHTML = '<h1>¡ Gana el JUGADOR 1 !</h1>'
      modalContent.innerHTML += '<h2> con su pokémon '+character1.name.toUpperCase()+'</h2>'
    }else{
      modalContent.innerHTML = '<h1>¡ Gana el JUGADOR 2 !</h1>'
      modalContent.innerHTML += '<h2> con su pokémon '+character2.name.toUpperCase()+'</h2>'
    }

    /* Finalmente, cuando la batalla termine, mostramos el botón de restart */
    btnRestart.style.display = 'block';
  }
}


/**
 * Generamos un turno de pelea, donde restaremos vida al jugador atacado
 * 
 * @param turno     Número que pasamos para saber a cual de los jugadores le corresponde atacar
 */
function runRound (turno) {
  /* Si el turno es par, ataca el jugador 2 */
  if(turno % 2 == 0){
    /* La vida que restaremos será la correspondiente al valor de ataque del jugador2 - valor de defensa del jugador1 */
    let dmg = character2.attack - character1.defense;
    /* Añadimos el log del ataque */
    logGame.innerHTML += '<h3>Ataca '+character2.name+' y quita a '+character1.name+' '+dmg+' puntos de vida</h3>';
    /* Restamos la vida al jugador1 */
    character1.health -= dmg;
    /* Modificamos el valor de la barra de vida del jugador 1 */
    healthBar1.value = character1.health;
  }else{
    /* La vida que restaremos será la correspondiente al valor de ataque del jugador1 - valor de defensa del jugador2 */
    let dmg = character1.attack - character2.defense;
    /* Añadimos el log del ataque */
    logGame.innerHTML += '<h3>Ataca '+character1.name+' y quita a '+character2.name+' '+dmg+' puntos de vida</h3>';
    /* Restamos la vida al jugador2 */
    character2.health -= dmg;
    /* Modificamos el valor de la barra de vida del jugador 1 */
    healthBar2.value = character2.health;
  }

  /* Al terminar la ronda de ataque volvemos a ejecutar la función de la pelea
    para que determine la vida de los jugadores y si es necesario detener la pelea y mostrar el ganador
    o continuar lanzando más rondas de ataque */
  startFight();
}


/**
 * Actualizamos la web para comenzar de nuevo
 */
function restart() {
  window.location.reload();
}


/**
 * Función que nos permite generar valores random
 * 
 * @param limit   Límite máximo del valor aleatorio
 * @param min     Límite mínimo del valor aleatorio
 */
function generateRandomNumb(limit, min) {
  min = Math.ceil(min);
  limit = Math.floor(limit);
  return Math.floor(Math.random() * (limit - min + 1)) + min;
}


/* Modal */
/* Cuando el usuario haga click en la X de la ventana modal cerramos */
span.onclick = function() {
  modal.style.display = "none";
}

/* Cuando el usuario haga click fuera, en cualquier lugar, de la ventana modal cerramos */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}