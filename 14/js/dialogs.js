import {enableSubmitButton, imageFormEditClickHandler} from './form.js';

const templateSuccessDialog = document.querySelector('#success').content.querySelector('.success');
const templateErrorDialog = document.querySelector('#error').content.querySelector('.error');
const templateDataErrorMessage = document.querySelector('#data__error').content.querySelector('.data__error');
const documentBody = document.querySelector('body');
let activeDialog = null;

const removeModal = () => {
  activeDialog.remove();
  document.removeEventListener('keydown', dialogClickdownHandler);
  activeDialog = null;
};

function dialogClickdownHandler (evt) {
  if (evt.key === 'Escape') {
    removeModal();
  }
}

const dialogClickHandler = (evt) => {
  if (evt.target.hasAttribute('data-dialog-close')) {
    removeModal();
  }
};

export const showDataErrorMessage = () => {
  const dataErrorModal = templateDataErrorMessage.cloneNode(true);
  documentBody.append(dataErrorModal);
  activeDialog = dataErrorModal;
  setTimeout(removeModal, 1500);
};

const showSuccessDialog = () => {
  const successModal = templateSuccessDialog.cloneNode(true);
  successModal.addEventListener('click', dialogClickHandler);
  documentBody.append(successModal);
  activeDialog = successModal;
  document.addEventListener('keydown', dialogClickdownHandler);
};

const showErrorDialog = () => {
  const errorModal = templateErrorDialog.cloneNode(true);
  errorModal.addEventListener('click', dialogClickHandler);
  documentBody.append(errorModal);
  activeDialog = errorModal;
  document.addEventListener('keydown', dialogClickdownHandler);
};

export const onSuccess = () => {
  showSuccessDialog();
  enableSubmitButton();
  imageFormEditClickHandler();
};

export const onError = () => {
  showErrorDialog();
  enableSubmitButton();
};
