const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
let inputScaleValue = document.querySelector('.scale__control--value').value.replace('%', '');
const imagePreview = document.querySelector('.img-upload__preview');
const buttonsList = document.querySelector('.img-upload__scale');


const changeScale = (value) => {
  inputScaleValue -= value;
  inputScaleValue < MIN_VALUE_SCALE ? inputScaleValue = MIN_VALUE_SCALE : inputScaleValue;
  inputScaleValue > MAX_VALUE_SCALE ? inputScaleValue = MAX_VALUE_SCALE : inputScaleValue;
  imagePreview.style.transform = `scale(${inputScaleValue}%)`;
  inputScale.value = `${inputScaleValue}%`;
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
