/* eslint-disable fp/no-this */
/* eslint-disable func-style */
function Observe () {
  this.subscribers = [];
  this.add = (item) => {
    return this.subscribers.push(item);
  };
  this.remove = (item) => {
    return this.subscribers.filter((i) => {
      return i !== item;
    });
  };
  this.update = () => {
    return this.subscribers.forEach((i) => {
      if (i.updater) {
        i.updater(this.data);
      }
    });
  };

  this.data = {};
  this.setData = (data) => {
    // FIXME : correct merge should be added
    if (this.data !== data) {
      this.data = data;
      this.update(this.data);
    }
  };
}

export default Observe;
