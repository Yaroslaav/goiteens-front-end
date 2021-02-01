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
console.log(alert('5 % 3 = ' + a5))

let a6 = 3 % 5;
console.log(alert('3 % 5 = ' + a6))

let a7 = 5 + '3';
console.log(alert("5 + '3' = " + a7))

let a8 = '5' - 3;
console.log(alert("'5' - 3 = " + a8))

let a9 = 75 + 'кг';
console.log(alert("75 + 'кг' = " + a9))


// Площа прямокутника

const height = 23;

const width = 10;

const s = height * width;
console.log('площа прямокутника дорівнює', s)

// обсяг циліндра

// радіус

const pi = 3.14;

const dC = 4;

const radius = pi * dC * dC;
console.log('Радіус циліндра -', radius)

const heightC = 10;
const v = radius * heightC;
console.log('обсяг циліндра дорівнює', v)


// Гіпотенуза

   const n = 3;
   const m = 4;

   // квадрати катетів
   const MN1 = Math.pow(3, 2);
   console.log('Квадрат першого катета дорівнює', MN1);

   const MN2 = Math.pow(4, 2);
   console.log('Квадрат другого катета дорівнює', MN2)

   const MN3 = MN1 + MN2;
   console.log('Сума квадратві катетів дорівнює', MN3)

   const gipotenuza = Math.pow(5, 2)
   console.log('5 в 2-му степені доріванює', gipotenuza,', отже гіпотенуза дорівнює 5м')

