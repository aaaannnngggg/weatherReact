import Axios from 'axios'; 

const API_KEY = 'c76bb5257cb57dc0254003132e4dc7f7';
const RU = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`; 

export const FETCH_WEATHER = "FETCH_WEATHER"; 

export function fetchWeather(city) {
	//console.log(RU);
	const url = `${RU}&q=${city},us`; 
	console.log(url); 
	const request = Axios.get(url); 
	console.log("request", request); 
	
	return {
		type: FETCH_WEATHER, 
		payload : request
	}; 
}