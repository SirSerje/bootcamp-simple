import request from 'utils/request';

fetch(request)
    .then((response) => response.json())
    .then((data) => {
        for (const dataKey in data.location) {
            const li = createNode('ul'),
                ul = createNode('li'),
                body = document.querySelector("body");
            li.innerHTML = `${dataKey}: ${data.location[dataKey]}`;
            append(ul, li);
            append(body, ul);
        }

        for (const key in data.current) {
            const li = createNode('ul'),
                ul = createNode('li'),
                body = document.querySelector("body");
            li.innerHTML = `${key}: ${data.current[key]}`;
            append(ul, li);
            append(body, ul);
        }
    })
    .catch(error => console.error('Error:', error));

function createNode(el) {
    return document.createElement(el);
}

function append(parent, el) {
    return parent.appendChild(el);
}