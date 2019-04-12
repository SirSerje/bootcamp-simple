const apiMockResponse = {
  current: {
    cloud: 0,
    condition: {
      text: 'Sunny',
      icon: '//cdn.apixu.com/weather/64x64/day/113.png',
      code: 1000,
    },
    feelslike_c: 20,
    feelslike_f: 68,
    gust_kph: 16.9,
    gust_mph: 10.5,
    humidity: 26,
    is_day: 1,
    last_updated: '2019-04-08 14:00',
    last_updated_epoch: 1554721236,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 30.3,
    pressure_mb: 1010,
    temp_c: 20,
    temp_f: 68,
    uv: 6,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 180,
    wind_dir: 'S',
    wind_kph: 15.1,
    wind_mph: 9.4,
  },
  location: {
    country: 'Ukraine',
    lat: 50.43,
    localtime: '2019-04-08 14:14',
    localtime_epoch: 1554722060,
    lon: 30.52,
    name: 'Kiev',
    region: 'Kyyivs\'ka Oblast\'',
    tz_id: 'Europe/Kiev',
  },
};


export default apiMockResponse;