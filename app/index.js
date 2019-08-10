import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import {renderWidget} from './creator/widgetCreator';
import key from './private/apikey.js';

let link = `http://api.apixu.com/v1/current.json?key=${key}&q=London`;

window.addEventListener('load', loadWidget);

const button = document.querySelector('.btn');
button.addEventListener('click', getDataFromURL);

function getDataFromURL(){
  const city = document.querySelector('#city').value;
  link = `http://api.apixu.com/v1/current.json?key=${key}&q=${city}`;
  loadWidget();
}

async function requestWeatherData(url) {
  let weather_data = null;
  try {
    weather_data = parser(await request(url));
  } catch (e) {
    console.log(e);
  }
  return weather_data;
}

async function appRender(whatToRender, whereToRender) {
  document.querySelector(whereToRender).append(whatToRender);
  return whereToRender;
}

function loadWidget() {
  requestWeatherData(link).then(weatherObject => {
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