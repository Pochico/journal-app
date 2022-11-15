// 8. Import, Export y funciones comunes de arrays ------------------------------------------

// Cuando se exporta algo por defecto, no necesita corchetes, pero cuando se exporta algo que no sea por defecto sí, con lo cual si hay una exportación por defecto y una sin defecto en el mismo archivo se escribe como si se hiciese un destructuring del archivo, de la siguiente manera:
import arrSuperHeroes, { owners } from "./data/08-heroes_array";

console.log(
    "IMPORTS EXPORTS Y FUNCIONES DE ARRAYS_________________________________"
);



// console.log(`owners: ${owners}`);

// Find ----
const getHeroesById = (id) => {
    return arrSuperHeroes.find((hero) => hero.id === id);
};

// console.log(getHeroesById(2));

// Filter ----
const getHeroesByOwner = (owner) => {
    return arrSuperHeroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwner("DC"));

export {
    getHeroesById,
    getHeroesByOwner
}