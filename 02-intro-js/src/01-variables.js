// 1. Variables ------------------------------------------------------------------------------------------
console.log("VARIABLES____________________________");

const nombre = "pedro";
const apellido = "perez";

console.log(nombre, apellido);

if (true) {
    // El scope varía de una const nombre a otra, por lo que no supone ningún error utilizarlo así

    const nombre = "maría";
    const apellido = "martínez";

    console.log(nombre, apellido);
}

console.log(nombre, apellido);
