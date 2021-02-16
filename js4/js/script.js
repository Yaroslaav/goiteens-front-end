'use strich'


// Завдання 1

let number = Number(prompt("Введіть число: "));
console.log(number);

if(number>55 && number<99){
   console.log('Число потрапляє в діапазон');
}else{
   console.log('Число не потрапляє в діапазон');
}


// Завдання 2

// let age = Number(prompt("Введіть вік: "));
let age = 55;

if(age>=0&&age<=16 || age>=17&&age<=60 || age>=61&&age<=100){
    
   if (age>=0 && age<=16){
       console.log('Макс в групі 1');
   }
       
   else if (age>=17 && age<=60){
       console.log('Макс в групі 2');
   }

   else if (age>=61 && age<=100){
       console.log('Макс в групі 3');
   }

}


// Завдання 3

let userName = prompt("Введіть ім'я: ")
let userSurname = prompt("Введіть прізвисько: ")

if(userName.length>=4 && userSurname.length>=5){
   console.log(userName.length + userSurname.length);
   alert(userName.length + userSurname.length);
}else{
   console.log("УПС");   
   alert("УПС");
}


// Завдання 4

let random = Math.round(Math.random() * (5 - 1) + 1);
console.log(random);

if((random==1) || (random==2) || (random==3) || (random==4) || (random==5)){

   if(random==1){
      console.log("random = 1");
   }

   else if(random==2){
      console.log("random = 2");
   }

   else if(random==3){
      console.log("random = 3");
   }
   
   else if(random==4){
      console.log("random = 4");
   }
   
   else if(random==5){
      console.log("random = 5");
   }
}


//Завдання 5

let lang = prompt('Введіть скорочено назву мови:  ua, en, ru, fr');

switch (lang) {
   case 'ua':
      lang = 'Січень';
      console.log(lang);
      break;

   case 'en':
      lang = 'January';
      console.log(lang);
      break;

   case 'ru':
      lang = 'январь';
      console.log(lang);
      break;

   case 'fr':
      lang = 'Janvier';
      console.log(lang);
      break;

  default:
    console.log('Invalid lang type');
}

// console.log(lang); // 500