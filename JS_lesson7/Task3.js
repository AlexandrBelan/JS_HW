// Task 3

// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.
const arr = [1, 2, 9, 13, 8, 9, 3, 4, 5, 6, 10, 11, 12, 17, 16, 15, 11, 12 ]
function findMissingNumber(arr) {
    const arrNums = [...new Set(arr)].sort((a, b) => a - b);
    const missNumber = arrNums.find((num, index) => (num + 1 !== arrNums[index + 1]));
    console.log(missNumber + 1);
}
findMissingNumber(arr);

// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.
const cards = require('./cards.json');
function sortUniqCards (cards) {
    let uniqCards = cards.map(card => JSON.stringify(card));
    uniqCards = [...new Set(uniqCards)];
    uniqCards = uniqCards.map(card => JSON.parse(card));
    return uniqCards;
}
console.log(sortUniqCards(cards))