const effectList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('#image');

effectList.addEventListener('click', (evt) => {
  imagePreview.classList = '';
  imagePreview.classList.add(`effects__preview--${evt.target.dataset.effect}`);
});
