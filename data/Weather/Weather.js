import fetch from 'node-fetch'
import { checkStatus, parseJSON } from '../helpers/apiHelpers'

const apiKey = process.env.WEATHER_KEY

const fetchWeather = async (cityID) => {

	let res
	try {
		res = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&APPID=${apiKey}`)
			.then(checkStatus)
			.then(parseJSON)
	} catch (err) {
		console.error(`Something went wrong fetching weather: ${err}`)
	}
	return processWeather(res)
}

const processWeather = (weather) => {

	let filteredWeather = {}

	const weatherInner = weather.weather[0]

	filteredWeather.condition = weatherInner.main
	filteredWeather.description = weatherInner.description

	filteredWeather.city = weather.name
	filteredWeather.temp = weather.main.temp
	filteredWeather.humidity = weather.main.humidity
	filteredWeather['temp_min'] = weather.main['temp_min']
	filteredWeather['temp_max'] = weather.main['temp_max']
	filteredWeather['wind_speed'] = weather.wind.speed
	filteredWeather['wind_dir'] = weather.wind.deg
	filteredWeather.sunrise = weather.sys.sunrise
	filteredWeather.sunset = weather.sys.sunset
	filteredWeather.dt = weather.dt

	return filteredWeather
}

const Weather = { fetchWeather }
export default Weather