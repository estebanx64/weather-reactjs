import axios from 'axios';

const API_KEY = '6afd1c8ac4082b380398af2b9be85906';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},co`;
  const request = axios.get(url);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}