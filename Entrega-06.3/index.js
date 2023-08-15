// Constantes
const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];


function fillHours(myTeam) {
    for (let worker of myTeam) {
        console.log("Disponibilidad de " + worker.name);
        for (let i = 0; i < worker.availability.length; i++) {
            worker.availability[i] = (Math.random() >= 0.5);

            if (worker.availability[i] === true) {
                console.log(WORK_HOURS[i], "si");
            } else {
                console.log(WORK_HOURS[i], "no");
            }
        };
    };
};

fillHours(myTeam);

function searchAvailability(myTeam) {
    let availabilityArray = [];
    for (let x = 0; x < myTeam.length; x++) {
        for (let i = 0; i < myTeam[x].availability.length; i++) {
            if (myTeam[x].availability[i] === true) {
                availabilityArray.push(i);
            };
        };
    };

    let availabilityArraySorted = availabilityArray.sort();
    console.log(availabilityArraySorted);

    for (let i = 0; i <availabilityArraySorted.length; i++) {
        let result = availabilityArraySorted.filter((element) => element == i);
        if (result.length == myTeam.length) {
            return console.log("Hueco libre disponible: " + WORK_HOURS[i]);
        };
    };
    return console.log("No hay hueco libre");
    
};
searchAvailability(myTeam);
