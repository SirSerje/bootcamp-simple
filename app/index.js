import request from 'utils/request';

fetch(request)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data));
    })
    .catch(error => console.error('Error:', error));