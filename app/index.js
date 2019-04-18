import 'styles/index.scss';
import request from 'utils/request';
import key from './private/apikey';
import parser from './utils/parser'
import { renderWidget } from './creator/widgetCreator'
import createButton from './creator/buttonCreator'

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

document.querySelector("#head").innerHTML = 'Weather';
const body = document.querySelector("body");
const requestButton = createButton(body)

requestButton.addEventListener('click', mouseClickHandler);

const main = document.querySelector("#main");
document.body.appendChild(main);

async function makeAllBetter() {
  return parser(await request(link))
}

function mouseClickHandler() {
  makeAllBetter().then(i => {
    //TODO: @MaximGordienko please, pass data into function renderWidget
    renderWidget(/*pass all what you need as params to get widget rendered*/)
    console.log("I spin your data on my dick ==>", i )})
}

