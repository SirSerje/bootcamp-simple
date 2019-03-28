import 'styles/index.scss';
import request from 'utils/request';

document.querySelector("#head").innerHTML = 'Weather';

const body = document.querySelector("body");
const btn = document.createElement("button");
const txt = document.createTextNode('click');
btn.appendChild(txt);
body.appendChild(btn);

btn.addEventListener('click', showData);

function showData() {
    const main = document.querySelector("#main");
    const clone = main.cloneNode(true);
    document.body.appendChild(clone);
    request()
}