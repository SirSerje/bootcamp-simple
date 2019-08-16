import apiMockResponse from '../mock/apiResponseMock';
import parser from '../utils/parser';

const request = () => {
  return new Promise((resolve) => {
    return resolve(apiMockResponse);
  });
};

const objectToCompare = {
  name: 'Kiev',
  region: 'Ukraine',
  time: '2019-04-08 14:14',
  temperature: {
    real: 20,
    feels_like: 20,
  },
  wind: {
    speed: 15.1,
    direction: 'S',
  },
  pressure: 1010,
  visibility: 10,
  precipitation: 0,
  humidity: 26,
};

describe('Response parser test', () => {
  it('responseParser returns correct data', async () => {
    const data = await request();
    expect(parser(data)).toMatchObject(objectToCompare);
  });
});
