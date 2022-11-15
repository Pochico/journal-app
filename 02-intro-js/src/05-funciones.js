// 5. Funciones -----------------------------------------------------------------------------------------
console.log("FUNCIONES_________________________________________________");

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};

const flechaSaludar = (nombre) => `Hola, ${nombre}`;

// console.log(saludar("Gocu"));
// console.log(flechaSaludar("Vegeta"));

// Para hacer un return de un objeto directamente en una función de flecha, el return se pone entre paréntesis

const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
// console.table(usuarioActivo);
