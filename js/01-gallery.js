import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery')

const imgItem =({preview, original, description} = {}) =>(
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-original-url = "${original}"
            alt="${description}" 
            />
        </a>
    </li>`
    );

imgItem(galleryItems)

const galleryImgArr = galleryItems.map((el) => imgItem(el))   
listEl.insertAdjacentHTML('beforeend', galleryImgArr.join(''));

const onImgClick = (event) =>{
    event.preventDefault()
    const {target:{nodeName,dataset }} = event

    if (nodeName !== 'IMG') {
        return;
    }

    const {originalUrl} = dataset;
    const makeImgBig = basicLightbox.create(`
    <img src="${originalUrl}" width="800" height="600">
`);
    makeImgBig.show()

    listEl.addEventListener('keydown', (event) => {
        if(event.code === 'Escape') {
            makeImgBig.close();
        }
    });
}

listEl.addEventListener('click', onImgClick);