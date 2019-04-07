import 'styles/index.scss';
import request from 'utils/request';
import parser from './responseParser';

document.querySelector("#head").innerHTML = 'Weather';
const body = document.querySelector("body");

function createButton() {
    const btn = document.createElement("button");
    const txt = document.createTextNode('click');
    btn.appendChild(txt);
    body.appendChild(btn);
    btn.addEventListener('click', showData);
}
createButton();

const main = document.querySelector("#main");
document.body.appendChild(main);

async function showData() {
    const main = document.querySelector("#main");
    document.body.appendChild(main);
    main.innerHTML = parser(request());
}

