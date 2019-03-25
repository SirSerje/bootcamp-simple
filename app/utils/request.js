import key from '../private/apikey.js';

const request = new Request(`http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`);
export default request