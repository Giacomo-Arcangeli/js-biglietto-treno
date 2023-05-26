console.log('JS OK');

// chiedo all'utente il numero di km che deve percorrere
// chiedo all'utente l'età

const kmNum = parseInt(prompt('Quanti km devi percorrere?' , 10));
const userAge = parseInt(prompt('Quanti anni hai?', 30));
console.log(kmNum , userAge);

// calcolo il prezzo del biglietto

const kmPrice = 0.21;
const ticket = (kmNum * kmPrice) + '€';
console.log(ticket);


// SE l'utente ha meno di 18 anni va applicato uno sconto del 20%
// SE l'utente ha 65 anni o più, va applicato uno sconto del 40%


