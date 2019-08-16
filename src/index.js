/* eslint-disable arrow-body-style */
import parser from './utils/parser';
import key from './private/apikey';
import Observe from './creator/Observe';
import DivCreator from './creator/Creator';
import request from './utils/request';
// eslint-disable-next-line import/no-unassigned-import
import './styles/index.scss';

const linkByCity = (city) => `http://api.apixu.com/v1/current.json?key=${key}&q=${city}`;

const create = (node) => {
  return (observer) => {
    observer.add(
      new DivCreator().addClass('card--content').addHandler((data) => {
        return `country: ${data.name}
      time: ${data.time}
      temperature feels like: ${data.temperature.feels_like}C`;
      }).mountToDOM(node),
    );
  };
};

const intervalFunction = (URLAddress) => {
  return (observer) => {
    return request(URLAddress).then((i) => {
      observer.setData(parser(i));
    });
  };
};
const withObserver = (array) => {
  return (observer) => {
    array.forEach((i) => {
      return i(observer);
    });
  };
};

withObserver([
  create(document.querySelector('#test')),
  intervalFunction(linkByCity('Texas'))])(new Observe());
withObserver([
  create(document.querySelector('#test1')),
  intervalFunction(linkByCity('Moscow'))])(new Observe());
withObserver([
  create(document.querySelector('#test2')),
  intervalFunction(linkByCity('Kiev'))])(new Observe());

// let interval = setInterval(intervalFunction, 10000, link);
