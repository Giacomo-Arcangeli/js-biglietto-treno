console.log('JS OK');

// chiedo all'utente il numero di km che deve percorrere
// chiedo all'utente l'età

const kmNum = parseInt(prompt('Quanti km devi percorrere?' , 10));
console.log('Km:' , kmNum);
const userAge = parseInt(prompt('Quanti anni hai?', 30));
console.log('Anni:' , userAge);

// calcolo il prezzo del biglietto

const kmPrice = 0.21;
const ticket = (kmNum * kmPrice);
console.log('Prezzo Base:' , ticket , '€');

// SE l'utente ha meno di 18 anni va applicato uno sconto del 20%
// SE l'utente ha 65 anni o più, va applicato uno sconto del 40%

if(userAge < 18){
    let discountJunior = 20;
    // calcolo sconto
    const ticketTotJunior = (ticket - (ticket / 100 * discountJunior));
    // genero il prezzo totale del viaggio con lo sconto applicato
    console.log('Prezzo Junior:' , parseFloat(ticketTotJunior).toFixed(2) , '€');
}
else if(userAge >= 65){
    let discountSenior = 40;
    // calcolo sconto
    const ticketTotSenior = (ticket - (ticket / 100 * discountSenior));
    // genero il prezzo totale del viaggio con lo sconto applicato
    console.log('Prezzo Senior:' , parseFloat(ticketTotSenior).toFixed(2) , '€');
}
