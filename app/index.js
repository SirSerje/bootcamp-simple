import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import key from './private/apikey.js';
import Observe from "./creator/Observe";
import DivCreator from "./creator/Creator";

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;
let ROOT = document.getElementById("test");

//example of usage
let a = new DivCreator();
a.addClass('some');
a.applyText('Hello, some').mountToDOM(ROOT);

let b = new DivCreator('some2', 'some text here');
b.mountToDOM(ROOT);
//subscribe
a.addHandler((data) => `I get data ${data.name}`);
b.addHandler((data) => `And I get data ${data.another}`);

let observe = new Observe();

observe.add(a);
observe.add(b);

observe.setData({name: 'foo15', another: 'bar15'});

let intervalFunction = URLAddress => {
  request(URLAddress).then(i=> {
    observe.setData({name: parser(i).name, another: 'bar15'});
  })
};

let interval = setInterval(intervalFunction, 1000, link);
