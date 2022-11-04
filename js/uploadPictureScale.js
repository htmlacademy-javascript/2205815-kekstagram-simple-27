const STEP_VALUE_SCALE = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;

const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const scaleInputValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const inputScaleValue = scaleInputValue.value.split('%');

const decreasePictureClickHandle = () => {   
    if (inputScaleValue[0] <= MIN_VALUE_SCALE) {
        scaleInputValue.value = `${MIN_VALUE_SCALE}%`;
        inputScaleValue[0] = MIN_VALUE_SCALE;
    }else{
        scaleInputValue.value = `${inputScaleValue[0] - STEP_VALUE_SCALE}%`;
        inputScaleValue[0] = inputScaleValue[0] - STEP_VALUE_SCALE;
    };
    imagePreview.style.transform = `scale(${inputScaleValue[0]}%)`;
};

const increasePictureClickHandle = () => {
    if(inputScaleValue[0] >= MAX_VALUE_SCALE) {
        scaleInputValue.value = `${MAX_VALUE_SCALE}%`;
        inputScaleValue[0] = MAX_VALUE_SCALE;
    }else{
        scaleInputValue.value = `${inputScaleValue[0] + STEP_VALUE_SCALE}%`;
        inputScaleValue[0] = inputScaleValue[0] + STEP_VALUE_SCALE;
    };
    imagePreview.style.transform = `scale(${inputScaleValue[0]}%)`;
};

smallerBtn.addEventListener('click', decreasePictureClickHandle);
biggerBtn.addEventListener('click', increasePictureClickHandle);
