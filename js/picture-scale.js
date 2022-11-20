const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const buttonsList = document.querySelector('.img-upload__scale');


const changeScale = (step) => {
  let currentScale = document.querySelector('.scale__control--value').value.replace('%', '');
  currentScale -= step;
  if(currentScale < MIN_VALUE_SCALE) {
    currentScale = Math.max(MIN_VALUE_SCALE, currentScale);
  }
  if(currentScale > MAX_VALUE_SCALE){
    currentScale = Math.min(MAX_VALUE_SCALE, currentScale);
  }
  imagePreview.style.transform = `scale(${currentScale}%)`;
  inputScale.value = `${currentScale}%`;
};


buttonsList.addEventListener('click', (evt) => {
  switch (evt.target) {
    case smallerBtn:
      changeScale(STEP_VALUE_SCALE);
      break;
    case biggerBtn:
      changeScale(-STEP_VALUE_SCALE);
      break;
  }
});
