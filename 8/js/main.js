import {renderPhotos} from './users-pictures.js';
import './form.js';
import './picture-effects.js';
import './picture-scale.js';
import {getDataPictures} from './api.js';
import {showDataErrorMessage} from './dialogs.js';

const dataErrorMessageOpenHandler = () => {
  showDataErrorMessage();
};

const usersPhotosRenderHandler = (photos) => {
  renderPhotos(photos);
};

const onSuccess = (photos) => {
  usersPhotosRenderHandler(photos);
};

const onError = () => {
  dataErrorMessageOpenHandler();
};

getDataPictures(onSuccess, onError);
