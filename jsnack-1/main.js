// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

//creo l'array da riempire con il prompt 

let arrayNumeri = [];

//creo la variabile da usare per l'addizione
let somma = 0;


//while con somma minore di 50
while (somma < 50) {

    //richiesta input all'utente
    let numeroUtente = prompt("inserisci un numero");
    

    //push del numero inserito all'intero dell'array
    arrayNumeri.push(numeroUtente);


    //somma del numero inserito e conversione in numero con il "+"
    somma += +numeroUtente;

   
}  

console.log(arrayNumeri)