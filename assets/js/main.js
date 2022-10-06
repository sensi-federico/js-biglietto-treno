

//il numero di chilometri che vuole percorrere
const userKm = Number(prompt("Quanto chilometri vuole percorrerre?"));
// e l'età del passeggero.
const userAge = prompt("Quanti anni ha?")


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = (userKm * 0.21) + " euro";

console.log(ticketPrice);

const priceText = document.getElementById("price_text");

priceText.innerHTML = ticketPrice;

// va applicato uno sconto del 20% per i minorenni


// va applicato uno sconto del 40% per gli over 65.