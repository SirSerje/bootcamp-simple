const create = (what, classAndId, text) => {
  let element = document.createElement(what);
  element.className = classAndId.class;
  element.id = classAndId.id;
  element.innerHTML = text;
  return element;
};

const wrap = (whatToWrap, whereToWrap) => {
  whereToWrap.append(whatToWrap);
  return whereToWrap;
};

const renderWidget = (i) => {
  const widget = create('div', {class: 'widget grid', id: ''}, '');
  const city = create('div', {class: 'item', id: ''}, i.name);
  const empty1 = create('div', {class: 'item', id: ''}, i.region);
  const setting = create('button', {class: 'item', id: ''}, '');
  const icon = create('div', {class: 'item', id: ''}, '');
  const temp = create('div', {class: 'item', id: ''}, i.temperature.real);
  const time = create('div', {class: 'item', id: ''}, '');
  const fill = create('div', {class: 'item', id: ''}, `Real: ${i.temperature.feels_like}`);
  const cloud = create('div', {class: 'item', id: ''}, i.humidity);
  const date = create('div', {class: 'item', id: ''}, i.time);

  let a = wrap(city, widget);
  a = wrap(empty1, widget);
  a = wrap(setting, widget);
  a = wrap(icon, widget);
  a = wrap(temp, widget);
  a = wrap(time, widget);
  a = wrap(fill, widget);
  a = wrap(cloud, widget);
  a = wrap(date, widget);
  return a;
};

const backRender = () => {
  const body = document.querySelector('body');
  const form = create('from', {class: 'form', id: ''}, '');
  const input = create('input', {class: 'input', id: ''}, '');
  const submit = create('button', {class: 'submit', id: ''}, 'Set city');
  let a = wrap(form, body);
  a = wrap(input, form);
  a = wrap(submit, form);
  return a;
};

export {renderWidget, backRender};


