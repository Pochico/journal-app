// Si sólo hay una exportación se puede hacer así sin problema
// export default const arrSuperHeroes = [...]

const arrSuperHeroes = [
    {
        id: 1,
        name: "Batman",
        owner: "DC",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Superman",
        owner: "DC",
    },
    {
        id: 4,
        name: "Flash",
        owner: "DC",
    },
    {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
    },
];


export const owners = ['DC', 'Marvel'];

export default arrSuperHeroes;


// De la siguiente manera podemos exportar todo junto, indicándole cuál es la exportación por defecto añadiéndole as default. Si no ponemos exportación por defecto todas las importaciones deberán escribirse con destructuring import { heroes, owners } from .....

// export {
//     heroes as default,
//     owners
// }