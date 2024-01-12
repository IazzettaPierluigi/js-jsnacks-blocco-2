// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

let primoArray = [1, 2, 3, 4, 5, 6];
let secondoArray = [5, 6, 7];


while (primoArray.length !== secondoArray.length) {

  // Aggiungi un elemento all'array più corto
  if (primoArray.length < secondoArray.length) {

    primoArray.push(Math.floor(Math.random() * 100) + 1); 

  } else {

    secondoArray.push(Math.floor(Math.random() * 100) + 1); 
  }
}

// Stampare gli array finali
console.log("Primo array:", primoArray);
console.log("Secondo array:", secondoArray);