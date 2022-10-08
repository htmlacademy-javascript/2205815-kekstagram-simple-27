

const getRandomInteger = (min, max) =>{
  if (min > max && min >= 0 && max >= 0) { // swap arguments if it need
    min = min + max;
    max = min - max;
    min = min - max;
    return Math.floor(Math.random() * (max - min + 1)) ;
  }
  else if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) ;
  }

  return NaN;
};
getRandomInteger(1, 10);

// проверка максимальной длины строки

const checkStringLength = (textString, maxLength) =>
  (textString.length > maxLength) ? 'false' : 'true';

checkStringLength('work', 10);
