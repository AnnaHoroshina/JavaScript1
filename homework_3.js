////1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром
//let num = 6;
//let func = (num) => num**2;

//console.log(func(num));

//////2.Сделайте функцию, которая возвращает сумму двух чисел.
//let a = 1;
//let b = 2;
//let sum = (a, b) => a + b;

//console.log(sum(a, b));

///////3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

//function resultnum (a, b, c) {
//  return (a - b) / c;
//}
//console.log (resultnum (12,3,3));



//////4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
//function getDay(day) {
 //   if (day == 1) {
 //   return "понедельник";
 //   } else if (day == 2) {
 //   return "вторник";
 //   } else if (day == 3) {
 //   return "среда";
 //   } else if (day == 4) {
 //   return "четверг";
  //  } else if (day == 5) {
  //  return "пятница";
  //  } else if (day == 6) {
  //  return "суббота";
 //   } else if (day == 7) {
  //  return "воскресенье";
 //   }
//}
//console.log(getDay(7));

////////5.Сделайте функцию, которая параметрами принимает 2 числа. 
///Если эти числа равны - пусть функция вернет true, а если не равны - false.
//const isEqual = (num1, num2) => num1 === num2;



/////// 6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
// больше 10 - пусть вернет true, а если нет то - false.
//function mathSumm(a, b) {
//    sum = a + b
 //   if (sum > 10) {
 //       return true;
 //   } else if (sum <= 10) {
 //       return false;
  //  }
//}
//console.log(mathSumm(5, 12));

/////7.Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
//// Если отрицательное - пусть функция вернет true, а если нет - false.

//function checkNumber(a) {
 //   if (a < 0) {
 //       return true;
  //  } else 
 //   return false;
//}

//console.log(checkNumber(-1))


///////8.Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

//const isNumberInRange=(num)=>{
//    return num>0 && num<10;
//}

/////9.Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

// const rgb = (r = 0, g = 0, b = 0) => {
//   return `rgb(${r}, ${g}, ${b})`;
// };

// console.log(rgb(1, 4));


/////10.Написать функцию, которая принимает в себя три параметра - число и две функции. 
///Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, 
///если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом ,
/// если число нечетное, и будет возвращать число, увеличенное на 1.

// const getSquareNum = (num) => num ** 2;

// const getIncrement = (num) => num++;

// const conditionalCb = (num, cb1, cb2) => {
//   if (num % 2 === 0) {
//     return cb1(num);
//   } else {
//     return cb2(num);
//   }
// };


//////12. Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку 
////с этими 3 словами, расположенными в алфавитном порядке




