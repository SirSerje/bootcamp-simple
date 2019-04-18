const create = (what, classAndId, text) => {
    let element = document.createElement(what);
    element.className = classAndId.class;
    element.id = classAndId.id;
    element.innerHTML = text;
    return element;
};

const widget = create('div', {class: 'widget grid', id: ''}, '');
const city = create('div', {class: 'item', id: ''}, '???');
const empty1 = create('div', {class: 'item', id: ''}, '');
const setting = create('button', {class: 'item', id: ''}, 'S');
const icon = create('div', {class: 'item', id: ''}, 'ic');
const temp = create('div', {class: 'item', id: ''}, '32');
const time = create('div', {class: 'item', id: ''}, '11:30 PM');
const fill = create('div', {class: 'item', id: ''}, 'fill: 22');
const cloud = create('div', {class: 'item', id: ''}, 'Mostly Cloud');
const date = create('div', {class: 'item', id: ''}, 'Thu, Jun 13');

const wrap = (whatToWrap, whereToWrap) => {
    whereToWrap.append(whatToWrap);
    return whereToWrap;
};

let a = wrap(city, widget);
a = wrap(empty1, widget);
a = wrap(setting, widget);
a = wrap(icon, widget);
a = wrap(temp, widget);
a = wrap(time, widget);
a = wrap(fill, widget);
a = wrap(cloud, widget);
a = wrap(date, widget);

const renderWidget = (whatToRender, whereToRender) => {
  //TODO: @MaximGordienko: FIX AN ERROR, PLEASE
  // document.querySelector(whereToRender).append(whatToRender);
  //   return whatToRender;
  return null
};
//FIXME: @MaximGordienko: you shouldn't use function inside it module declaration
renderWidget(a, '.app');

export {renderWidget};