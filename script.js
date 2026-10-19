let date = new Date();
let dan = date.getDay();

let listaDana = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Srijeda",
    "Cetvrtak",
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
