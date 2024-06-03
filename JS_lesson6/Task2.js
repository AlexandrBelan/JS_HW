// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
function comparisonPizzas (...myPizzas) {
    let result = [];
    for (const pizza of myPizzas) {
        if (competitorPizzas.indexOf(pizza) < 0) {
           result.push(pizza)
        }
    };
    return result;
}
comparisonPizzas('Peperoni', 'Milk Joe', 'Diablo', '4 cheeses', 'hawai', 'Govno', 'Peperoni')
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function maxLengthWord (str) {
    const arrayWords = str.split(" ");
    let lengthWord = [];
    let resultWords = [];
    for (const word of arrayWords) {
        lengthWord.push(word.length)
    }
    const maxLength = Math.max(...lengthWord);
    for (const word of arrayWords) {
        if (word.length === maxLength) {
            resultWords.push(word)
        }
    }
    console.log(resultWords);

}
maxLengthWord('которая принимает предложение которая принимает предложение и челмедведосвин атакует галактику свинчелмедведо челмедведосвин челмедведосвин')
// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.
function uniqueValue (...values) {
    const uniqValues = [...new Set(values)];
    return(uniqValues);
};
console.log(uniqueValue(1, 2, 2, 3, 4, 1, 5, 6, 12));

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
function isPolindrom (word) {
    if (word === word.split('').reverse().join('')) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPolindrom('rtrtr')