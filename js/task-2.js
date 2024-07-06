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

// 1) Cтворити пустий "ul" список для додавання посилань
const galleryImgs = document.querySelector("ul.gallery");

// 2) Створення "li" картинок 
const createGalleryImgs = (images) =>
  images.map((item) => {
      const imgEl = document.createElement("img"); // створення картинок
      imgEl.src = item.url; // наповнення картинки - посилання на картинку
      imgEl.alt = item.alt; // наповнення картинки - альтернативний текст для картинки
      imgEl.width = 360; // наповнення картинки - ширина картинки
      imgEl.height = 300; // наповнення картинки - довжина картинки
      return imgEl; // вивід в консоль - бо це функція
    });


    const galleryEls = createGalleryImgs(images); // 3) групування картинок 1.li...  2.li...  3.li... в одне ціле
    console.log(galleryEls); 

    galleryImgs.append(...galleryEls); //*4) Додавання картинок до списку


