// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
const N = 5;
const CONCATINATION = N.toString();
const FIRST_CONCATINATION = CONCATINATION + CONCATINATION;
const SECOND_CONCATINATION = FIRST_CONCATINATION + N.toString();
const RESULT = N + Number(FIRST_CONCATINATION) + Number(SECOND_CONCATINATION);
console.log(RESULT);

 