import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Client from './Client'
import CurrentCityDisplay from './components/CurrentCityDisplay/CurrentCityDisplay'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MeetupPanel from './components/MeetupPanel/MeetupPanel'
import NewsPanel from './components/NewsPanel/NewsPanel'
import TwitterPanel from './components/TwitterPanel/TwitterPanel'
import WeatherPanel from './components/WeatherPanel/WeatherPanel'

import s from './App.css'


class App extends React.Component {

  state = {
    city: '',
    data: {
      twitter: [],
      weather: {
        name: '',
        weather: [
          {
            description: '',
            main: '',
          },
        ],
        main: {
          temp: '',
          humidity: '',
          'temp_min': '',
          'temp_max': '',
        },
        dt: '',
        wind: {
          deg: '',
          speed: '',
        },
        sys: {
          sunrise: '',
          sunset: '',
        },
      },
    },
  }

  handleSearchFormSubmit = (city) => {
    this.setState({
      city: city,
    })

    Client.search(city, (cityData) => {
      this.setState({
        data: {
          twitter: cityData[0],
          weather: cityData[1],
        }
      })
    })
  }

  render() {
    return (
      <div className={s.App}>
        <Header onSearchFormSubmit={this.handleSearchFormSubmit} />
        <Grid className={s.App_grid}>
          <Row>
            <Col xs={12}>
              <WeatherPanel weather={this.state.data.weather} />
            </Col>
          </Row>
          <Row>
            <Col xs={4} xsOffset={8}>
              <CurrentCityDisplay city={this.state.city} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <TwitterPanel tweets={this.state.data.twitter} />
            </Col>
            <Col xs={6} md={4}>
              <MeetupPanel />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
