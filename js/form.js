import {postDataPictures} from './api.js';

const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const imagePreview = document.querySelector('.img-upload__preview');
const submitBtn = imageForm.querySelector('#upload-submit');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const documentBody = document.querySelector('body');
const successModal = templateSuccess.cloneNode(true);
const errorModal = templateError.cloneNode(true);
const dataErrorModal = templateError.cloneNode(true);
const successBtn = successModal.querySelector('.success__button');
const errorBtn = errorModal.querySelector('.error__button');


documentBody.appendChild(dataErrorModal);
dataErrorModal.classList.add('hidden');

documentBody.appendChild(successModal);
successModal.classList.add('hidden');

documentBody.appendChild(errorModal);
errorModal.classList.add('hidden');


const closeFormClickHandler = (reset) => {
  imageFormEdit.classList.add('hidden');
  if(reset){
    imageForm.reset();
    imagePreview.classList = '';
    imagePreview.style.transform = 'scale(100%)';
  }
};

const closeDataErrorModal = () => {
  dataErrorModal.classList.add('hidden');
};

const closeErrorModal = () => {
  errorModal.classList.add('hidden');
  imageFormEdit.classList.remove('hidden');
};

const closeModals = (evt) => {
  if (evt.key === 'Escape') {
    successModal.classList.add('hidden');
    errorModal.classList.add('hidden');
  }
};

const cancelKeydownHandler = (evt) => {
  if(evt.key === 'Escape') {
    closeFormClickHandler(true);
  }
};


export const createDataErrorModal = () => {
  dataErrorModal.classList.remove('hidden');
  dataErrorModal.querySelector('.error__title').textContent = 'Ошибка получения данных с сервера';
  dataErrorModal.querySelector('.error__button').classList.add('hidden');
  setTimeout(closeDataErrorModal, 1500);
};

const createSuccessModal = () => {
  document.addEventListener('keydown', closeModals );
  successModal.classList.remove('hidden');
};

const createErrorModal = () => {
  document.addEventListener('keydown', closeModals);
  errorModal.classList.remove('hidden');
};

const onSuccess = () => {
  submitBtn.removeAttribute('disabled');
  closeFormClickHandler(true);
  createSuccessModal();
};

const onError = () => {
  submitBtn.removeAttribute('disabled');
  closeFormClickHandler();
  createErrorModal();
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  submitBtn.setAttribute('disabled', 'disabled');
  const formData = new FormData(evt.target);
  postDataPictures(formData, onSuccess, onError);
};

errorModal.addEventListener('click', (evt) => {
  errorBtn.addEventListener('click', closeErrorModal);
  if (evt.target === evt.currentTarget) {
    closeErrorModal();
  }
});


successModal.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    successModal.classList.add('hidden');
  }
});

successBtn.addEventListener('click', () => {
  successModal.classList.add('hidden');
  closeFormClickHandler(true);
});

uploadBtn.addEventListener('change', () => {
  document.addEventListener('keydown', cancelKeydownHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeBtn.addEventListener('click', closeFormClickHandler);
  imageFormEdit.classList.remove('hidden');
});
