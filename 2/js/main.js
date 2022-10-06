

const getRandomInteger = (min, max) =>{
  if(typeof(min) !== 'number' && typeof(max) !== 'number') {
    return NaN;
  }
  if ( min > max && min >= 0 && max >= 0 ) { // swap arguments if it need
    min = min + max;
    max = min - max;
    min = min - max;
    return Math.floor(Math.random() * (max - min + 1)) ;
  }
  else if ( min >= 0 && max >= 0 ) {
    return Math.floor(Math.random() * (max - min + 1)) ;
  }

  return NaN;
};
getRandomInteger(1, 10);

// проверка максимальной длины строки

const checkStringLength = (textString, maxLength) => {

  if (textString > maxLength) {
    return false;
  }
  return true;
};
checkStringLength('work', 10);
