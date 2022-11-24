const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('#image');
const buttonsList = document.querySelector('.img-upload__scale');
const scaleControl = document.querySelector('.scale__control--value');

export const setInitialScale = () => {
  scaleControl.value = `${MAX_VALUE_SCALE}%`;
};

const changeScale = (step) => {
  let currentScale = document.querySelector('.scale__control--value').value.replace('%', '');
  const value = Number(currentScale) + step;
  if (step < 0) {
    currentScale = Math.max(MIN_VALUE_SCALE, value);
  }

  if (step > 0) {
    currentScale = Math.min(MAX_VALUE_SCALE, value);
  }

  imagePreview.style.transform = `scale(${currentScale}%)`;
  scaleControl.value = `${currentScale}%`;
};

buttonsList.addEventListener('click', (evt) => {
  switch (evt.target) {
    case smallerBtn:
      changeScale(-STEP_VALUE_SCALE);
      break;
    case biggerBtn:
      changeScale(STEP_VALUE_SCALE);
      break;
  }
});
