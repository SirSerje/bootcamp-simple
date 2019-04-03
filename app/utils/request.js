import key from '../private/apikey.js';

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const request = async () => {
    try {
        const response = await fetch(link);
        const data = await response.json();
        console.log(data);
        return await JSON.stringify(data);
    }catch (e) {
        throw new Error("Whoops!");
    }
    
};

export default request;