const imageForm = document.querySelector('#upload-select-image');
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

const ClickBtnHandler = () => {
  removeModals();
  resetSubmitBtn();
};

const EscBtnHandler = (evt) => {
  if (evt.key === 'Escape') {
    removeModals();
    resetSubmitBtn();
  }
};


const missClicksHandler = (evt) => {
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
  document.addEventListener('keydown', EscBtnHandler);
  successBtn.addEventListener('click', ClickBtnHandler);
  successModal.addEventListener('click', missClicksHandler);
};

export const showErrorDialog = () => {
  documentBody.appendChild(errorModal);
  document.addEventListener('keydown', EscBtnHandler);
  errorBtn.addEventListener('click', ClickBtnHandler);
  errorModal.addEventListener('click', missClicksHandler);
};
