//arrays destructuring

let fruits = ['Apple', 'Mango'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring 

let user = {username: 'Erick', age: 19};
let { username, age } = user;
console.log(username, age);

//spread operator 

let person = { name: 'Mario', age: 28};
let country = 'Spain';

let data = { ...person, country };
console.log(data);

//rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 4, 6);
