import { renderPhotos } from './photoRendering.js';
import { getPhotos } from './data.js';
import './form.js';
import './uploadPictureEffects.js';
import './uploadPictureScale.js';

renderPhotos(getPhotos(25));
