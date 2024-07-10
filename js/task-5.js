//*Color change

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)//використовується для генерації випадкового цілого числа в діапазоні від 0 до 16777214 (включно). Число 16777215 (або 2^24 - 1) є найбільшим 24-бітним цілим числом, яке зазвичай використовується для представлення кольорів у форматі RGB.
    .toString(16) //перетворення числа в шістнадцятковий рядок
    .padStart(6, 0)}`; //Додає нулі на початку рядка, щоб гарантувати, що результат завжди буде довжиною 6 символів
  }

const button = document.querySelector(".change-color");// створюємо кнопку
const colorSpan = document.querySelector('.color');// створюємо span

button.addEventListener("click", () => {
   const randomColor= getRandomHexColor(); // створюємо посилання на "випадковий колір"
   document.body.style.backgroundColor = randomColor; // Колір фону всієї сторінки
   colorSpan.textContent = randomColor; //  Background color: значення кольору 
   colorSpan.style.color = black; //Необов'язково: встановити колір тексту проміжку таким самим випадковим кольором - але це вказано в ДЗ
});





//Math.floor є вбудованою функцією в JavaScript, яка використовується для округлення числа вниз до найближчого цілого числа. 
//Це означає, що функція завжди повертає найбільше ціле число, менше або дорівнює даному числу.
