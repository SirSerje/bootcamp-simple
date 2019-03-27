import key from '../private/apikey.js'

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const request = () => fetch(link).then((response) => {
  return response.json()
}).then((data) => {
  console.log(JSON.stringify(data));
    document.querySelector("#main").innerHTML = JSON.stringify(data);
}).catch(error => console.error('Error:', error));

export default request