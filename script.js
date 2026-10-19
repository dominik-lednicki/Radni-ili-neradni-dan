let date = new Date();
let dan = date.getDay();

let listaDana = {
    1: "Ja najviše volim JS od svih programskih jezika",
    4: "Mali petak!",
    5: "Vikend na Vidiku!",
};

if (dan == 0 || dan == 6) {
    console.log("Neradni je dan");
} else {
    console.log("Radni dan");
}
