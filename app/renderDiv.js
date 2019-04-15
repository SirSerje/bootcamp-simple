const create = (what, classAndId, text) => {
    let element = document.createElement(what);
    element.className = classAndId.class;
    element.id = classAndId.id;
    element.innerText = text;
    return element;
};

const z1 = create('div', {class: 'hello', id: '20'}, 'some');
const z2 = create('div', {class: 'hello', id: '5'}, 'something');
const z3 = create('div', {class: 'hello', id: '0'}, '');

const wrap = (whatToWrap, whereToWrap) => {
    whereToWrap.append(whatToWrap);
    return whereToWrap;
};

let a = wrap(z1, z3);
a = wrap(z2, z3);

const renderApp = (whatToRender, whereToRender) => {
    document.querySelector(whereToRender).append(whatToRender);
    return whatToRender;
};
renderApp(a, '.app');

export {renderApp};