// 7. Destructuring de arrays ----------------------------------------------------------
console.log(
    "DESTRUCTURING DE ARRAYS ________________________________________________"
);

const personajes = ["Gocu", "Vegueta", "Truncs"];
const [, , p3] = personajes;
console.log(p3);

const arrayFunction = (value) => {
    return [
        value,
        () => {
            console.log("Hello mundo");
        },
    ];
};

const [value, funct] = arrayFunction("gocu");
// console.log(value);
funct();
