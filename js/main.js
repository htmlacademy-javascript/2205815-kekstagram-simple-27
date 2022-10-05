//Функция, возвращающая случайное целое число из переданного диапазона включительно.

let RandomInteger  = function getRandomInteger(min, max){
   if(typeof(min) != 'number' && typeof(max) != 'number'){   //check type argument
  
  return console.log(RandomInteger = NaN);
 }
  if ( min > max && Math.sign(min) >= 0 && Math.sign(max) >= 0 ) { // swap arguments if it need
        min = min + max;        
        max = min - max;
        min = min - max;
    return Math.floor(Math.random() * (max - min + 1)) ;
   }
   else if ( Math.sign(min) >= 0 && Math.sign(max) >= 0 ) {
    return Math.floor(Math.random() * (max - min + 1)) ;
 }     
    
   return console.log(RandomInteger = NaN);   
 }

console.log(RandomInteger(0,10));

// проверка максимальной длины строки

let testString = function getMaxString (textString, maxLength) {
  textString = textString.length;

  if(textString > maxLength ){
    return console.log(testString = false);
  }
  return console.log(testString = true);
}

