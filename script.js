let date = new Date();
let dan = date.getDay();

let listaDana = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
];

let porukeDana = {
    1: "Ja najviše volim JS od svih programskih jezika",
    4: "Mali petak!",
    5: "Vikend na Vidiku!",
};

console.log(listaDana[dan]);

if (dan == 0 || dan == 6) {
    console.log("Neradni je dan");
} else {
    console.log("Radni dan");
}

if (porukeDana[dan]) {
    console.log(porukeDana[dan]);
}

// Dodatni:
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

if (unosKorisnika > 0 && unosKorisnika < 6) {
    console.log("Uneseni dan je " + listaDana[unosKorisnika].toLowerCase());
}

let position = isADay(unosKorisnika);

if (position) {
    console.log("Uneseni dan ima broj: " + position);
}
