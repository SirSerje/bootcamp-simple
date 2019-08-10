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

const renderWidget = (weatherObject) => {
  const widget =  create('div', {class: 'widgetForm ', id: ''}, '');
  const grid = create('div', {class: 'widget grid ', id: ''}, '');
  const city = create('div', {class: 'item', id: ''}, weatherObject.name);
  const empty1 = create('div', {class: 'item', id: ''}, weatherObject.region);
  const setting = create('button', {class: 'item', id: ''}, '');
  const icon = create('div', {class: 'item', id: ''}, '');
  const temp = create('div', {class: 'item', id: ''}, weatherObject.temperature.real);
  const time = create('div', {class: 'item', id: ''}, '');
  const fill = create('div', {class: 'item', id: ''}, `Real: ${weatherObject.temperature.feels_like}`);
  const cloud = create('div', {class: 'item', id: ''}, weatherObject.humidity);
  const date = create('div', {class: 'item', id: ''}, weatherObject.time);

  let a = wrap(city, grid);
  a = wrap(empty1, grid);
  a = wrap(setting, grid);
  a = wrap(icon, grid);
  a = wrap(temp, grid);
  a = wrap(time, grid);
  a = wrap(fill, grid);
  a = wrap(cloud, grid);
  a = wrap(date, grid);
  a = wrap(grid, widget);
  return a;
};

// const backRender = () => {
//   const body = document.querySelector('body');
//   const form = create('from', {class: 'form', id: ''}, '');
//   const input = create('input', {class: 'input', id: ''}, '');
//   const submit = create('button', {class: 'submit', id: ''}, 'Set city');
//   let a = wrap(form, body);
//   a = wrap(input, form);
//   a = wrap(submit, form);
//   return a;
// };

export {renderWidget};


