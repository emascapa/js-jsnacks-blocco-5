/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zukkine = [
    {
        breed: 'tonda',
        weight: 122,
        length: 20
    },
    {
        breed: 'oblunga',
        weight: 150,
        length: 15
    },
    {
        breed: 'standard',
        weight: 80,
        length: 7
    },
    {
        breed: 'tonda',
        weight: 99,
        length: 10
    },
    {
        breed: 'tonda',
        weight: 60,
        length: 6
    },
    {
        breed: 'standard',
        weight: 122,
        length: 25
    },
    {
        breed: 'tonda',
        weight: 125,
        length: 20
    },
    {
        breed: 'oblunga',
        weight: 90,
        length: 19
    },
    {
        breed: 'tonda',
        weight: 180,
        length: 30
    },
    {
        breed: 'pisana',
        weight: 200,
        length: 21
    },
];

//corte
const shortZucchine = zukkine.filter(zucchina => zucchina.length < 15);

let sum1 = 0;
shortZucchine.forEach(zucchina => {
    sum1 = sum1 + zucchina.weight;
})

console.log('Le zucchine corte:');
console.log(shortZucchine);
console.log(`in tutto pesano: ${sum1} grammi`);
console.log('_____________________________________');


//lunghe
const longZucchine = zukkine.filter(zucchina => zucchina.length >= 15);

let sum2 = 0;
longZucchine.forEach(zucchina => {
    sum2 = sum2 + zucchina.weight;
})

console.log('Le zucchine lunghe:');
console.log(longZucchine);
console.log(`in tutto pesano: ${sum2} grammi`);
