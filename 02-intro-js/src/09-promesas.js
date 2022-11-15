// 9. Promesas
import { getHeroesById } from "./08-imports_exports_arrays";

console.log("PROMESAS_____________________________");

const getHeroByIdAsyinc = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroesById(id);
            hero ? resolve(hero) : reject("Error retrieving Hero data");
        }, 3000);
    });
};

// En este caso, si el then o el catch reciben un argumento, y es el mismo que se mandará a la función interna, se puede resumir de la siguiente manera
// De:
getHeroByIdAsyinc(4)
    .then((hero) => console.table(hero))
    .catch((err) => console.warn(err));

// A:
getHeroByIdAsyinc(3).then(hola).catch(console.warn);
function hola(hero) {
    console.log(hero)
}