import {renderPhotos} from './users-pictures.js';
import './form.js';
import './picture-effects.js';
import './picture-scale.js';
import {getDataPictures} from './api.js';
import {showDataErrorMessage} from './dialogs.js';


getDataPictures(renderPhotos, showDataErrorMessage);
