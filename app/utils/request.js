import key from '../private/apikey.js';

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const request = async () => {
  try {
    const response = await fetch(link);
    return await response.json();
  }catch (e) {
    throw new Error(e);
  }
};

export default request;
