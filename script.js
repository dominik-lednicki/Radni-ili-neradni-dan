let date = new Date();
let dan = date.getDay();

let listaDana = [
    "",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedelja",
];

let porukeDana = {
    1: "Ja najviše volim JS od svih programskih jezika",
    4: "Mali petak!",
    5: "Vikend na Vidiku!",
};

console.log("Danas je "+(listaDana[dan+1]).toLocaleLowerCase());

if (dan == 6 || dan == 7) {
    console.log("Neradni je dan");
} else {
    console.log("Radni dan");
}

if (porukeDana[dan+1]) {
    console.log(porukeDana[dan+1]);
}

// Dodatni zadatak:
let unosKorisnika = prompt("Unesite broj dana ili naziv");
function isADay(uneseniString) {
    let check = false;
    let intPosition = null;

    for (let i = 0; i < listaDana.length; i++) {
        if (
            listaDana[i].toLocaleLowerCase() ==
            uneseniString.toLocaleLowerCase()
        ) {
            check = true;
            intPosition = i;
            break;
        }
    }
    return intPosition;
}

function numberToDay(uneseniBroj) {
    let counter = 1;
    let daysCounter = 1;

    while (counter < uneseniBroj) {
        counter++;
        daysCounter++;
        if (daysCounter > 7) {
            daysCounter = 1;
        }
    }
    console.log("Uneseni dan je " + listaDana[daysCounter].toLowerCase());
}

let position = isADay(unosKorisnika);
let passed = false;

if (unosKorisnika > 0 && unosKorisnika < 18) {
    numberToDay(unosKorisnika);
    passed = true;
}

if (position) {
    console.log("Uneseni dan ima broj: " + position);
    passed = true;
}

if (passed == false) {
    console.warn(
        "Unesena stvar nije ispravna. Unesite ili broj od 1 do 17 ili ime dana.",
    );
}
