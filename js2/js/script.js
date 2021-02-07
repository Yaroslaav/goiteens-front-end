'use strich'

const UserName = prompt("Введіть своє ім'я: ");
console.log("Ім'я користувача:", UserName);

let MyAge = Number(prompt("Введіть свій вік: "));
let MyFriendAge = Number(prompt("Введіть вік вашого друга"));
console.log(alert(('Ваш спільний вік: ') + (MyAge + MyFriendAge)));
console.log(MyAge + MyFriendAge);

// Значення виводиться в консоль
let a1 = 5 + 3;
console.log('Значення змінної а1 дорівнює', a1)

let a2 = 5 - 3;
console.log('Значення змінної а2 дорівнює', a2)

let a3 = 5 * 3;
console.log('Значення змінної а3 дорівнює', a3)

let a4 = 5 / 3;
console.log('Значення змінної а4 дорівнює', a4)


// Значення виводиться за допомогою alert

let a5 = 5 % 3;
alert('5 % 3 = ' + a5);
console.log('5 % 3 = ' + a5);

let a6 = 3 % 5;
alert('3 % 5 = ' + a6);
console.log('3 % 5 = ' + a6);

let a7 = 5 + '3';
alert("5 + '3' = " + a7);
console.log("5 + '3' = " + a7);

let a8 = '5' - 3;
alert("'5' - 3 = " + a8);
console.log("'5' - 3 = " + a8);

let a9 = 75 + 'кг';
alert("75 + 'кг' = " + a9);
console.log("75 + 'кг' = " + a9);


// Площа прямокутника

const height = 23;

const width = 10;

const s = height * width;
console.log('площа прямокутника дорівнює', s)

// обсяг циліндра

let v = 0;
const dC = 4;
const heightC = 10;
const radius = dC/2;

v = Math.PI * (radius ** 2) * heightC;

console.log('v=', v);




// Гіпотенуза
const n = 3;
const m = 4;
let g = 0;

g = (n ** 2) + Math.pow(n, 2);
g = Math.sqrt(g);

console.log('g=', (Math.round(g)));
