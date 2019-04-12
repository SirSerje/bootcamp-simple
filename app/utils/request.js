import key from '../private/apikey.js';

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const request = async () => {
    try {
        const response = await fetch(link);
        const responseData =  await response.json();
        return  responseData;
    }catch (e) {
        throw new Error(e);
    }
};

export default request;
