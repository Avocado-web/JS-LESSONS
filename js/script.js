"use strict";
let title = "js lessons";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2000;
let rollback = 8;
let fullPrice = 30000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");

screens = screens.toLowerCase();
screens = screens.split(", ");
console.log(screens);

console.log(fullPrice * (rollback / 100));

// Lesson 3

const nameProject = prompt("Как называется ваш проект?");
title = nameProject;

const screenTypes = prompt('Какие типы экранов нужно разработать? (Например: "Простые, Сложные, Интерактивные")');
screens = screenTypes;

const costOfWork = parseInt(prompt("Сколько будет стоить данная работа?"));
screenPrice = costOfWork;

const siteAdaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(servicePercentPrice);

switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice <= 15000 && fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice <= 0:
        console.log("Что то пошло не так");
        break;
}

// alert("Какой-то текст");