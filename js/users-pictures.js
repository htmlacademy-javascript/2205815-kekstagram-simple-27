const pictureList = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const hiddenTitle = document.querySelector('.pictures__title');

hiddenTitle.classList.remove('visually-hidden');

const createPhoto = ({ url, description, likes, comments }) => {
  const photoElement = template.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  return photoElement;
};

const createPhotosList = (arrayOfPhotos) => {
<<<<<<<< HEAD:js/photoRendering.js
  const photoFragment = document.createDocumentFragment();
========
>>>>>>>> 0147a6526f071e81f6c36558d681bb93197c7e46:js/users-pictures.js
  arrayOfPhotos.forEach((photo) => {
    const photoElement = createPhoto(photo);
    photoFragment.appendChild(photoElement);
  });
  return photoFragment;
};

export const renderPhotos = (arrayOfPhotos) => {
  const photosList = createPhotosList(arrayOfPhotos);

  pictureList.append(photosList);
};
