'use strich'


// Завдання 1
console.log('Завдання 1');

function hello1 (js) {
  js = 'Привіт JavaScript';
  return js;
}
console.log(hello1());

console.log('----------------------------------------------------------------');

// Завдання 2
console.log('Завдання 2');
function hello2 (name) {
  name = 'Василь';
  return 'Привіт, ' + name;
};

console.log(hello2());

console.log('----------------------------------------------------------------');

// Завдання 3
console.log('Завдання 3');
function mul (n, m) {
  return 'n * m = ' + (n*m) + ', ' + 'n + m = ' + (n+m) + ', ' + 'm - n = ' + (m-n);
}

console.log(mul());

console.log('----------------------------------------------------------------');

// Завдання 4
console.log('Завдання 4');
const myNewArrowFunction = (...arguments) => console.log(arguments);

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

console.log('----------------------------------------------------------------');

// Завдання 5
console.log('Завдання 5');

  let total;
  let totalMark = 0;
  let lastMark;
const myAverageScore = function(...marks){
  
  
  for(total of marks){

  }
  for (let i = 0; i < total.length; i++){
    totalMark += total[i];
    console.log(total[i]);
  };
  
  
  console.log(totalMark);

  lastMark = Math.round(totalMark / total.length);


  if(lastMark <= 100 && lastMark >= 91){
    console.log('Myaveragescore: A');
  }else if (lastMark <= 90 && lastMark >= 81){
    console.log('Myaveragescore: B');
  }else if (lastMark <= 80 && lastMark >= 71){
    console.log('Myaveragescore: C');
  }else if (lastMark <= 70){
    console.log('Myaveragescore: D');
  }

  totalMark  = 0
};

console.log('Перевірка 1');
myAverageScore([100, 75, 81, 96]);
console.log('Перевірка 2');
myAverageScore([45, 63, 85, 70]);
console.log('Перевірка 3');
myAverageScore([77, 82, 60, 58]);
console.log('Перевірка 4');
myAverageScore([93, 99, 93, 96]);
