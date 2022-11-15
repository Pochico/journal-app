// 2. Template String -------------------------------------------------------------------------------------

const nombre = 'Gocu';

console.log("TEMPLATE STRINGS___________________________");

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

// Se pueden usar Template Strings con funciones dentro del ${} ya que recoge código js, ya sean funciones, variables, etc...

console.log(`Esto es el saludo: ${getSaludo(nombre)}`);
