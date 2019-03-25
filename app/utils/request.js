import key from '/private/apikey';

const request = new Request(`http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`);
export default request