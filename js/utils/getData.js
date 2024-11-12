// Універсальна функція для отримання даних
export async function getData(url) {

    // Отримуємо дані з URL-адреси
    const response = await fetch(url)

    // Виводимо відповідь
    return await response.json()
}
