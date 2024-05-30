// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

const byte = 10000000000000;
let size = '';
let result = byte;
let i = 0
while (result > 1024) {
        i++;
        result = result / 1024
}
switch (i) {
    case 0: 
        size = 'byte';
        break;
    case 1: 
        size = 'Kb'
        break;
    case 2: 
        size = 'Mb'
        break;
    case 3:
        size = 'Gb'
        break;
    case 4:
        size = 'Tb'
        break; 
}   
console.log(`${byte} = ${result.toFixed(1)} ${size}`);


// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб
const maxStars = 9
for (let i = 1; i <= maxStars; i++) {
    console.log('*'.repeat(i));
}
for (let i = maxStars + 1; i > 0; --i) {
    console.log('*'.repeat(i));
}

let stars = 0;
let space = 0;
for (let i = 1; i <= maxStars; i+=2) {
    space = (maxStars - i) / 2
    console.log(' '.repeat(space) + '*'.repeat(i));
}
for (let i = maxStars; i >= 0; i-=2) {
    space = (maxStars - i) / 2
    console.log(' '.repeat(space) + '*'.repeat(i));
}

// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Число ${i} делится без остатка на 3 и на 5`);
        continue;
    }
    if (i % 3 === 0) {
        console.log(`Число ${i} делится на 3`);
        continue;
    }
    if (i % 5 === 0) {
        console.log(`Число ${i} делится 5`);
        continue;
    }
    console.log(`${i}`);
}
// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

const str = 'I am super engineer';
let arr = str.toLowerCase().split(' ');
let res = arr[0];
for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    res = res + word[0].toUpperCase() + word.slice(1, word.length);
}
console.log(res)



