const templateSuccessDialog = document.querySelector('#success').content.querySelector('.success');
const templateErrorDialog = document.querySelector('#error').content.querySelector('.error');
const templateDataErrorMessage = document.querySelector('#data__error').content.querySelector('.data__error');
let activeDialog = null;

const removeModal = () => {
  activeDialog.remove();
  document.removeEventListener('keydown', dialogKeydownHandler);
  activeDialog = null;
};

function dialogKeydownHandler (evt) {
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
  document.body.append(dataErrorModal);
  activeDialog = dataErrorModal;
  setTimeout(removeModal, 1500);
};

export const showSuccessDialog = () => {
  const successModal = templateSuccessDialog.cloneNode(true);
  successModal.addEventListener('click', dialogClickHandler);
  document.body.append(successModal);
  activeDialog = successModal;
  document.addEventListener('keydown', dialogKeydownHandler);
};

export const showErrorDialog = () => {
  const errorModal = templateErrorDialog.cloneNode(true);
  errorModal.addEventListener('click', dialogClickHandler);
  document.body.append(errorModal);
  activeDialog = errorModal;
  document.addEventListener('keydown', dialogKeydownHandler);
};
