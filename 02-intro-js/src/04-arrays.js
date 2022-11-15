// 4. Arrays -----------------------------------------------------------------------------------------
console.log("ARRAYS_____________________");

const array = [1, 2, 3, 4];
const array2 = [...array, 5, 6];

// console.log(array);
// console.log(array2);

// El método .map() devuelve un nuevo array con el resultado de la función que dentro se realiza iterando entre todos los valores de un array existente dado.
const array3 = array2.map((x) => x * 3);
// console.log(array3);
