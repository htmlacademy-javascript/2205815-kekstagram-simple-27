import {postDataPictures} from './api.js';
import {showSuccessDialog} from './dialogs.js';
import {showErrorDialog} from './dialogs.js';

const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const submitBtn = imageForm.querySelector('#upload-submit');
const imagePreview = document.querySelector('.img-upload__preview');


const resetAndCloseForm = () => {
  imageFormEdit.classList.add('hidden');
  imageForm.reset();
  imagePreview.classList = '';
  imagePreview.style.transform = 'scale(100%)';
};

const EscImageFormEditHandler = (evt) => {
  if (evt.key === 'Escape') {
    resetAndCloseForm();
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Загрузка...';
  const formData = new FormData(evt.target);
  postDataPictures(formData, showSuccessDialog, showErrorDialog, resetAndCloseForm);
};

const showFormEdit = () => {
  imageForm.addEventListener('keydown', EscImageFormEditHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeBtn.addEventListener('click', resetAndCloseForm);
  imageFormEdit.classList.remove('hidden');
};

uploadBtn.addEventListener('change', showFormEdit);
