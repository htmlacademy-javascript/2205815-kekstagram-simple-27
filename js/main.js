import { renderPhotos } from './photoRendering.js';
import { getPhotos } from './data.js';
import './form.js';
import './uploadPictureEffects.js';
import './uploadPictureScale.js';
/*
renderPhotos(getPhotos(25));

const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const scaleInputValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const inputScaleValue = scaleInputValue.value.split('%');

const decreasePicture = () => {   
    if (inputScaleValue[0] <= MIN_VALUE_SCALE){
        scaleInputValue.value = `${MIN_VALUE_SCALE}%`;
        inputScaleValue[0] = MIN_VALUE_SCALE;
    }else{
        scaleInputValue.value = `${inputScaleValue[0] - STEP_VALUE_SCALE}%`;
        inputScaleValue[0] = inputScaleValue[0] - STEP_VALUE_SCALE;
    };
    imagePreview.style.transform = `scale(${inputScaleValue[0]}%)`;
};

const increasePicture = () => {
    if(inputScaleValue[0] >= MAX_VALUE_SCALE){
        scaleInputValue.value = `${MAX_VALUE_SCALE}%`;
        inputScaleValue[0] = MAX_VALUE_SCALE;
    }else{
        scaleInputValue.value = `${inputScaleValue[0] + STEP_VALUE_SCALE}%`;
        inputScaleValue[0] = inputScaleValue[0] + STEP_VALUE_SCALE;
    };
    imagePreview.style.transform = `scale(${inputScaleValue[0]}%)`;
};

smallerBtn.addEventListener('click', decreasePicture);
biggerBtn.addEventListener('click', increasePicture);

const effectsArr = document.querySelectorAll('.effects__radio');


for ( let i = 0; i < effectsArr.length; i++){
    effectsArr[i].addEventListener('change', test)
}

function test () {
    imagePreview.classList = '';
    imagePreview.classList.add(`effects__preview--${this.value}`); 
};*/