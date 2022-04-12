/* Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna 
varietà, 
peso (unita di misura grammi)
e lunghezza. (unita di misura centimetri)
Calcola quanto pesano tutte le zucchine.
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

let sum = 0;


const sumWeigth = zukkine.forEach(zucchina => {
    sum = sum + zucchina.weight;
})


console.log('Le zucchine presenti nel cesto:');
console.log(zukkine);

console.log(`La somma dei pesi delle zukkine è ${sum} grammi, ovvero ${sum / 1000} kg`);