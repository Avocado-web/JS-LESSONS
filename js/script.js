"use strict";

let rollback = 8;

let adaptive;
let title;
let screens;
let screenPrice;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?");
    screens = prompt('Какие типы экранов нужно разработать? (Например: "Простые, Сложные, Интерактивные")');

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice)); {}

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum = prompt("Сколько это будет стоить?");
            } while (!isNumber(sum));
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum = prompt("Сколько это будет стоить?");
            } while (!isNumber(sum));
        }
    }
};
const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price <= 15000 && price > 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getServicePercentPrices = function() {
    return fullPrice - fullPrice * (rollback / 100);
};

asking();
screens = screens.toLowerCase();
screens = screens.split(", ");

title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.length);
console.log(screens);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");
console.log(fullPrice * (rollback / 100));
console.log(getRollbackMessage(fullPrice));
console.log(getAllServicePrices());
console.log(getServicePercentPrices());

// alert("Какой-то текст");