import 'styles/index.scss';
import request from 'utils/request';
import key from './private/apikey.js';
import parser from './parser';
import {renderWidget} from './widgetCreator';
import createButton from './buttonCreator';

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

const body = document.querySelector("body");
const requestButton = createButton(body);

requestButton.addEventListener('click', mouseClickHandler);

async function makeAllBetter() {
    return parser(await request(link));
}

async function appRender(whatToRender, whereToRender) {
    document.querySelector(whereToRender).append(whatToRender);
    return whereToRender;
}
function mouseClickHandler(){
    makeAllBetter().then(i => {
        console.log("I spin your data on my dick ==>", i );
        return appRender(renderWidget(i), '.app');
    })
}
