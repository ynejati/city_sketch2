import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Grid, Col, Row } from 'react-bootstrap'
import s from './App.css'
import CurrentCityDisplay from './components/CurrentCityDisplay/CurrentCityDisplay'
import InstagramPanel from './components/InstagramPanel/InstagramPanel'
import NewsPanel from './components/NewsPanel/NewsPanel'
import SnapPanel from './components/SnapPanel/SnapPanel'
import TwitterPanel from './components/TwitterPanel/TwitterPanel'
import WeatherPanel from './components/WeatherPanel/WeatherPanel'
import Client from './Client'

class App extends React.Component {

  state = {
    city: '',
    data: {
      twitter: [],
      weather: [],
    }
  }

  handleSearchFormSubmit = (city) => {
    this.setState({
      city: city,
    })

    Client.search(city, (tweets) => {
      this.setState({
        data: {
          twitter: tweets,
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
            <Col xs={4} xsOffset={8}>
              <CurrentCityDisplay city={this.state.city} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <InstagramPanel />
            </Col>
            <Col xs={6} md={4}>
              <TwitterPanel tweets={this.state.data.twitter} />
            </Col>
            <Col xs={6} md={4}>
              <SnapPanel />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <NewsPanel />
            </Col>
            <Col xs={6} md={6}>
              <WeatherPanel />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
