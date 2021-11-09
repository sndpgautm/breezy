import axios from 'axios';

const fetchWeatherInfoForCity = async (cityName: string) => {
  try {
    const res = await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0f020f1cd4b08e5e5a577cf86f0b1a34`
    );
    return res.data;
  } catch (err) {
    console.log('Error fetching weather info', err);
  }
};

export const WeatherService = {
  fetchWeatherInfoForCity,
};
