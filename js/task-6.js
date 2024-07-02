//*Button, input

// 1. Є input, у який користувач вводить бажану кількість елементів.
// 2. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// 3. Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// 4. Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
// 5. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// 6. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. 

// 7. Після натискання на кнопку Destroy колекція елементів має очищатися.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const numberCounter = document.querySelector(".number-input")// 1) Створення input 
const createButton = document.querySelector("[data-create]"); // 2) Створення кнопки create
const destroyButton = document.querySelector("[data-destroy]"); // Створення кнопки destroy
const boxesContainer = document.getElementById("boxes"); // Контейнер для елементів



// Додаємо обробник події для кнопки "Create"
createButton.addEventListener('click', () => { 
  const amount = Number(numberCounter.value); // Отримуємо значення з поля вводу та перетворюємо його на число.
  if (amount >= 1 && amount <= 100) { // Перевіряємо чи значення в межах від 1 до 100
    createBoxes(amount); //Викликаємо функцію для створення елементів
    numberCounter.value = ''; // Після виконання цього рядка коду, значення поля вводу (input) буде очищене.
  } else {
    alert('Please enter a number between 1 and 100'); // Якщо значення не в межах, показуємо повідомленя
  }
});

//-------------------------------------------------------------------------------------------------------


// Додаємо обробник події для кнопки "Destroy"
destroyButton.addEventListener("click", destroyBoxes);

// Функція для створення елементів
function createBoxes(amount) {
  destroyBoxes(); // Очищення попередніх елементів перед створенням нових
  for (let i = 0; i < amount; i++) { // Цикл для створення заданої кількості елементів
    const box = document.createElement('div'); // Створюємо новий div
    box.style.width = `${30 + i * 10}px`; // Встановлюємо ширину
    box.style.height = `${30 + i * 10}px`; // Встановлюємо висоту
    box.style.backgroundColor = getRandomHexColor(); // Встановлюємо випадковий колір фону
    boxesContainer.appendChild(box); // Додаємо новий елемент до контейнера
  }
}


// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо контейнер від всіх елементів
}