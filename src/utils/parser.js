const parser = (param) => {
  const {
    location: {
      name, country, localtime,
    },
    current: {
      temporaryC, feelslike_c, wind_kph, windDirectory, pressure_mb, vis_km, precip_mm, humidity,
    },
  } = param;

  return {
    name,
    region: country,
    time: localtime,
    temperature: {
      real: temporaryC,
      feels_like: feelslike_c,
    },
    wind: {
      speed: wind_kph,
      direction: windDirectory,
    },
    pressure: pressure_mb,
    visibility: vis_km,
    precipitation: precip_mm,
    humidity,
  };
};

export default parser;
