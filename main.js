// Task1
// var x = +prompt('Insert a number (x)'),
// y = +prompt('Insert a number (y)'),
// z = +prompt('Insert a number (z)');
//
// if(x>y){
//   if(y>z){
//     alert('z - min');
//   }
//   else if(y<z){
//     alert('y - min');
//   }
//   else {
//     alert('y=z-min');
//   }
// }
//
// else if (x<y){
//   if(x<z){
//     alert('x-min');
//   }
//     else if(x>z){
//       alert('z-min');
//     }
//   else{
//     alert('x=z-min');
//   }
// }
//
// else{
//   if(x>z){
//     alert('z-min');
//   }
//   else if(x==z){
//     alert('x=y=z');
//   }
//   else{
//     alert('x=y-min')
//   }
// }



//Task2
// var v = +prompt('Улитка, ты куда ползешь?');
// if (v > 0){
//   alert('Улитка ползет вверх');
// }
// else if(v < 0){
//   alert('Улитка ползет вниз');
// }
// else{
//   alert('Улитка стоит на месте');
// }


//Task3
// var i = +prompt('Сколько у меня денег?');
// var friend = +prompt('Друг, сколько денег у тебя?');
// var sum = i + friend;
// if (sum >=10000){
//   alert('Go to Malta!');
// }
// else{
//   alert('We are going to drink bear');
// }


//Task4
// var age = +prompt('How old are you?');
// if (age >= 20 && age < 30){
//   alert('Выслать повестку!!!');
// }

//Task5
// var bus = +prompt('Какая маршрутка приехала?');
// if (bus == 7 || bus == 225 || bus == 255){
//   alert('Поехали домой!');
// }
// else alert('Ждем следующую!');

//Task6
// var day = prompt('Какой сегодня день недели?');
// if ( day != "Sunday"){
//   alert('Пошли на работу!');
// }

// Task7
// var name = prompt('What is your name?');
// if (name != "null"){
//   alert(name);
// }

//Task8
// var currency = prompt('You have USD or UAH?');
// currency = currency.toLowerCase();
// var sum = +prompt('How much do you want to exchange?');
// if( currency == 'usd'){
//   alert((sum*25) + ' UAH');
// }
// else if(currency == 'uah'){
//   alert((sum/25) + ' USD');
// }
// else{
//   alert('We do not change such currency')
// }

//Task9-if
// var greeting = '';
// var lang = prompt('What language do you speak? (en, ru, de)', 'en');
// if (lang == 'en'){
//   greeting = 'Hello!';
//   alert(greeting);
// }
// else if (lang == 'ru'){
//   greeting = 'Привет!';
//   alert(greeting);
// }
// else if (lang == 'de'){
//   greeting = 'Guten Tag!';
//   alert(greeting);
// }

//Task9-switch
// var greeting = '';
// var lang = prompt('What language do you speak? (en, ru, de)', 'en');
// switch (lang){
//   case 'en': greeting = 'Hello!'; break;
//   case 'ru': greeting = 'Привет!'; break;
//   case 'de': greeting = 'Guten Tag!'; break;
// }
// alert(greeting);

//Task10
// var month = new Date();
// month = month.getMonth();
// if (month <=1 || month == 11){
//   month = 'winter';
//   alert(month);
// }
// if (month >=2 || month <=4){
//   month = 'spring';
//   alert(month);
// }
// if (month >=5 || month <= 7){
//   month = 'summer';
//   alert(month);
// }
// if (month >=8 || month <= 10){
//   month = 'autumn';
//   alert(month);
// }

 //Task11
 // var lang = prompt('ru or en');
 // var day = +prompt('Number of day');
 // if(lang == 'ru'){
 //   switch (day){
 //     case 1: day = 'понедельник'; break;
 //     case 2: day = 'вторник'; break;
 //     case 3: day = 'среда'; break;
 //     case 4: day = 'четверг'; break;
 //     case 5: day = 'пятница'; break;
 //     case 6: day = 'суббота'; break;
 //     case 7: day = 'воскресение'; break;
 //   }
 //   alert(day);
 // }
 // else if(lang == 'en'){
 //   switch (day){
 //     case 1: day = 'Monday'; break;
 //     case 2: day = 'Tuesday'; break;
 //     case 3: day = 'Wednesday'; break;
 //     case 4: day = 'Thursday'; break;
 //     case 5: day = 'Friday'; break;
 //     case 6: day = 'Saturday'; break;
 //     case 7: day = 'Sunday'; break;
 //   }
 //   alert(day);
 // }

 //Task12
 var x = +prompt('x', 0); //перевод в числовое значение;
 var error = null;

 switch (x) {
     case 0: error = 'На ноль делить нельзя'; break;//в конце не хватало прерывания операции;
     case 1: error = 'На единицу делить бессмысленно'; break;
     case NaN: error = 'Не математическая операция'; break; //нет смысла, т.к. NaN не равен сам себе;
 }

 if (error) {
     alert(error);
 } else {
     alert(100 / x);
 }
