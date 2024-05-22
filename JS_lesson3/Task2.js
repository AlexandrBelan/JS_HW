// Task2*. Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
// 1.  x2 - 6x + 9 = 0. - один корень
let firstСoefficient = 1;
let secondСoefficient = -6;
let freeMember = 9;
let discriminant = secondСoefficient ** 2 - 4 * firstСoefficient * freeMember;
const result_1 = (-secondСoefficient + Math.sqrt(discriminant))/(2 * firstСoefficient)

// 2.  x2 - 4x - 5 = 0. - два корня
firstСoefficient = 1;
secondСoefficient = -4;
freeMember = -5;
discriminant = secondСoefficient ** 2 - 4 * firstСoefficient * freeMember;
const result_2_1 = (-secondСoefficient + Math.sqrt(discriminant))/(2 * firstСoefficient)
const result_2_2 = (-secondСoefficient - Math.sqrt(discriminant))/(2 * firstСoefficient)

console.log(`"Ответ к уравнению 1: ${result_1}", "Ответ к уравнению 2: ${result_2_1} и ${result_2_2}"`)
 