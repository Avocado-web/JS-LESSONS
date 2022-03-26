const title = "js lessons";
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

// alert("Какой-то текст");