"use strict";

let title = prompt("Как называется ваш проект?");
let screens = "Простые, Сложные, Интерактивные";
let screenTypes = prompt('Какие типы экранов нужно разработать? (Например: "Простые, Сложные, Интерактивные")');
let costOfWork = parseInt(prompt("Сколько будет стоить данная работа?"));
let siteAdaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

let screenPrice = 2000;
let rollback = 8;
let fullPrice = 30000;
let adaptive = true;

let allServicePrices, servicePercentPrice;

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

const getAllServicePrices = function(serviceСost1, serviceCost2) {
    return serviceСost1 + serviceCost2;
};

function getFullPrice(price1, price2) {
    return price1 + price2;
}

const getTitle = function(str) {
    if (str[0] === " ") {
        str.split(" ", 1);
        return str[1].toUpperCase() + str.substring(2);
    } else {
        return str[0].toUpperCase() + str.substring(1);
    }
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getServicePercentPrices = function(fPrice, rback) {
    return fPrice - fPrice * (rback / 100);
};

getTitle(title);
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, allServicePrices);
getServicePercentPrices(fullPrice, rollback);

title = title.toLowerCase();
title = getTitle(title);
screens = screens.toLowerCase();
screens = screens.split(", ");
screens = screenTypes;
screenPrice = costOfWork;
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);

console.log(title);
console.log(screens.length);
console.log(screens);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");
console.log(fullPrice * (rollback / 100));
console.log(getRollbackMessage(fullPrice));
console.log(getAllServicePrices(servicePrice1, servicePrice2));
console.log(getServicePercentPrices(fullPrice, rollback));

// alert("Какой-то текст");