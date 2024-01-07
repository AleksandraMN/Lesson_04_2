'use strict';

//Задание 1:

const salary = Number(prompt("Введите цифрами сумму заработка в рублях?", ""));

let sumTax = 0;

if (salary <= 0 || Number.isNaN(salary)) {
   console.log("Вы ввели некорректные данные!");
}  
if (salary < 15000) {
   sumTax = salary * 0.13;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
}  
if (salary >= 15000 && salary <= 50000) {
   sumTax = salary * 0.20;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
} 
if (salary > 50000) {
   sumTax = salary * 0.30;
   console.log(`Сумма налога равна ${sumTax} рублей.`);
};

//Задание 2

const salaryPro = Number(prompt("Введите цифрами сумму заработка?", ""));

const sumTax1 = 15000 * 0.13;
const sumTax2 = 35000 * 0.20;
let sumTax3 = 0;

if (salaryPro <= 0 || Number.isNaN(salaryPro)) {
   console.log("Вы ввели некорректные данные!");
}  
if (salaryPro <= 15000) {
   sumTax3 = salaryPro * 0.13;
   console.log(`Сумма налога равна ${sumTax3} рублей.`);
} 
if (salaryPro > 15000 && salaryPro <= 50000) {
   sumTax3 = (salaryPro - 15000) * 0.20;
   console.log(`Сумма налога равна ${sumTax1 + sumTax3} рублей.`);
} 
if (salaryPro > 50000) {
   sumTax3 = (salaryPro - 50000) * 0.30;
   console.log(`Сумма налога равна ${sumTax1 + sumTax2 + sumTax3} рублей.`);
};

