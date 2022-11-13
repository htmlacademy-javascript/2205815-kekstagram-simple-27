const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
let inputScaleValue = document.querySelector('.scale__control--value').value.replace('%', '')
let inputScale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const buttonsList = document.querySelector('.img-upload__scale');


const changeScale = (value) => {
  inputScaleValue = inputScaleValue - value;
  inputScaleValue > MAX_VALUE_SCALE ? inputScaleValue = MAX_VALUE_SCALE : inputScaleValue;
  imagePreview.style.transform = `scale(${inputScaleValue}%)`;
  inputScale.value = `${inputScaleValue}%`
  console.log(inputScaleValue);

}


buttonsList.addEventListener('click', evt => {
  switch (evt.target){
    case smallerBtn:
      changeScale(Math.min(inputScaleValue - 25, 25))
      break
    case biggerBtn:
      changeScale(-25); 
      break
  };
})
