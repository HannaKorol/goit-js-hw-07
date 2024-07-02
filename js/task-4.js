const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault(); // обов"язково для того, щоб відмінити поведінку браузера за замовчуванням,  
    //для подіЇ сабміту - це перевазантаження сторінки

    console.log(event);
    console.log(event.currentTarget);

const elements = event.currentTarget.elements;
    //в формі є elements - це властивість для роботи з елементами форми, там зберігаються всі інтерактивні елементи форми: name, email i  comment

const info = {
    email:
    
}


}
