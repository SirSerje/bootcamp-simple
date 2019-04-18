import 'styles/index.scss';
import request from 'utils/request';
import parser from './parser';
import {renderApp} from './render';

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
    // main.innerHTML = JSON.stringify(parser(await request()));
    const obj = parser(await request());
    // console.log(obj.time);
    main.innerText = obj.time;

}

renderApp();
