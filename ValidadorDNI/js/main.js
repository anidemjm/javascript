const correctContainer = document.querySelector('.correct-container');
const wrongContainer = document.querySelector('.wrong-container');

function validate() {
    const inputValue = document.getElementById('input').value;
    const match = inputValue.search(/^\d{8}-?[A-z]{1}$/);

    hideMessages();
    if (match !== -1) {
        showElement(correctContainer);
    } else {
        showElement(wrongContainer);
    }
}

// Ejemplo de código repetido que se puede refactorizar para seguir con el principio DRY
// function showCorrect() {
//     console.log('¡Yeah!');
//     correctContainer.style.display = 'block';
// }

// function showWrong() {
//     console.log('Nope!');
//     wrongContainer.style.display = 'block';
// }

function showElement(element) {
    element.style.display = 'block';
}

function hideMessages() {
    console.log('Hiding everything men');
    correctContainer.style.display = 'none';
    wrongContainer.style.display = 'none';
}

