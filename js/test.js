// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// const age = prompt("Ваш возраст?");
// console.log(age);
// console.log(typeof age);

// let base = prompt("Введи число");
// base = Number(base);
// let power = prompt("Введи степень");
// power = Number(power);
// const result = base ** power; 
// console.log(result);

//   normalizedToLowerCaseMessage = message.toLowerCase();
//  if(normalizedToLowerCaseMessage.includes("sale")) {
//    result = true;
//  }
//   else if(normalizedToLowerCaseMessage.includes("spam")) {
//    result = true;
//  }
//   else {
//     result = false;
//   }

// function checkAge(age) {
//   if (age>=18) {
//     return 'Вы совершеннолетний человек';
//   }
//   return 'Вы не совершеннолетний человек';
// }
// console.log(checkAge(3));

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     result = max % i;
//   console.log(`${max} % ${i} = ${result}`);
// }

// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.

// const min = 2.5;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2) {
//         total += i;
//     }
// }
// console.log(total);

//  Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321

// const n = 1235746;
// const str = n + '';
// const str1 = n.toString();
// const str2 = String(n);
// let sum = 0;
// let nReverse = '';

// for (let a = 0; a < str.length; a+=1) {
//     console.log(Number(str[a]));
       
//     sum += Number(str[a]);
// }
//     console.log(`"${str.length}"`);
// console.log(sum);

// for (let i = str.length - 1; i >= 0; i -= 1) {
    
//     nReverse += (str[i]);
// }
// console.log(Number(nReverse));


// const n = 1235.57;
// const str = n + "";
// let sum = 0;

// for (let i = 0; i < str.length; i +=1) {
//   if (isNaN(str[i])) {
//     continue;
//   }
//   sum += Number(str[i]);
// }
// console.log(sum);


// Задачи(Lesson 1)
// 1.Вывести на экран первых 10 чисел, кратных 7(которые делятся на 7).
// const min = 70;
// const max = 177;
// let n = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 7 === 0) {
//         console.log(i)
//         n +=1;
//         if (n === 10) {
//             break;
// }
//     }
// }

// 2.Выведите 10 чисел, кратных 4, начиная с 20.
// const a = 20;
// const b = 4;
// let n = 0;

// for (let i = a; i >= a; i += b) {
//     console.log(i);
//     n += 1;
//     if (n === 10) {
//         break;
//     }
// }
// const a = 20;
// const b = 4;
// n = 10;
// for (let i = a; i < (a + b * n); i += b) {
//     console.log(i);
// }


// 3.Вывести на экран квадраты натуральных чисел от 1 до 50.

// for (let i = 1; i < 51; i += 1) {
//     console.log(Math.pow(i, 2));
// }


// 4.Выведите на экран числа 10,1   10,2   10,3   ...   10,8 (! 1 знак после запятой).

// for (let i = 10.1; i <= 10.8; i += 0.1) {
//     console.log(Number(i.toFixed(1)));
// }



// 5.Найдите значение выражения  10+10.5+11+...99.5+100

// let total = 0;
// for (let i = 10; i <= 100; i += 0.5) {
//     total += i;
//     console.log(total);
// }


// 6.! Найти сумму цифр трехзначного числа. Переверните трехзначное число. 258 - 852

// const n = 258;
// const nString = n.toString();
// let nSum = 0;
// let nReverse = "";
// for (let i = 0; i < nString.length; i += 1) {
//     nSum += Number(nString[i]);
// }
// console.log(nSum);

// for (let i = nString.length - 1; i >= 0; i -= 1) {
//     nReverse += nString[i];
// }
// console.log(nReverse);


// 7.Определить, кем является человек: дошкольник (0-6), ученик (6-17), студент (17-23) ит.д.

 
// const age = prompt('Сколько Вам лет ?');
// let message;

// if (age >= 0 && age < 6) {
//     alert('дошкольник');
//     console.log(message = 'дошкольник');
// }
// else if (age >= 6 && age < 17) {
//     alert('ученик');
//     console.log(message = 'ученик');
// }
// else if (age >= 17 && age < 23) {
//     alert('студент');
//     console.log(message = 'студент');
// }
// else if (age >= 23) {
//     alert('ит.д.');
//     console.log(message = 'ит.д.');
// }

// ==============================================================================================
// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const lk of clients) {
//   console.log(lk);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const fg of string) {
//   console.log(fg);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// const matrix = [[1, 12, 13],[24, 25, 26],[37, 38, 39],];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log(matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(matrix[i][j]);
//       total += matrix[i][j];
//       if (j === 0) {
//           break;
//       }
//   }
// }

// console.log(total);


// const sum = function(...argd) {
//     let total = 0;
//     console.log(arguments);
//     // const argd = Array.from(arguments);
//     console.log(argd);

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 7));

const add = (...args) => {
    let total = 0
    for (const arg of args) {
        console.log(arg);
        total += arg;
    }
    
    console.log('total:',total);
};

add(1, 2, 1);
