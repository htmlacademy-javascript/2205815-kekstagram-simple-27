import { getPhotos } from './data.js';

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


const createFragmentAndAddPhotos = () => {
  const photoFragment = document.createDocumentFragment();
  const arrayOfPhotos = getPhotos(25);

  arrayOfPhotos.forEach((photo) => {
    const photoElement = createPhoto(photo);
    photoFragment.appendChild(photoElement);
  });

  return photoFragment;
};

export const renderPhotos = () => {
  const fragmentWithPhotos = createFragmentAndAddPhotos();

  pictureList.appendChild(fragmentWithPhotos);
};
