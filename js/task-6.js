function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




clickMe.addEventListener("click", createBoxes)
function createBoxes(amount) { //приймає один параметр — число, що зберігає кількість елементів для рендеру.

}

clickMe.removeEventListener("click", destroyBoxes)
function destroyBoxes() {} // очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.