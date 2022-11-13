import {post} from './fetch.js';
const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');
const imagePreview = document.querySelector('.img-upload__preview');
const submitBtn = imageForm.querySelector('#upload-submit');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');
const successModal = templateSuccess.cloneNode(true);
const errorModal = templateError.cloneNode(true);
const successBtn = successModal.querySelector('.success__button');
const errorBtn = errorModal.querySelector('.error__button');

errorModal.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    errorModal.classList.add('hidden');
  }
});
successModal.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    successModal.classList.add('hidden');
  }
});

main.appendChild(successModal);
successModal.classList.add('hidden');

main.appendChild(errorModal);
errorModal.classList.add('hidden');

successBtn.addEventListener('click', () => {
  successModal.classList.add('hidden');
});

errorBtn.addEventListener('click', () => {
  errorModal.classList.add('hidden');
  imageFormEdit.classList.remove('hidden');
});


const closeResultForms = (evt) => {
  if (evt.key === 'Escape') {
    successModal.classList.add('hidden');
    errorModal.classList.add('hidden');
  }
};

const createSuccessModal = () => {
  document.addEventListener('keydown', closeResultForms );
  successModal.classList.remove('hidden');
};

const createErrorModal = () => {
  document.addEventListener('keydown', closeResultForms);
  errorModal.classList.remove('hidden');
};

const closeFormClickHandler = (needReset) => {
  imageFormEdit.classList.add('hidden');
  if(needReset){
    imageForm.reset();
    imagePreview.classList = '';
  }

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
  post(formData, onSuccess, onError);

};

const cancelKeydownHandler = (evt) => {
  if(evt.key === 'Escape') {
    closeFormClickHandler();
  }
};

uploadBtn.addEventListener('change', () => {
  document.addEventListener('keydown', cancelKeydownHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeBtn.addEventListener('click', closeFormClickHandler);
  imageFormEdit.classList.remove('hidden');
});
