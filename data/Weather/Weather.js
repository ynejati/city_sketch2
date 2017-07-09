// import cities from './cityList'
import fetch from 'node-fetch'
const apiKey=process.env.WEATHER_KEY

const getWeather = async (query) => {

	// TODO should use city IDs
	const cityID = '5128581'

	let res
	try {
		res = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${apiKey}`)
		return res
	} catch (err) {
		console.error(`Something went wrong fetching weather: ${err}`)
	}
}

const Weather = { getWeather }
export default Weather