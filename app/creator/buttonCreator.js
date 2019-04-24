const createButton = whereToAdd => {
    const btn = document.createElement('button');
    const txt = document.createTextNode('click');
    btn.append(txt);
    whereToAdd.append(btn);
    return btn;
};

export default createButton;