const DATA_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getDataPictures = (onSuccess, onError) => {
  fetch(DATA_SERVER)
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
  fetch(SERVER,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        return onSuccess(response);
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((error) => {
      onError(error);
    });
};
