const userName = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

userName.addEventListener("input", handleInput)

function handleInput(event) {
    const userNameEvent = event.currentTarget.value;
    console.log(event);
    greeting.textContent = userNameEvent || "Anonymous";
};

