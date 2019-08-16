const createButton = (whereToAdd) => {
  const button = document.createElement('button');
  const txt = document.createTextNode('click');
  button.append(txt);
  whereToAdd.append(button);

  return button;
};

export default createButton;
