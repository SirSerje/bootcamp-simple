
function Observe() {
  this.subscribers = [];
  this.add = (item) => this.subscribers.push(item);
  this.remove = (item) => this.subscribers.filter(i => i !== item);
  this.update = () => this.subscribers.forEach(i => {
    if (i.updater) i.updater(this.data);
  });

  this.data = {};
  this.setData = data => {
    //FIXME : некорректная проверка
    if (this.data !== data) {
      this.data = data;
      this.update(this.data);
    }
  }
}

export default Observe;
