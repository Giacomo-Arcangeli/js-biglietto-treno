console.log('JS OK');

// chiedo all'utente il numero di km che deve percorrere
// chiedo all'utente l'età

const kmNum = prompt('Quanti km devi percorrere?' , 10);
const userAge = prompt('Quanti anni hai?', 30);
console.log(kmNum , userAge);

// calcolo il prezzo del biglietto

const kmPrice = 0.21;
const ticket = (kmNum * kmPrice) + '€';
console.log(ticket);