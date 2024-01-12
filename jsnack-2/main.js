// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

//genero il numero casuale
let numeroCasuale = Math.floor(Math.random() * 100) + 1;

//faccio inserire il numero all'utente
let numeroUtente = prompt('inserisci un numero')



numeroUtente = parseFloat(numeroUtente);

console.log(numeroCasuale, numeroUtente);


while (numeroUtente !== numeroCasuale) {
    
    if (numeroUtente > numeroCasuale) {
         numeroUtente = prompt('il numero è troppo alto')

         numeroUtente = parseFloat(numeroUtente);

    } else if (numeroUtente < numeroCasuale) {
         numeroUtente = prompt('il numero è troppo basso')

         numeroUtente = parseFloat(numeroUtente);

    } else {
        console.log(numeroUtente)
    }

    
}

