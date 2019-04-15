const renderItem = (someClass, someText) => {
    const item = document.createElement('div');
    item.className = someClass;
    item.innerHTML = someText;
    return item;
};

const renderDiv = (name) => {
    const widget = document.createElement('div');
    widget.className = name;
    widget.append(renderItem('item', 'Kiev'));
    document.querySelector('body').append(widget);
};


export default renderDiv('widget grid');


function create(tagName, props) {
    return Object.assign(document.createElement(tagName), (props || {}));
}

function appender(parent, child) {
    if (child) {
        parent.append(child);
    }
    return parent;
}

const app = document.querySelector('.app');
const div = create('div', {className: 'widget grid'});
const item = create('div', {className: 'item'});

// export default appender(app, appender(div, item));