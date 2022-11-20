//import {resetForm} from './util.js';

const imageForm = document.querySelector('#upload-select-image');
//const imageFormEdit = document.querySelector('.img-upload__overlay');
const submitBtn = imageForm.querySelector('#upload-submit');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const documentBody = document.querySelector('body');
const successModal = templateSuccess.cloneNode(true);
const errorModal = templateError.cloneNode(true);
const dataErrorModal = templateError.cloneNode(true);
const successBtn = successModal.querySelector('.success__button');
const errorBtn = errorModal.querySelector('.error__button');


const resetSubmitBtn = () => {
  submitBtn.textContent = 'Опубликовать';
  submitBtn.disabled = false;
};

const removeModals = () => {
  successModal.remove();
  errorModal.remove();
  dataErrorModal.remove();
};

//const closeImageFormEdit = () => {
// imageFormEdit.classList.add('hidden');
//};

const ClickSuccessBtnHandler = () => {
  //closeImageFormEdit();
  removeModals();
  resetSubmitBtn();
  //resetForm();
};

const EscSuccessBtnHandler = (evt) => {
  if (evt.key === 'Escape') {
    //closeImageFormEdit();
    removeModals();
    resetSubmitBtn();
    //resetForm();
  }
};

const ClickErrorBtnHandler = () => {
  removeModals();
  resetSubmitBtn();
};

const EscErrorBtnHandler = (evt) => {
  if (evt.key === 'Escape') {
    removeModals();
    resetSubmitBtn();
  }
};

const missClickSuccessHandler = (evt) => {
  if (evt.target === evt.currentTarget) {
    //closeImageFormEdit();
    removeModals();
    resetSubmitBtn();
    //resetForm();
  }
};

const missClickErrorHandler = (evt) => {
  if (evt.target === evt.currentTarget) {
    removeModals();
    resetSubmitBtn();
  }
};


export const showDataErrorMessage = () => {
  documentBody.appendChild(dataErrorModal);
  dataErrorModal.querySelector('.error__title').textContent = 'Ошибка получения данных с сервера';
  dataErrorModal.querySelector('.error__button').classList.add('hidden');
  setTimeout(removeModals, 1500);
};

export const showSuccessDialog = () => {
  documentBody.appendChild(successModal);
  document.addEventListener('keydown', EscSuccessBtnHandler);
  successBtn.addEventListener('click', ClickSuccessBtnHandler);
  successModal.addEventListener('click', missClickSuccessHandler);
};

export const showErrorDialog = () => {
  documentBody.appendChild(errorModal);
  document.addEventListener('keydown', EscErrorBtnHandler);
  errorBtn.addEventListener('click', ClickErrorBtnHandler);
  errorModal.addEventListener('click', missClickErrorHandler);
};
