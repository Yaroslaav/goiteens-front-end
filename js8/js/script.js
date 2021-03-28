'use strich'

console.log('Завдання 1');
// Завдання 1
const user = {
  userName: 'Yarik',
  age: 13,
  showUserName(){
    console.log(this.userName);
  },
  updateAge(){
    this.age++
    console.log(this.age);
  }
  
  
}
user.showUserName();
user.updateAge();
user.updateAge();
user.updateAge();
user.updateAge();
user.updateAge();

console.log("-------------------------------------------");


// Завдання 2

console.log('Завдання 2');

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
  }


let keys = Object.values(salaries);
console.log(keys);

let sum = 0;

for (let i = 0; i < keys.length; i++) {
  sum+=keys[i];
}
console.log(`Загальна сума: ${sum}`);

console.log('---------------------------------------------');

// Завдання 3

console.log('Завдання 3');

const calculator = {
  read(a, b){
    a = +prompt('Введіть перше число: ');
    b = +prompt('Введіть друге число: ');
    calculator.Number1 = a;
    calculator.Number2 = b;
    console.log(this.Number1);
    console.log(this.Number2);
  },
  
  sum(){
    console.log('Сума чисел:', calculator.Number2 + calculator.Number1);
  },

  mult(){
    console.log('Добуток чисел:', calculator.Number2 * calculator.Number1);
  }
}

calculator.read()
calculator.sum();
calculator.mult();

console.log('----------------------------------------');


// Завдання 4

console.log("Завдання 4");



  const cafe= {
    name: 'Republic',
    width:200,
    height: 300,
    personal:5,
    hr: true 
  };
  

  const entries = Object.entries(cafe);
  
 
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key} - ${value}`);
  }

  let S = cafe.width * cafe.height;
  console.log(`Площа будівлі: ${S}`);