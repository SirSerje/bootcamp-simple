const create = (what, classAndId, text) => {
  const element = document.createElement(what);
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
  const widget = create('div', {class: 'widget grid',
    id: ''}, '');
  const city = create('div', {class: 'item',
    id: ''}, i.name);
  const empty1 = create('div', {class: 'item',
    id: ''}, i.region);
  const setting = create('button', {class: 'item',
    id: ''}, '');
  const icon = create('div', {class: 'item',
    id: ''}, '');
  const temporary = create('div', {class: 'item',
    id: ''}, i.temperature.real);
  const time = create('div', {class: 'item',
    id: ''}, '');
  const fill = create('div', {class: 'item',
    id: ''}, `Real: ${i.temperature.feels_like}`);
  const cloud = create('div', {class: 'item',
    id: ''}, i.humidity);
  const date = create('div', {class: 'item',
    id: ''}, i.time);

  let a = wrap(city, widget);
  a = wrap(empty1, widget);
  a = wrap(setting, widget);
  a = wrap(icon, widget);
  a = wrap(temporary, widget);
  a = wrap(time, widget);
  a = wrap(fill, widget);
  a = wrap(cloud, widget);
  a = wrap(date, widget);

  return a;
};

export {renderWidget};

