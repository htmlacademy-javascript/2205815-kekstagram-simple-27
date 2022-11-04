const effectsArr = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview');

const changeEffects = () => {
  for ( let i = 0; i < effectsArr.length; i++) {
    effectsArr[i].addEventListener('click', effectsClickHandel);
  }
};

function effectsClickHandel () {
  imagePreview.classList = '';
  imagePreview.classList.add(`effects__preview--${this.value}`);
}

changeEffects();
