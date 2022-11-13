const picturePreview = document.querySelector('.img-upload__preview');
const effectList = document.querySelector('.effects__list')

  effectList.addEventListener('click', evt => {
    picturePreview.classList = '';
    const effectName = evt.target.id.split('-');
    picturePreview.classList.add(`effects__preview--${effectName[1]}`);
  });
