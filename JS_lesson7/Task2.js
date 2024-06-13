
// Task 2

// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
function letterСounter (str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let letters = str.toLowerCase().split('');
    const uniqletters = [...new Set(letters)].filter(value => alphabet.includes(value));
    let resultCount= []
    for (const el of uniqletters) {
        let count = 0;
        letters.forEach(letter => { 
            if (letter === el) {
                count++;
            };
       });
       resultCount.push(count);
    }
    letters = letters.map(function(letter) {
        if (uniqletters.indexOf(letter) >= 0) {
            return resultCount[uniqletters.indexOf(letter)];
        } else {
            return letter;
        };
    });
    return letters.join('');
}    
console.log(letterСounter('I am the best AQA ever!'));

// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
function calculationPrice (prices) {
    const sumPrice = prices.reduce(function(a,b) {
    return a + b;
    });
    console.log(`Итого: ${sumPrice} $, средняя цена товара ${(sumPrice / prices.length).toFixed(2)} $.`)
}
calculationPrice(prices);
// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отфильтрован по возврастанию количества гласных букв в слове.
const arr = ['asdsdaaa', 'car', 'book', 'seleeps', 'go', 'gg'];
function sortByVowels(arr) {
    const countVowels = (word) => {
        const vowelRegex = /[aeiou]/gi;
        const matches = word.match(vowelRegex);
        return (matches && matches.length) || 0;
    };
    return arr.sort((wordA, wordB) => {
        const a = countVowels(wordA);
        const b = countVowels(wordB);
        return a - b;
    });
};
console.log(sortByVowels(arr));
// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:
const arrparenthes = [[['(']], ')', '(', ')', '(', ['(', [')', ')'], [')']]];
function checkingParentheses (arr) { 
    const processedArr = arr.flat(Infinity);
    const parentheses = ['(', ')',];
    let count = 0;
    for (const parenthes of processedArr) {
        parenthes == parentheses[0] ? count++ : count--;
        if (count < 0) {
            break;
        };
    };
    return count === 0 ? 'Good' : 'Scum';
}
console.log(checkingParentheses(arrparenthes));