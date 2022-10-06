

//il numero di chilometri che vuole percorrere
const userKm = Number(prompt("Quanto chilometri vuole percorrerre?"));
// e l'età del passeggero.
const userAge = Number(prompt("Quanti anni ha?"));


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const valuta = "euro"

const ticketPrice = Number(userKm * 0.21);

const ticketPriceStamp = ticketPrice.toFixed(2) + " " + valuta;

const priceText = document.getElementById("price_text");

priceText.innerHTML = ticketPriceStamp;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let discount

if (userAge < 18) {
    let discount = ticketPrice * 20 / 100;
    priceDiscount = ticketPrice - discount;
    console.log(priceDiscount);
    priceDiscountStamp = "Il tuo bigletto ha subito uno sconto del 20% " + "ora il prezzo è di: " + priceDiscount.toFixed(2) + " " + valuta;
    document.getElementById("discounted").innerHTML = priceDiscountStamp;
} else if (userAge > 65) {
    let discount = ticketPrice * 40 / 100;
    priceDiscount = ticketPrice - discount;
    console.log(priceDiscount);
    priceDiscountStamp = "Il tuo bigletto ha subito uno sconto del 40% " + "ora il prezzo è di: " + priceDiscount.toFixed(2) + valuta;
    document.getElementById("discounted").innerHTML = priceDiscountStamp;
}


