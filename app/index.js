import 'styles/index.scss';
import request from 'utils/request';

document.querySelector("#head").innerHTML = 'Weather';

window.addEventListener('load', createClickButton);
const body = document.querySelector("body");
const main = document.querySelector("#main");

function createClickButton() {
    const btn = document.createElement("button");
    const txt = document.createTextNode('click');
    btn.appendChild(txt);
    body.appendChild(btn);
    btn.addEventListener('click', showData);
}

function showData() {
    const clone = main.cloneNode(true);
    document.body.appendChild(clone);
    request()
}