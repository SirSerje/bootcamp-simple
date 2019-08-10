import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import {renderWidget} from './creator/widgetCreator';
import key from './private/apikey.js';


let city = 'Kiev';
let link = `http://api.apixu.com/v1/current.json?key=${key}&q=${city}`;

window.addEventListener('load', loadWidget);

const button = document.querySelector('.btn');
button.addEventListener('click', getDataFromURL);

function getDataFromURL(){
  const cityValue = document.querySelector('#city').value;
  console.log('cityValue', cityValue);
  city = cityValue;
  link = `http://api.apixu.com/v1/current.json?key=${key}&q=${city}`;
  //обновить body после юзать loadWidget();
  // document.body = document.createElement('body');
  loadWidget();
}

async function makeAllBetter() {
  return parser(await request(link));
}

async function appRender(whatToRender, whereToRender) {
  document.querySelector(whereToRender).append(whatToRender);
  return whereToRender;
}

function loadWidget() {
  makeAllBetter().then(weatherObject => {
    // console.log('I spin your data on my dick ==>', i);
    let widget = document.querySelector('.widgetForm');
    if (widget !== null) {
    widget.remove();
      console.log("widget has been removed");
    }
    document.querySelector('.app').append(renderWidget(weatherObject));
  });
}

let reloaded = setInterval(() => {
  loadWidget();
}, 1800000);

setTimeout(() => {
  clearInterval(reloaded);
}, 43200000);