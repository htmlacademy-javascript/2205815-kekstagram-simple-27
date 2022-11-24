import {postDataPictures} from './api.js';
import {onSuccess, onError} from './dialogs.js';
import {setInitialScale} from './picture-scale.js';

const uploadButton = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeButton = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const submitButton = imageForm.querySelector('#upload-submit');
const imagePreview = document.querySelector('#image');
const documentBody = document.querySelector('body');

const resetImageEffects = () => {
  imagePreview.classList = '';
  imagePreview.removeAttribute('style');
};

const disableSubmitButton = () => {
  submitButton.textContent = 'Опубликовать';
  submitButton.disabled = true;
};

export const enableSubmitButton = () => {
  submitButton.textContent = 'Опубликовать';
  submitButton.disabled = false;
};

export const imageFormEditClickHandler = () => {
  imageFormEdit.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  imageForm.reset();
  setInitialScale();
  resetImageEffects();
};

const imageFormEditKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    imageFormEditClickHandler();
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  disableSubmitButton();
  const formData = new FormData(evt.target);
  postDataPictures(formData, onSuccess, onError);
};

const uploadChangeButtonHandler = () => {
  imageForm.addEventListener('keydown', imageFormEditKeydownHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeButton.addEventListener('click', imageFormEditClickHandler);
  imageFormEdit.classList.remove('hidden');
  documentBody.classList.add('modal-open');
};

uploadButton.addEventListener('change', uploadChangeButtonHandler);
