const effectsArr = document.querySelectorAll('.effects__radio');

for ( let i = 0; i < effectsArr.length; i++) {
    effectsArr[i].addEventListener('change', effectsChangeHandel)
};

function effectsChangeHandel () {
    imagePreview.classList = '';
    imagePreview.classList.add(`effects__preview--${this.value}`); 
};
