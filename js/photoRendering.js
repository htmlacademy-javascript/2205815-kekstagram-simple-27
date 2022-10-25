import {getPhotos} from './data.js';

let pictureList = document.querySelector('.pictures');
let templateList = document.querySelector('#picture').content.querySelector('.picture');
let hiddenTitle = document.querySelector('.pictures__title').classList.remove('visually-hidden');

let anothePhotos = getPhotos(25);

 anothePhotos.forEach((photo) => {
  let photoElement = templateList.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent  = photo.comments;
  pictureList.appendChild(photoElement);
});
