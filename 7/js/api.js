const GET_DATA_PICTURES = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SAVE_PICTURES_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getDataPictures = (onSuccess, onError) => {
  fetch(GET_DATA_PICTURES)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
};

export const postDataPictures = (body, onSuccess, onError) => {
  fetch(SAVE_PICTURES_DATA,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess(response);
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((error) => {
      onError(error);
    });
};
