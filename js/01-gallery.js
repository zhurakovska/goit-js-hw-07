import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

const imgItem = ({ preview, original, description }) => (
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-original-url="${original}"
        alt="${description}" 
      />
    </a>
  </li>`
);

imgItem(galleryItems);

const galleryImgArr = galleryItems.map(imgItem);
listEl.insertAdjacentHTML('beforeend', galleryImgArr.join(''));

let currentModal = null;

const openModal = (originalUrl) => {
  const makeImgBig = basicLightbox.create(`
    <img src="${originalUrl}" width="800" height="600">
  `);

  makeImgBig.show();
  currentModal = makeImgBig;
  document.addEventListener('keydown', onModalBtnClick);
};

const closeModal = () => {
  if (currentModal) {
    currentModal.close();
    currentModal = null;
  }
  document.removeEventListener('keydown', onModalBtnClick);
};

const onModalBtnClick = (event) => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onImgClick = (event) => {
  event.preventDefault();

  const { target: { nodeName, dataset } } = event;

  if (nodeName !== 'IMG') {
    return;
  }

  const { originalUrl } = dataset;
  openModal(originalUrl);
};

listEl.addEventListener('click', onImgClick);
