//Definire tre variabili, rispettivamente con VAR, LET e CONST, per stampare la stringa di seguito:

var nome = 'Aldo';
let cliente = 'cliente'
const numero = 3.14;

document.getElementById('concatena').innerHTML = `${nome}, ${cliente}, ${numero}`;

var secondo = `${nome}, ${cliente}, ${numero}`;

document.getElementById('concatena2').innerHTML = secondo;

//Concatenare le variabili precedenti per ottenere lo stesso risultato con un'unica variabile:

var username = 'Mario';

document.getElementById('var').innerHTML = username;

 {
    let username = 'Carla';
    document.getElementById('let').innerHTML = username;
 }

 document.getElementById('final').innerHTML = username;

//-------------------------------

var username2 = 'Mario';

document.getElementById('let2').innerHTML = username2;

 {
    let username2 = 'Carla';
     document.getElementById('let3').innerHTML = username2;
     document.getElementById('final2').innerHTML = username2;
 }

//Manipolare il valore di partenza per ottenere i seguenti risultati:

var valoreIniziale = 15;

var addizione = valoreIniziale + valoreIniziale;
var sottrazione = valoreIniziale - 10;

let incremento = addizione + 1;
let decremento = sottrazione - 1;

document.getElementById('iniziale').innerHTML = `Valore iniziale: ${valoreIniziale}`;

document.getElementById('valore1').innerHTML = `Addizione e incremento: ${addizione}, ${incremento}`;

document.getElementById('valore2').innerHTML = `Sottrazione e decremento: ${sottrazione}, ${decremento}`;

document.getElementById('valore3').innerHTML = `Moltiplicazione: ${valoreIniziale * 3}`;

document.getElementById('valore4').innerHTML = `Divisione: ${valoreIniziale / 3}`;

document.getElementById('valore5').innerHTML = `Concatenazione: ${valoreIniziale} è un numero`;

