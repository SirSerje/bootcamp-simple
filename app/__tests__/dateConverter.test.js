import {twelveToTwenty, twentyToTwelve} from '../utils/dateConverter';


describe('Date converter', () => {
  test('24 to 12', () => {
    expect(twentyToTwelve('16:54')).toBe('4:54 PM');
    expect(twentyToTwelve('09:31')).toBe('9:31 AM');
    expect(twentyToTwelve('9:35')).toBe('9:35 AM');
    expect(twentyToTwelve('00:00')).toBe('12:00 AM');
    expect(twentyToTwelve('24:00')).toBe('12:00 AM');
    expect(twentyToTwelve('25:00')).toBe(null);
    expect(twentyToTwelve('-01:00')).toBe(null);
  });
  test('12 to 24', () => {
    expect(twelveToTwenty('04:00 PM')).toBe('16:00');
    expect(twelveToTwenty('04:00PM')).toBe('16:00');
    expect(twelveToTwenty('09:00 AM')).toBe('09:00');
    expect(twelveToTwenty('09:00AM')).toBe('09:00');
    expect(twelveToTwenty('12:00 AM')).toBe('00:00');
    expect(twelveToTwenty('25:00')).toBe(null);
  });
});
