import { renderPhotos } from './photoRendering.js';
import { getPhotos } from './data.js';

renderPhotos(getPhotos(25));
