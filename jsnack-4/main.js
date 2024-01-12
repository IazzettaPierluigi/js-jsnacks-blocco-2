//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


//raccolgo il numero dal prompt
let numeroUtente = prompt('inserisci un numero, anche se è dispari ti darò il pari successivo eheh')


//lo converto in numero con parseint

numeroUtente = parseFloat(numeroUtente)

console.log(`il numero inserito è: ${numeroUtente}`)

for (let i = 0; i < 1; i++) {
    if (numeroUtente % 2 === 0) {
      console.log("Il numero inserito è pari:", numeroUtente);
    } else {
      console.log("Il numero inserito è dispari. Il numero pari successivo è:", numeroUtente + 1);
    }
  }