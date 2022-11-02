import {getRandomInteger} from './util.js';

const ELEMENT_DESCRIPTIONS = [
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


export const createPhoto = (i) => {
  const id = i + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: ELEMENT_DESCRIPTIONS[i],
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  };
};


export const getPhotos = (count) => Array.from({length: count},(_, i) => createPhoto(i));
