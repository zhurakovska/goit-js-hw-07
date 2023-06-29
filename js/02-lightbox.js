import { galleryItems } from './gallery-items.js';
const listEl = document.querySelector('.gallery')

const imgItem =({preview, original, description}) =>(
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" 
            />
        </a>
    </li>`
    );

imgItem(galleryItems)

const galleryImgArr = galleryItems.map((el) => imgItem(el))   
listEl.insertAdjacentHTML('beforeend', galleryImgArr.join(''));
  
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});

listEl.addEventListener('click', (event) => {
    event.preventDefault();
    const{ nodeName} = target.event;
   if (nodeName !== 'IMG') {
    return;
  }
    lightbox.open();
  });
