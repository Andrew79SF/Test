'use strict';

// let a = 5;
// console.log('a: ', a);

// let question1 = confirm('Тебе есть 18 лет?');
// console.log(question1);

// let question2 = prompt('Сколько тебе лет?', 18);
// console.log(question2);

// let n = 6;

// switch (n) {
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log('3-5');
// 		break;
// 	case 6:
// 		console.log(6);
// 		break;
// 	case 7:
// 		console.log(7);
// 		break;
// 	default:
// 		console.log('Ne verno');
// }

// let x = 10;

// let result = x === 10 ? 'true' : 'false';

// console.log(result);
// let budgetDay = prompt('Введите доход за день');

// if (budgetDay >= 800) {
// 	console.log('Высокий уровень дохода');
// } else if (budgetDay >= 300 && budgetDay < 800) {
// 	console.log('Средний уровень дохода');
// } else if (budgetDay >= 0 && budgetDay < 300) {
// 	console.log('Низкий уровень дохода');
// } else {
// 	console.log('Что то пошло не так');
// }

// if (budgetDay < 0) {
// 	console.log('Что то пошло не так');
// } else if (budgetDay < 300) {
// 	console.log('Низкий уровень дохода');
// } else if (budgetDay < 800) {
// 	console.log('Средний уровень дохода');
// } else {
// 	console.log('Высокий уровень дохода');
// }

// let message = (budgetDay < 0) ? 'Что то пошло не так' : 
// 		(budgetDay < 300) ? 'Низкий уровень дохода' : 
// 		(budgetDay < 800) ? 'Средний уровень дохода' : 'Высокий уровень дохода';

// console.log(message);
let lang = confirm('Выберите язык. "OK" - Русский, "Cancel" - Английский') ?
	'ru' : 'en';

let arr = {
		en : ['Monday, Tuesday, Wednesday, Thursday...'],
		ru : ['Понедельник, Вторник, Среда, Четверг...']
};

console.log(typeof lang);
console.log(arr[lang]);