// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
// Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
function sumOfDigits (num) {
    const arrayDigitsString = num.toString();
    let sumDigits = 0;
    for (const num1 of arrayDigitsString) {
        sumDigits += Number(num1);
    };
    if (sumDigits > 9) {
        return sumOfDigits(sumDigits);
    } else {
        return sumDigits;
    }
}
console.log(sumOfDigits(12345));
// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару идентичных букв на одну следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d

function noDouble (str){
    const arrStr = str.split('');
    let result = [];
    let hasBeenModified = false;
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === arrStr[i+1]){
            if (alphabet.indexOf(arrStr[i]) + 1 === alphabet.length) {
                result.push(alphabet[0]);
                hasBeenModified = true;
                i++;
                continue
            }
            result.push(alphabet[alphabet.indexOf(arrStr[i]) + 1]);
            hasBeenModified = true;
            i++;
        } else {
            result.push(arrStr[i]);
        }
    };
    const resultStr = result.join('');
    if (hasBeenModified) {
        return noDouble(resultStr);
    } else {
        return resultStr;
    };
}

console.log(noDouble('zzaabbcfgdrttttttttzzzz'))




