import 'styles/index.scss';
import request from 'utils/request';
import parser from './utils/parser';
import {renderWidget} from './creator/widgetCreator';
import key from './private/apikey.js';

const link = `http://api.apixu.com/v1/current.json?key=${key}&q=Kiev`;

window.addEventListener('load', loadWidget);

async function makeAllBetter() {
	return parser(await request(link));
}

async function appRender(whatToRender, whereToRender) {
	document.querySelector(whereToRender).append(whatToRender);
	return whereToRender;
}

function loadWidget() {
	makeAllBetter().then(i => {
		console.log('I spin your data on my dick ==>', i);
		return appRender(renderWidget(i), '.app');
	});
}

let reloaded = setInterval(() => {
	loadWidget();
}, 1800000);

setTimeout(() => {
	clearInterval(reloaded);
}, 43200000);