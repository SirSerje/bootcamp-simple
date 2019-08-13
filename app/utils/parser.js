const parser = param => {
  const {
    location: {
      name, country, localtime
    },
    current: {
      temp_c, feelslike_c, wind_kph, wind_dir, pressure_mb, vis_km, precip_mm, humidity,
    },
  } = param;
  return {
    name,
    region: country,
    time: localtime,
    temperature: {
      real: temp_c,
      feels_like: feelslike_c,
    },
    wind: {
      speed: wind_kph,
      direction: wind_dir,
    },
    pressure: pressure_mb,
    visibility: vis_km,
    precipitation: precip_mm,
    humidity: humidity,
  };
};

export default parser;
