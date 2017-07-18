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

  // TODO: move to Helpers and make immutable
  // Parse depending on time zone
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
      default:
        return ''
    }
  }

  render() {
    const weather = this.props.weather

    if (weather.weather[0].main !== '') {
      return (
        <Accordion>
          <Panel header='Weather Panel'>
            <div className="content">
              <Grid>
                <Row>
                  <Col sm={2}>
                    <div className="content-inner">
                      <h2>{weather.name}</h2>
                      <h4>{this.processDate(weather.dt)}</h4>
                    </div>
                  </Col>
                  <Col sm={6} md={3}>
                    <div className="content-inner">
                      <img src={this.processWeatherIcon(weather.weather[0].description)}></img>
                    </div>
                  </Col>
                  <Col sm={6} md={3}>
                    <div className="content-inner">
                      <h3>{weather.weather[0].main}</h3>
                      <h2>{weather.main.temp} &deg;F</h2>
                      <p>Max: {weather.main['temp_max']} &deg;F | Min: {weather.main['temp_min']} &deg;F</p>
                    </div>
                  </Col>
                  <Col sm={6} md={3}>
                    <div className="content-inner">
                      <div id="conditions">
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind: {weather.wind.speed} mph {this.processWindDirection(weather.wind.deg)}</p>
                        <p>Sunrise: {this.processDate(weather.sys.sunrise)} | Sunset: {this.processDate(weather.sys.sunset)}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </Panel>
        </Accordion>
      )
    } else {
      return (
        <Accordion>
          <Panel header='Weather Panel'>
            <div className="content">
            </div>
          </Panel>
        </Accordion>
      )
    }
  }
}

export default WeatherPanel
