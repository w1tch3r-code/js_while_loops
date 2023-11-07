"use strict";

// ===================================================
//       JS-Vertiefung – While-Loops-Level-1_3
// ===================================================

console.log("%c JS-Vertiefung – While-Loops-Level-1_3", "color: tomato");

// Aufgabenstellung

// Schreibe eine while Schleife, die Hallo World + Nummer 10 mal anzeigt.
// Initialisiere eine Variable counter mit dem Wert 0.
// Als Bedingung schreibe: counter < 10
// Gib string Hallo World + Variable counter in der Konsole aus.
// Erhöhe counter um eins und speichere ihn als counter.


let counter  = 0;

while (counter < 10) {
	console.log(`Hello World ${counter}`);
	counter++;
}

// ===================================================
//       JS-Vertiefung – While-Loops-Level-1_7
// ===================================================

console.log("%c JS-Vertiefung – While-Loops-Level-1_7", "color: tomato");

// Aufgabenstellung:
// Erstelle einen Loop mit do...while.
// Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.

let zaehler = 1;

do {
	console.log(`The number is ${zaehler}`);
	zaehler++;
} while (zaehler <= 5)

// ===================================================
//       JS-Vertiefung – While-Loops-Level-1_8
// ===================================================

console.log("%c JS-Vertiefung – While-Loops-Level-1_7", "color: tomato");

// Aufgabenstellung

// Erstelle einen Loop mit do...while.
// Es sollen alle gerade Zahlen bis 20 im Dokument ausgeben werden.

let i = 0;
console.log('Using do...while loops');
console.log('Even numbers less than 20');

do {
	i++;
	if (i % 2 === 1) {
		continue;
	} else {
		console.log(`${i}`);
	}
	
} while (i < 19);
