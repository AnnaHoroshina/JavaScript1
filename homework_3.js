////Сделайте функцию, которая возвращает квадрат числа. Число передается параметром
//let num = 6;
//let func = (num) => num**2;

//console.log(func(num));

//////Сделайте функцию, которая возвращает сумму двух чисел.
//let a = 1;
//let b = 2;
//let sum = (a, b) => a + b;

//console.log(sum(a, b));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
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

/////// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
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

//console.log(getDay(7));

/////Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
//// Если отрицательное - пусть функция вернет true, а если нет - false.

//function checkNumber(a) {
 //   if (a < 0) {
 //       return true;
  //  } else 
 //   return false;
//}

//console.log(checkNumber(-1))


/////Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a) {
    if (a > 0 && a < 10) {
        return true;
    } else
    return false;
}

console.log(isNumberInRange(2))

