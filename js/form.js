import {postDataPictures} from './api.js';
import {showSuccessDialog} from './dialogs.js';
import {showErrorDialog} from './dialogs.js';
import {setInitialScale} from './picture-scale.js';

const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const submitBtn = imageForm.querySelector('#upload-submit');
const imagePreview = document.querySelector('.img-upload__preview');

export const disableSubmitBtn = () => {
  submitBtn.textContent = 'Опубликовать';
  submitBtn.disabled = true;
};

export const enableSubmitBtn = () => {
  submitBtn.textContent = 'Опубликовать';
  submitBtn.disabled = false;
};

export const closeForm = () => {
  imageFormEdit.classList.add('hidden');
  imageForm.reset();
  imagePreview.classList = '';
  setInitialScale();
  imagePreview.style.transform = 'scale(100%)';
};

const escImageFormEditHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  disableSubmitBtn();
  const formData = new FormData(evt.target);
  postDataPictures(formData, showSuccessDialog, showErrorDialog);
};

const showFormEdit = () => {
  imageForm.addEventListener('keydown', escImageFormEditHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeBtn.addEventListener('click', closeForm);
  imageFormEdit.classList.remove('hidden');
};

uploadBtn.addEventListener('change', showFormEdit);
