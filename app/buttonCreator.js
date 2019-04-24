const createButton = whereToAdd => {
    const btn = document.createElement("button");
    const txt = document.createTextNode('click');
    btn.appendChild(txt);
    whereToAdd.appendChild(btn);
    return btn
};

export default createButton;