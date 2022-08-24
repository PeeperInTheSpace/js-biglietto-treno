alert("Benvenuto, acquista il tuo biglietto!")
 
// Dati vendita
const CostoKM = 0.21; 
let sconto = 0; 
let scontoApplicato = 0; 
 
// Dati da inserire
const KMInseriti = parseInt(prompt ("Inserisci i KM da percorrere")); 
console.log(KMInseriti); 
 
const EtaInserita = parseInt(prompt ("Inserisci la tua età")); 
console.log(EtaInserita); 
 
// Calcolo prezzo del biglietto
let PrezzoBiglietto = CostoKM * KMInseriti 
console.log(PrezzoBiglietto); 
 
// Condizione sconto
if (EtaInserita < 18) { 
    sconto = 20; 
    console.log(sconto); 
 
    scontoApplicato = (PrezzoBiglietto * sconto) / 100; 
    console.log(scontoApplicato); 
} 

else if (EtaInserita > 65) { 
    sconto = 40; 
    console.log(sconto); 
 
    scontoApplicato = (PrezzoBiglietto * sconto) / 100; 
    console.log(scontoApplicato); 
} 
 
// Calcolo del prezzo finale del biglietto con possibile sconto 
 
const prezzoFinale = PrezzoBiglietto - scontoApplicato; 
console.log(prezzoFinale); 
 
// Stampa del prezzo su schermo 
 
const printPrezzo = prezzoFinale.toFixed(2); 
 
document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: €" + printPrezzo;