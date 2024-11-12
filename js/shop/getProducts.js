//Функція для отримання товарі
export async function getProducts(url = "https://6726464d302d03037e6d0033.mockapi.io/products") {

    //Отримуємо дані товарів
    const products = await getData(url);

    // Отримуємо елемент для списку товарів
    const productsList = document.querySelector('#products-list');

    // Очищуємо попередні результати
    productsList.innerHTML = '';

    // Перебираємо всі елементи списку товарів
    products.forEach((product) => {

        // Додаємо елемент в список товарів
        productsList.innerHTML += `<div class="card-product">
                                        <div class="card-product__img-hold">
                                            <img src="img/catalog/1.png" alt="" class="card-product__img">
                                        </div>
                                        <div class="card-product__text-hold">
                                            <a href="#" class="card-product__title-link">Планшет Lenovo Tab M10 Plus 4/128 Grey</a>
                                            <span class="card-product__price">8 999 грн</span>
                                            <a href="#" class="card-product__btn-add">
                                                <svg class="icon icon-cart">
                                                    <use href="#icon-cart-add"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>`
    })

}
