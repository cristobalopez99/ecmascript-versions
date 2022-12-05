//flat
const array = [1, 2, 4, 8, 6, 3, [5, 7, 1,3, [5, 8, 9]]];
console.log(array.flat(3));


// flatmap

const elements = [1, 5, 3, 2, 6];
console.log(elements.flatMap(v => [v, v * 2]));

