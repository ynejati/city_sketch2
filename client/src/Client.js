/* eslint-disable no-undef */
function search(query, res) {
  console.log('Search in Client.js HIT')
  return fetch(`/api/city?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(res)
}

function checkStatus(response) {
  console.log(response.status)
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {search}
export default Client