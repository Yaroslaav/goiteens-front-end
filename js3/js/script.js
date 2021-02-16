'use strich'
// завдання 1

const k1 = '5px';
const k2 = '12djd334';
const k3 = '12.45asdwe12';
const k4 = 'qwqweeewq';

console.log(Math.round(k1));
console.log(Math.round(k2));
console.log(Math.round(k3));
console.log(Math.round(k4));


// завдання 2




// завдання 3
// варіант 1
let min = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(min)

let max = Math.max(2, 34, 99, 3, 22, 36, 733, 18)
console.log(max)

// варіант 2

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18))
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18))


// завдання 4

// варіант 1
let random = Math.round(Math.random() * (19 - 3) + 3);
console.log(random); 

// варіант 2

console.log(Math.round(Math.random() * (19 - 3) + 3));


//  завдання 5

let  result= 5+5+'5';
console.log("5+5+'5'=", result); 
console.log("typeof 5+5+'5':", typeof result);


// завдання 6

let email = 'cahloyaroslav@gmail.com';   
console.log('Чи є в змінній email такий символ як @?' ,  'Відповідь:', email.includes('@'));
console.log('В змінній email', email.length, 'символи');


// завдання 7

let My = 'My ';
let nam = 'name ';
let is = 'is ';
let fullName = My + nam + is + 'Victor';
console.log(fullName)


// завдання 8

const userName = 'yarik';
let payment = 300;
alert('Дякуємо, ' + userName +'! До сплати ' + payment  + ' гривень');

console.log('Дякуємо, ' + userName +'! До сплати ' + payment  + ' гривень');