// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
const N = 5;
let concatenation = N.toString();
firstConcatenation = concatenation + concatenation;
secondConcatenation = firstConcatenation + N.toString();
let result = N + Number(firstConcatenation) + Number(secondConcatenation);
console.log(result);

 