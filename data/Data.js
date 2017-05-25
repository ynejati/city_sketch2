/**
 * Created by you on 3/13/17.
 */

function search (query, data) {
  return fetch('api/city?q=${query}', {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(data)
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error('HTTP Error ${response.statusText}')
  error.status = response.statusText
  error.response = response
  console.log(error)
  throw error
}

function parseJSON (response) {
  return response.json()
}

// const Data = {search}
// export default Data