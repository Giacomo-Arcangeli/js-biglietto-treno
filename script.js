console.log('JS OK');

// chiedo all'utente il numero di km che deve percorrere
// chiedo all'utente l'età

const kmNum = parseInt(prompt('Quanti km devi percorrere?' , 10));
console.log(kmNum);
const userAge = parseInt(prompt('Quanti anni hai?', 30));
console.log(userAge);

// calcolo il prezzo del biglietto

const kmPrice = 0.21;
const ticket = (kmNum * kmPrice) + '€';
console.log(ticket);

// calcolo gli sconti

let discountJunior = 20;
let discountSenior = 40;
const ticketTotJunior = (ticket - (ticket / 100 * discountJunior));
const ticketTotSenior = (ticket - (ticket / 100 * discountSenior));

// SE l'utente ha meno di 18 anni va applicato uno sconto del 20%
// SE l'utente ha 65 anni o più, va applicato uno sconto del 40%

if(userAge < 18){
    ticket === ticketTotJunior;
    console.log(ticketTotJunior);
}
