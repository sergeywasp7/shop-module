import { getData } from "../utils/getData.js";

// Функція для отримання категорії
export async function getCategories() {

    // Отримуємо дані з сервера
    const categoryList = await getData('https://6726464d302d03037e6d0033.mockapi.io/category');

    // Отримуємоелемент для списку категорій
    const categoryListHtml = document.querySelector('#category-list');

    // Перебираємо всі елементи списку категорій
    categoryList.forEach(categoryItem => {

        // Додаємо елемент в список категорій
        categoryListHtml.innerHTML += `<a href="${categoryItem.id}" class="dropdown-item">${categoryItem.name}</a>`

    });
}
