/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let numero1 = parseInt(prompt("Inserisci il primo numero"))
let numero2 = parseInt(prompt("Inserisci il secondo numero"))
if(numero1 > numero2){
  alert(`Il numero più grande è ${numero1}`)
}
else if(numero2 > numero1){
  alert(`Il numero più grande è ${numero2}`)
}
else{
  alert("I due numeri sono uguali")
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
let numero = parseInt(prompt("Inserisci un numero"))
if(numero !== 5){
  console.log("not equal")
}
else{
  console.log("è proprio un 5")
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
let numero = prompt("Inserisci un numero")
if(numero % 5 === 0){
  console.log("divisibile per 5")
}
else{
  console.log("non divisibile per 5")
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let numero1 = parseInt(prompt("Inserisci un numero"))
let numero2 = parseInt(prompt("Inserisci un altro numero"))
if(numero1 === 8 || numero2 === 8){
  alert("Uno dei due numeri inseriti è 8")
}
else if(numero1 + numero2 === 8){
  alert("La somma dei due numeri è 8")
}
else if(numero1 - numero2 === 8 || numero2 - numero1 === 8){
  alert("La sottrazione dei due numeri è 8")
}
else{
  alert("I due numeri non sono 8 e la loro somma o sottrazione non fa 8")
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let prodotto1 = parseInt(prompt("Costo del primo prodotto"))
let prodotto2 = parseInt(prompt("Costo del secondo prodotto"))
let prodotto3 = parseInt(prompt("Costo del terzo prodotto"))
let totalShoppingCart = prodotto1 + prodotto2 + prodotto3
if(totalShoppingCart > 50){
  alert(`L'ammontare complessivo è ${totalShoppingCart}, la spedizione è gratuita!`)
}
else{
   alert(`L'ammontare comprensivo di spedizione è pari a ${totalShoppingCart + 10} euro`)
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
let prodotto1 = (prompt("Costo del primo prodotto"))
let prodotto2 = (prompt("Costo del secondo prodotto"))
let prodotto3 = (prompt("Costo del terzo prodotto"))
let sconto1 = (prodotto1 * 20) / 100
let sconto2 = (prodotto2 * 20) / 100
let sconto3 = (prodotto3 * 20) / 100
let prezzo1 = prodotto1 - sconto1
let prezzo2 = prodotto2 - sconto2
let prezzo3 = prodotto3 - sconto3
let totalShoppingCart = prezzo1 + prezzo2 + prezzo3
if(totalShoppingCart > 50){
  alert(`L'ammontare complessivo è ${totalShoppingCart}, la spedizione è gratuita!`)
}
else{
   alert(`L'ammontare comprensivo di spedizione è pari a ${totalShoppingCart + 10} euro`)
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
const numeri = [10, 80, 70]
numeri.sort(function(a, b){return b-a});
console.log(`${numeri[0]} è il numero maggiore`)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*
let numero = prompt("Inserisci numero")
if (typeof numero === "number"){
  alert(`${numero} è un numero!`)
}
else{
  alert(`${numero} non è un numero!`)
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
let numero = parseInt(prompt("Inserisci un numero"))
if(numero % 2 === 0){
  console.log("numero pari")
}
else{
  console.log("numero dispari")
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*
let val = 7
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } 
    else if (val < 5) {
      console.log("Meno di 5");
    } 
    else if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*
    const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
    }
   delete me.lastname 
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*
  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
  delete me.skills[2] 

*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*
 const numeri []
 const numeri[0] = 1
 const numeri[1] = 2
 const numeri[2] = 3
 const numeri[3] = 4
 const numeri[4] = 5
 const numeri[5] = 6
 const numeri[6] = 7
 const numeri[7] = 8
 const numeri[8] = 9
 const numeri[9] = 10
 */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*
  const numeri[9] = 100
*/
