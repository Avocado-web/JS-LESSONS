"use strict";

const title = document.getElementsByTagName("h1");
const btnResult = document.getElementsByClassName("handler_btn");
const addScreen = document.querySelector("screen-btn");
const otherItems = document.querySelectorAll("other-items, percent");
const otherItems2 = document.querySelectorAll("other-items, number");
const rollback = document.querySelector("rollback > input[type=range]");
const rollbackPercentage = document.querySelector("rollback > span.range-value");
const totalInput = document.getElementsByClassName("total-input");

let screens = document.querySelectorAll("screen");

for (let input of totalInput) {
    console.log(input.id);
}

console.log(title[0]);

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 8,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function() {
        appData.asking();
        appData.addPrices();
        appData.getTitle();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.logger();
    },

    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    isString: function(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    },

    asking: function() {
        do {
            appData.title = prompt("Как называется ваш проект?");
        } while (appData.isString(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;
            do {
                appData.name = prompt("Какие типы экранов нужно разработать?");
            } while (appData.isString(appData.name));

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let screen of appData.screens) {
            appData.screenPrice += screen.price;
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;
            do {
                appData.name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isString(appData.name));

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },

    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },

    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price <= 15000 && price > 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },

    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);

        // for (let key in appData) {
        //     console.log("Ключ:" + " " + key + ";  " + "Значение:" + " " + appData[key]);
        // }
    },
};

appData.start();