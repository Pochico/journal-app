// 6. Destructuring -------------------------------------------------------------------
console.log("DESTRUCTURING____________________________________________");

const vengador = {
    nombre: "hulko",
    poder: "verde",
    edad: 45,
};

const returnVengador = ({ nombre, poder }) => {
    return {
        nombreVengador: nombre,
        poder,
        direction: {
            lat: 14.5,
            lng: -11.312,
        },
    };
};

const {
    poder,
    nombreVengador,
    direction: { lat, lng },
} = returnVengador(vengador);

// console.log(poder, nombreVengador);
// console.log(lat, lng);
