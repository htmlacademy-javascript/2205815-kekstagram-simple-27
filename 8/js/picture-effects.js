const picturePreview = document.querySelector('.img-upload__preview');
const effectList = document.querySelector('.effects__list');

effectList.addEventListener('click', (evt) => {
  picturePreview.classList = '';
  picturePreview.classList.add(`effects__preview--${evt.target.dataset.effect}`);
});
