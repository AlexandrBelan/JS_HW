// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
const word = 'Wummermustdie';
const consonants = 'qwrtpsdfghjklzxcvbnm';
const contains = 'eyuioa';
let splitWord = word.toLowerCase().split('');
let consonantsNum = 0;
let containsNum = 0;
for (let i = 0; i < word.length; i++) {
    if (consonants.includes(splitWord[i])) {
        consonantsNum++;
    } else {
        containsNum++;
    }
}
// console.log(`word contains ${containsNum} vowels and ${consonantsNum} consonants`);


// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const str = 'abcZ';
const offset = 1;
let resultStr = '';
let index;
let newIndex;
for (let i=0; i < str.length; i++) {
    index = alphabet.indexOf(str[i].toLowerCase())
    newIndex = index + offset;
    if (index === 0 && offset < 0) {
        newIndex = alphabet.length -1;
    }
    if (index === alphabet.length -1 && offset > 0) {
        newIndex = 0;
    }
    if (str[i] !== alphabet[index]){
        resultStr += alphabet[newIndex].toUpperCase();
    } else {
        index += offset;
        resultStr += alphabet[newIndex];
    }
}
console.log(resultStr)