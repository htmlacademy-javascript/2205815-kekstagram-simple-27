import {renderPhotos} from './users-pictures.js';
import './form.js';

const onSuccess = (photos) => {
  renderPhotos(photos);
};

const onError = () => {
  showDataErrorMessage();
};

getDataPictures(onSuccess, onError);
