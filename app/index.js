import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import {renderWidget} from './creator/widgetCreator';
import key from './private/apikey.js';
import Observe from "./creator/Observe";
import DivCreator from "./creator/Creator";

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;
let ROOT = document.getElementById("test"); //Global

/*

async function makeAllBetter() {
	return parser(await request(link));
}

async function appRender(whatToRender, whereToRender) {
	document.querySelector(whereToRender).append(whatToRender);
	return whereToRender;
}

let reloaded = setInterval(() => {
	loadWidget();
}, 1800000);

setTimeout(() => {
	clearInterval(reloaded);
}, 43200000);

function loadWidget() {
	makeAllBetter().then(i => {
		console.log('I spin your data on my dick ==>', i);
		return appRender(renderWidget(i), '.app');
	});
}
*/


//DivCreator supports chaining, so you can call it as you wish
let a = new DivCreator();
a.addClass('some');
a.applyText('Hello, some').mountToDOM(ROOT);

let b = new DivCreator('some2', 'some text here');
b.mountToDOM(ROOT);

a.addHandler((data) => `I get data ${data.name}`);
b.addHandler((data) => `And I get data ${data.another}`);

let observe = new Observe();

observe.add(a);
observe.add(b);

observe.setData({name: 'foo15', another: 'bar15'});

// TODO : add uniqueID for any created element
// TODO: add possibility to add span

