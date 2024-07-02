// 1) Знаходження елемента #categories
const categoriesList = document.querySelector("#categories");

// 2) Отримання всіх елементи "li" з класом "item"
const categoriesItems = categoriesList.querySelectorAll(".item");

// 3) Скільки всього категорій?
console.log(`Number of categories: ${categoriesItems.length}`);

// 4) Ітерація через кожен елемент li.item:
categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent; // витягуємо текстовий контент з h2
    const categoryElements = item.querySelectorAll('ul li'); // вибір всіх елементів "li", які знаходяться всередині елемента <ul>, який, у свою чергу, є дочірнім(child) елементом поточного item.
    console.log(`Category: ${categoryTitle}`); // виведення у консоль категорії
    console.log(`Elements: ${categoryElements.length}`); // виведення у консоль число елементів
});