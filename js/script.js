import { shopInit } from "./shop/shopInit.js";
import { setActive } from "./utils/utils.js";

// Запускаємо функціонал інтернет-магазину
shopInit()

// Відбираємо всі елементи які мають атрибут активності
const activeList = document.querySelectorAll('[data-box-toggle]');

// foreach для кожного елемента
activeList.forEach(element => {
    element.onclick = setActive
});