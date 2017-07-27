import React from 'react'
import { Accordion, Panel, Grid, Col, Row } from 'react-bootstrap'
import moment from 'moment'
import s from './WeatherPanel.css'

import brokenClouds from './brokenClouds.png'
import clearSky from './clearSky.png'
import fewClouds from './fewClouds.png'
import mist from './mist.png'
import rain from './rain.png'
import scatteredClouds from './scatteredClouds.png'
import showerRain from './showerRain.png'
import snow from './snow.png'
import thunderstorm from './thunderstorm.png'

class WeatherPanel extends React.Component {

  processDate = (time) => {
    const newTime = moment.unix(time)
    return newTime.format('hh:mm a')
  }

  processWindDirection = (degrees) => {
    if (degrees < 95) {
      return 'NE'
    } else if (degrees === 95) {
      return 'E'
    } else if (degrees < 180 && degrees > 95) {
      return 'SE'
    } else if (degrees === 180) {
      return 'S'
    } else if (degrees > 180 && degrees < 275) {
      return 'SW'
    } else if (degrees === 275) {
      return 'W'
    } else if (degrees > 275 && degrees < 360) {
      return 'NW'
    } else if (degrees === 360 || degrees === 0) {
      return 'N'
    } else {
      return ''
    }
  }

  processWeatherIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return clearSky
      case 'few clouds':
        return fewClouds
      case 'scattered clouds':
        return scatteredClouds
      case 'broken clouds':
        return brokenClouds
      case 'shower rain':
        return showerRain
      case 'rain':
        return rain
      case 'thunderstorm':
        return thunderstorm
      case 'snow':
        return snow
      case 'mist':
        return mist
      case 'overcast clouds':
        return scatteredClouds
      default:
        return ''
    }
  }

  renderWeather = (weather) => {

    if (Object.keys(weather).length > 0 && weather.constructor === Object) {
      return (
        <div className="inner-content">
          <Grid>
            <Row>
              <Col sm={4} md={6}>
                <h2>{weather.city}</h2>
                <h4>{this.processDate(weather.dt)}</h4>
                <img id='weather-icon' src={this.processWeatherIcon(weather.description)}></img>
              </Col>
              <Col sm={4} md={6}>
                <h3>{weather.condition}</h3>
                <h2>{weather.temp} &deg;F</h2>
                <p>Max: {weather['temp_max']} &deg;F | Min: {weather['temp_min']} &deg;F</p>
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind: {weather['wind_speed']} mph {this.processWindDirection(weather['wind_dir'])}</p>
                <p>Sunrise: {this.processDate(weather.sunrise)} | Sunset: {this.processDate(weather.sunset)}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
  }

  render() {

    const {
      weather,
    } = this.props

    return (
      <Accordion>
        <Panel header='Weather Panel'>
          <div className="content">
            {this.renderWeather(weather)}
          </div>
        </Panel>
      </Accordion>
    )
  }
}

export default WeatherPanel
