/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(l1, l2) {
  if (Number.isInteger(l1) && Number.isInteger(l2)) {
    if (l1 !== l2) {
      return l1 + l2;
    } else {
      return (l1 + l2) * 3;
    }
  }
  return "non sono numeri interi";
}

console.log(crazySum(2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(l1) {
  if (l1 < 19) {
    return 19 - l1;
  }
  return (l1 - 19) * 3;
}

console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 200) || n === 400) {
    return true;
  }
  return "il numero non è ne compreso tra 20 e 200 e ne uguale a 400";
}

console.log(boundary(300));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    return testo;
  }
  return "EPICODE " + testo;
}

console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(l1) {
  switch (true) {
    case l1 < 0:
      return "il numero è negativo";
      break;
    case l1 % 3 === 0:
      return "il numero è un multiplo di 3";
      break;
    case l1 % 7 === 0:
      return "il numero è un multiplo di 7";
      break;
    default:
      return "il numero non è un multiplo di 3 o 7";
      break;
  }
}

// function check3and7(l1) {
//   if (l1 >= 0) {
//     if (l1 % 3 === 0 || l1 % 7 === 0) {
//       return "il numero è un multiplo di 3 o 7";
//     }
//   }
//   return "il numero è negativo";
// }

console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(testo) {
  testo = testo.split("").toReversed().join("").toString();
  return testo;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(testo) {
  testo = testo.split("");
  testo[0] = testo[0].toUpperCase();
  testo = testo.join("").toString();
  return testo;
}

console.log(upperFirst("ciao, come stai?"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(testo) {
  testo = testo.slice(1, -1);
  return testo;
}

console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(l1) {
  let lista = [];
  for (let i = 0; i < l1; i++) {
    let ciao = Math.floor(Math.random() * 11);
    lista.push(ciao);
  }
  return lista;
}

console.log(giveMeRandom(10));
