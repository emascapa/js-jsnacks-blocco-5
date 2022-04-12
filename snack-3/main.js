/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */

function reverseString(inputString) {
    const arrayString = inputString.split('');

    const reverseArrayString = [];

    arrayString.forEach((element, i) => {
        reverseArrayString[arrayString.length - 1 - i] = element;
    });

    const outputString = reverseArrayString.join('');

    return outputString
}


//console.log(reverseString('Pippo'));

const inputWord = prompt('digita una parola e te la inverto');

const bodyElement = document.querySelector('body');

bodyElement.innerHTML = `<h1>${reverseString(inputWord)}</h1>`