import {enableSubmitBtn, closeForm} from './form.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const templateDataError = document.querySelector('#data__error').content.querySelector('.data__error');
const documentBody = document.querySelector('body');
const successModal = templateSuccess.cloneNode(true);
const errorModal = templateError.cloneNode(true);
const dataErrorModal = templateDataError.cloneNode(true);


const removeModals = () => {
  successModal.remove();
  errorModal.remove();
  dataErrorModal.remove();
};

const clickBtnHandler = () => {
  removeModals();
};

const escBtnHandler = (evt) => {
  if (evt.key === 'Escape') {
    removeModals();
  }
};

const missClicksHandler = (evt) => {
  if (evt.target === evt.currentTarget) {
    removeModals();
  }
};

export const showDataErrorMessage = () => {
  documentBody.appendChild(dataErrorModal);
  setTimeout(removeModals, 1500);
};

export const showSuccessDialog = () => {
  closeForm();
  enableSubmitBtn();
  documentBody.appendChild(successModal);
  const successBtn = successModal.querySelector('.success__button');
  document.addEventListener('keydown', escBtnHandler);
  successBtn.addEventListener('click', clickBtnHandler);
  successModal.addEventListener('click', missClicksHandler);
};

export const showErrorDialog = () => {
  enableSubmitBtn();
  documentBody.appendChild(errorModal);
  const errorBtn = errorModal.querySelector('.error__button');
  document.addEventListener('keydown', escBtnHandler);
  errorBtn.addEventListener('click', clickBtnHandler);
  errorModal.addEventListener('click', missClicksHandler);
};
