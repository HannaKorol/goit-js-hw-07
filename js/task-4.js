//*Form

//!!Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.

const form = document.querySelector(".login-form"); // витягуєсо форму для редагування

form.addEventListener("submit", handleSubmit) // вішаємо слухача на форму

function handleSubmit(event) { // функція для описання події для форми
    event.preventDefault(); // обов"язково для того, щоб відмінити поведінку браузера за замовчуванням,  
    //для подіЇ сабміту - це перевазантаження сторінки

    console.log(event);
    console.log(event.currentTarget);

const elements = event.currentTarget.elements; // витягуємо елементи форми для їх редагування 
    //в формі є elements - це властивість для роботи з елементами форми, там зберігаються всі інтерактивні елементи форми: name, email i  comment

const info = {
email: elements.email.value,           //*.value - отримати значення input,textarea, select
password: elements.password.value,     //.value - отримати значення input,textarea, select
};
console.log(info); // виведення значення у консоль
event.currentTarget.reset() //*очистити поля форми
};

