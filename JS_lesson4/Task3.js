// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
const age = prompt(`Введи возраст`);
const age_2 = 18;
const age_3 = 60;
if (isNaN(age)) {
    alert('Parameter is not a number!');
    throw new Error('Parameter is not a number!'); 
}
switch (true) {
    case age < age_2: {
        alert(`You dont have access cause your age is ${age} Its less then`);
        break;
    }
    case age >= age_2 && age < age_3: {
        alert(`Welcome!`);
        break;
    }
    case age > age_3: { 
        alert(`Keep calm and look Culture channel`);
        break;
    }
    default: {
        alert("Technical work");
        break; 
    }  
}
