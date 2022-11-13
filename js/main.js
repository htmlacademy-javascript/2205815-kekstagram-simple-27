import { renderPhotos } from './photoRendering.js';
import './form.js';
import './uploadPictureEffects.js';
import './uploadPictureScale.js';
import { server } from './fetch.js';

server(renderPhotos);