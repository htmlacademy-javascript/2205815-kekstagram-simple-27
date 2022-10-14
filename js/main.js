const checkStringLength = (textString, maxLength) =>
  (textString.length < maxLength);

checkStringLength('work', 10);


const getRandomInteger = (min, max) => {
  if (min > max && min >= 0 && max >= 0) { // swap arguments if it need
    min = min + max;
    max = min - max;
    min = min - max;
    return Math.floor(Math.random() * (max - min + 1));
  } else if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1));
  }

  return NaN;
};

const elementDescription = [
  'курорт',
  'к пляжу',
  'лагуна',
  'девушка',
  'суп',
  'ламба',
  'клубника',
  'морс',
  'кукурузник',
  'обувь',
  'море',
  'ауди',
  'блюдо',
  'котосуши',
  'тапочки',
  'горы',
  'хор',
  'импала',
  'светотапки',
  'пальмы',
  'обед',
  'закат',
  'краб',
  'концерт',
  'сафари',
];

const createId = (i) => {
  const id = i + 1;

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: elementDescription[i],
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  };
};

const elementArr = Array.from({ length: 25 },(_, i) => createId(i));

elementArr();
