/* 
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

*/


function mixArray2(array1, array2) {

    let outputArray = [];

    if (array1.length === array2.length) {

        array1.forEach((element, i) => {
            outputArray.push(array1[i]);
            outputArray.push(array2[i]);
        })

        return outputArray;

    } else {
        console.log('Gli array non hanno la stessa dimensione. Funzione non eseguibile!');
    }

}



function mixArray(array1, array2) {

    if (array1.length === array2.length) {
        let outputArray = [];


        let j = 0;
        let k = 0;
        for (let i = 0; i < (array1.length * 2); i++) {

            if (i % 2 === 0) {
                outputArray[i] = array1[j];
                j++;
            } else {
                outputArray[i] = array2[k];
                k++;
            }   
        }
        return outputArray;
    } else {
        console.log('Gli array non hanno la stessa dimensione. Funzione non eseguibile!');
    }
    
}


const pippo = ['a', 'b', 'c'];
const baudo = [1, 2, 3];

const mixedArray = mixArray2(pippo, baudo);

console.log('Gli array distinti');
console.log(pippo, baudo);
console.log('L\'array risultante:');
console.log(mixedArray);