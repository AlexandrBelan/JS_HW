// 1. Реализовать Task 1 через switch
// 2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
// 3. Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number
const age = "12";
const age_2 = 18;
const age_3 = 60;
    if (isNaN(age)){
        throw new Error('Parameter is not a number!');
    }
    switch (true) {
        case age < age_2: {
            console.log(`You dont have access cause your age is ${age} Its less then`);
            break;
        }
        case age >= age_2 && age < age_3: {
            console.log(`Welcome  !`);
            break;
        }
        case age > age_3: { 
            console.log(`Keep calm and look Culture channel`);
            break;
        }
        default: {
            console.log("Technical work")
            break; 
        }
    }
