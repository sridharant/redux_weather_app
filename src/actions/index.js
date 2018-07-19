import axios from "axios";

const API_KEY = 'dd33f0e538d6fa530b69f6ba0a865f6b';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${WEATHER_URL}&q=${city},US`;
    const request = axios.get(url);
    console.log('request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}