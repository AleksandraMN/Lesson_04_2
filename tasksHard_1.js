'use strict';

//Задание 1:

const salary = Number(prompt("Введите цифрами сумму заработка в рублях?", ""));

let sumTax = 0;

if (salary <= 0 || Number.isNaN(salary)) {
   console.log("Вы ввели некорректные данные!");
} else if (salary < 15000) {
   sumTax = salary * 0.13;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
} else if (salary >= 15000 && salary <= 50000) {
   sumTax = salary * 0.20;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
} else if (salary > 50000) {
   sumTax = salary * 0.30;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
};

//Задание 2

const salaryPro = Number(prompt("Введите цифрами сумму заработка?", ""));

let sumTax1 = 0;
let sumTax2 = 0;
let sumTax3 = 0;

if (salaryPro <= 0 || Number.isNaN(salaryPro)) {
   console.log("Вы ввели некорректные данные!");
} else if (salaryPro <= 15000) {
   sumTax1 = salaryPro * 0.13;
   console.log(`Сумма налога равна ${sumTax1} рублей.`);
} else if (salaryPro > 15000 && salaryPro <= 50000) {
   sumTax1 = 15000 * 0.13;
   sumTax2 = (salaryPro - 15000) * 0.20;
   console.log(`Сумма налога равна ${sumTax1 + sumTax2} рублей.`);
} else if (salaryPro > 50000) {
   sumTax1 = 15000 * 0.13;
   sumTax2 = 35000 * 0.20;
   sumTax3 = (salaryPro - 50000) * 0.30;
   console.log(`Сумма налога равна ${sumTax1 + sumTax2 + sumTax3} рублей.`);
};

