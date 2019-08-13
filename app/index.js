import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import key from './private/apikey.js';
import Observe from "./creator/Observe";
import DivCreator from "./creator/Creator";

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;
let ROOT = document.getElementById("test");
let observe = new Observe();

observe.add(new DivCreator().addClass('country')
.addHandler((data) => `country: ${data.region}`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('time $')
.addHandler((data) => `time: ${data.time}`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('temp_r')
.addHandler((data) => `real temperature: ${data.temperature.real}C`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('temp_f')
.addHandler((data) => `temperature feels like: ${data.temperature.feels_like}C`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('wind_speed')
.addHandler((data) => `wind speed: ${data.wind.speed}km/h`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('wind_dir')
.addHandler((data) => `wind direction: ${data.wind.direction}`).mountToDOM(ROOT));

observe.add(new DivCreator().addClass('visibility')
.addHandler((data) => `visibility: ${data.visibility}km`).mountToDOM(ROOT));


let intervalFunction = URLAddress => {
  request(URLAddress).then(i=> {
    observe.setData(parser(i));
  })
};
let interval = setInterval(intervalFunction, 10000, link);

//run once at start
intervalFunction(link);
