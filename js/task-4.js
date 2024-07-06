//*Form

const form = document.querySelector(".login-form"); // витягуєсо форму для редагування

form.addEventListener("submit", handleSubmit) // вішаємо слухача на форму

function handleSubmit(event) { // функція для описання події для форми
    event.preventDefault(); // *обов"язково для того, щоб відмінити поведінку браузера за замовчуванням,  
    //для подіЇ сабміту - це перевазантаження сторінки

    const elements = event.currentTarget.elements; // витягуємо елементи форми для їх редагування

    const email = elements.email.value.trim(); // отримуємо доступ до рядка емейл і його значення(тексту що вводився користувачем) без пробілів
    const password = elements.password.value.trim(); // Отримуємо значення поля password, видаляючи пробіли з початку і кінця

    if (email === "" || password === "") { //перевіряє, чи є значення полів email або password порожніми.
        alert('All form fields must be filled in'); // Виводимо попередження, якщо поля порожні
        return; // Зупиняємо виконання функції, щоб не відправляти форму
    }

    const info = {
        email: email, //значенням властивості email є значення змінної email
        password: password, //додається властивість password, значенням якої є значення змінної password.
    };


console.log(info); // виведення значення у консоль
event.currentTarget.reset() //*очистити поля форми
};

