import {getPhotos} from './data.js';

const pictureList = document.querySelector('.pictures');
const templateList = document.querySelector('#picture').content.querySelector('.picture');
const hiddenTitle = document.querySelector('.pictures__title');

hiddenTitle.classList.remove('visually-hidden');

const anothePhotos = getPhotos(25);

anothePhotos.forEach((photo) => {
  const photoElement = templateList.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent  = photo.comments;
  pictureList.appendChild(photoElement);
});
