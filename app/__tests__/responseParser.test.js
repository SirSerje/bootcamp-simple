import apiMockResponse from '../mock/apiResponseMock';
import parser from '../responseParser';

let request = () => new Promise((resolve)=>resolve(apiMockResponse));

const objectToCompare = {
    name: 'Kiev',
    region: 'Ukraine',
    time: '2019-04-08 14:14',
    temperature: {
        real: 20,
        feels_like: 20,
    },
    wind: {
        'speed': 15.1,
        'direction': 'S',
    },
    pressure: 1010,
    visibility: 10,
    precipitation: 0,
    humidity: 26,
};

describe('Response parser test', () => {
    it('responseParser returns correct data',  async () => {
        let data = await request();
        expect(parser(data)).toBe(objectToCompare);
    });
});