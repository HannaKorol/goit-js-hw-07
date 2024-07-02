const userName = document.querySelector("#name-input"); // силаємось на input
const greeting = document.querySelector("#name-output"); // силаємось на span

userName.addEventListener("input", handleInput) // додаємо слухача для input 

function handleInput(event) { // event - це об"єкт який є у кожній функції яка обробляє подію, він зберігає абсолютно всю інформацію про подію яка тільки що відбулась.
    const userNameEvent = event.currentTarget.value; // Отримується значення введеного тексту
    // currentTarget - властивість події яка зберігає посилання на елемент на якому висить обробник. В нашому випадку це поле вводу userName(значення яке стоїть перед крапкою методу userName.addEventListener)
    //.value - отримати значення input,textarea, select
    console.log(event);
    greeting.textContent = userNameEvent || "Anonymous"; // якщо значення userNameEvent є "порожнім" (тобто, "", null, undefined, 0, NaN або false), то використовується значення "Anonymous".Інакше буде використано значення userNameEvent.
};

