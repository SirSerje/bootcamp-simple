import key from '../private/apikey.js'

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const request = () => fetch(link).then((response) => {
    return response.json()
}).then((data) => {
    return document.querySelector("#main").innerHTML = JSON.stringify(data);
}).catch(error => {
    return document.querySelector("#main").innerHTML = JSON.stringify(error);
});

export default request