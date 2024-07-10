//*Pictures

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


// 1) Створення картинок з HTML-розміткою (з елементом списку li)
function createGalleryImgs(images) {
  return images.map((item) => 
    `<li class ="gallery-item">
  <img src="${item.url}" alt="${item.alt}">
  </li>`
).join("");
};

// 2) Знаходимо в HTML пустий "ul" список для додавання посилань
    const galleryList = document.querySelector("ul.gallery");

//3) Вставка згенерованої HTML-розмітки всередину пустого "ul" c класом gallery
galleryList.insertAdjacentHTML ("beforeend", createGalleryImgs(images));


//*innerHTML -  добре підходить для швидкої зміни вмісту елемента в DOM(з перезаписом існуючого вмісту!) коли безпека і продуктивність не є критичними аспектами. Краще не використовувати бо врвзливий до XSS атак.
//*insertAdjacentHTML — це метод, який дозволяє вставляти HTML-код у визначене місце в DOM-дереві без перезапису існуючого вмісту. Це ефективний спосіб динамічно оновлювати DOM, додаючи нові елементи.("beforebegin""afterbegin""beforeend""afterend")

//--------------------------------------------------------------------------------------------------------------

//*Варіант 2

// 1) Створення li i картинок і додавання їх до батьківського елемента за допомогою appendChild. Цей підхід менш схильний до XSS-атак і може бути більш продуктивним, оскільки не вимагає перерендерингу всього HTML-вмісту.
/* images.forEach(image => {
  const listItem = document.createElement("li"); // створюємо елемент списку li
  const img = document.createElement("img"); // створюємо параметри картинок
  img.src = image.url;
  img.alt = image.alt;
  img.width = 360;
  img.height = 300;
  listItem.appendChild(img); // додаємо картинку до елементу списку li
  galleryList.appendChild(listItem); // додаємо до списку ul створені li
}); */

//XSS (Cross-Site Scripting) — це тип вразливості в безпеці веб-додатків, який дозволяє зловмисникам вставляти шкідливий скрипт на сторінки, які бачать інші користувачі. Цей скрипт може виконувати різні небажані дії, такі як крадіжка особистих даних, перенаправлення користувачів на фішингові сайти або виконання дій від імені користувача без його відома.

//----------------------------------------------------------------------------------------------------------------------

//*Варіант 3 але він довший і виконання більш заплутане!

/* // 1) Створення картинок 
const createGalleryImgs = (images) =>
  images.map((item) => {
      const imgEl = document.createElement("img"); // створення картинок
      imgEl.src = item.url; // наповнення картинки - посилання на картинку
      imgEl.alt = item.alt; // наповнення картинки - альтернативний текст для картинки
      imgEl.width = 360; // наповнення картинки - ширина картинки
      imgEl.height = 300; // наповнення картинки - довжина картинки
      return imgEl; // вивід в консоль - бо це функція
    });

    
    // 2) Знаходимо пустий "ul" список для додавання посилань
const galleryImgs = document.querySelector("ul.gallery");

// 3) Створюємо функцію для створення нового елемента li
const createGalleryListItem = () => document.createElement('li');


// 4) Групування картинок в одне ціле
    const galleryEls = createGalleryImgs(images);
    console.log(...galleryEls); 

    // 5) Створення нового елемента li і додавання картинок до нього
    const galleryListItem = createGalleryListItem();
galleryListItem.append(...galleryEls); //6) Додавання картинок до нового елемента li

// 7) Додаємо новий елемент li до батьківського елемента
galleryImgs.appendChild(galleryListItem); */
