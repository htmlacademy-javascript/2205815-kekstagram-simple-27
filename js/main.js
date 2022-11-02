import { renderPhotos } from './photoRendering.js';
import { getPhotos } from './data.js';
import './form.js';

renderPhotos(getPhotos(25));
