/**
 * @param className - if there is no need to re-assign className, just pass it at creation
 * @param text - if there is no need to re-assign value, just pass it to constructor
 * @returns {DivCreator} - chain-able function
 */
function DivCreator(className, text) {
  const self = this;
  self.innerText = '';
  self.create = () => {
    const div = document.createElement("div");
    if (className) div.className = className;
    if (text) div.innerText = text;
    self.element = div;
  };
  self.create();

  self.addClass = name => {
    //TODO: class can handle more than one className
    self.element.className = name;
    return self;
  };

  self.applyText = text => {
    self.innerText = text;
    self.element.innerText = text;
    return self;
  };

  self.addHandler = (param) => {
    if (param) {
      self.updater = function(i) {
        self.applyText(param(i));
      }
    }
    return self
  };

  // TODO : add root as separate function
  self.mountToDOM = (root) => {
    console.log(root);
    root.appendChild(self.element);
    return self;
  };
  return self;
}

// TODO : add uniqueID for any created element
// TODO: add possibility to add span
export default DivCreator;
