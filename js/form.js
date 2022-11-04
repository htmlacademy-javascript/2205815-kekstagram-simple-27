const uploadBtn = document.querySelector('.img-upload__input');
const imageFormEdit = document.querySelector('.img-upload__overlay');
const closeBtn = imageFormEdit.querySelector('.img-upload__cancel');
const imageForm = document.querySelector('#upload-select-image');

const closeFormClickHandler = () => {
  imageFormEdit.classList.add('hidden');
  imageForm.reset();
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  closeFormClickHandler();
};

const cancelKeydownHandler = (evt) => {
  if(evt.key === 'Escape'){
    closeFormClickHandler();
  }
};

uploadBtn.addEventListener('change', () => {
  document.addEventListener('keydown', cancelKeydownHandler);
  imageForm.addEventListener('submit', formSubmitHandler);
  closeBtn.addEventListener('click', closeFormClickHandler);
  imageFormEdit.classList.remove('hidden');
});
