export const parseJSON = (response) => {
  return response.json();
}

export const checkStatus = (response) => {
  console.log(response.status)
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
  }
}