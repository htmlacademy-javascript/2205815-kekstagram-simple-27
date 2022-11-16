import {createDataErrorModal} from './form.js'

export const getDataPictures = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/dat')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`${response.status} ${response.statusText}`);
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch ((error) => createDataErrorModal());
  };
  
export const postDataPictures = (body, onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok){
        onSuccess();
        return;
      };
        return Promise.reject(`${response.status} ${response.statusText}`);
      })
    .catch((error) => {
      onError(error);
  });
};
