export const getDataPictures = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`${response.status} ${response.statusText}`);
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch ((error) => {
      onError(error);
    });
};

export const postDataPictures = (body, onSuccess, onError, reset) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess(response);
        reset(response);
        return;
      }
      return Promise.reject(`${response.status} ${response.statusText}`);
    })
    .catch((error) => {
      onError(error);
    });
};
