// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
const word = 'abbccaa123';
const consonants = 'qwrtpsdfghjklzxcvbnm';
const vowels = 'eyuioa';
let splitWord = word.toLowerCase().split('');
let countConsonats = 0;
let countVowels = 0;
let countNotLetter = 0
for (let i = 0; i < word.length; i++) {
    if (consonants.includes(splitWord[i])) {
        countConsonats++;
    } else if (vowels.includes(splitWord[i])){
        countVowels++;
    } else {
        countNotLetter++
    }
}
console.log(`word contains ${countVowels} vowels and ${countConsonats} consonants`);
console.log(`There are ${countNotLetter} non-letter characters in the line, total line length ${word.length}`)

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const str = 'a b 1 c Z';
const offset = 1;
let resultStr = '';
let index;
let newIndex;
for (let i=0; i < str.length; i++) {
    index = alphabet.indexOf(str[i].toLowerCase())
    newIndex = index + offset;
    if (index < 0){
        resultStr += str[i];
        continue;
    }
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