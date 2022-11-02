
const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const closeForm = () => {
  imageFormEdit.classList.add('hidden');
  imageForm.reset();
};

const submitHandler = (evt) => {
  evt.preventDefault();
  closeForm();
};

const escBtnListener = (evt) => {
  if( evt.key === 'Escape'){
    closeForm();
  }
};

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const closeAndResetForm = () => {
  closeForm();
  document.removeEventListener('keydown', escBtnListener );
  imageForm.removeEventListener('submit', submitHandler);
  closeBtn.removeEventListener('click', closeAndResetForm);
};

uploadBtn.addEventListener('change', () => {
  document.addEventListener('keydown', escBtnListener );
  imageForm.addEventListener('submit', submitHandler);
  closeBtn.addEventListener('click', closeAndResetForm);
  imageFormEdit.classList.remove('hidden');
});
