// 3. Objetos Literales --------------------------------------------------------------------------------
console.log("OBJETOS LITERALES______________________________");

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
};

// De esta primera manera, te imprime el objeto persona.
// console.table(persona);

// De esta segunda manera, te imprime un objeto creado con una propiedad llamada persona, y cuyo valor es tu objeto persona, lo que significa que es igual a:
//! ({ persona: persona })
// console.table({ persona });

// Cuando se quiera crear una copia de un objeto cambiando alguna propiedad, se utiliza el Spread Operator.
// Si se hiciese directamente equiparando persona2 con persona, al modificar el valor de persona2, persona también sería modificada, ya que serían el mismo objeto exactamente
const persona2 = { ...persona };
persona2.nombre = "Peter";

// console.log("Persona 2: ");
// console.log(persona2);
