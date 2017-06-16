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

  tweets = [
    {
      date: 'Fri Jun 16 16:20:53 +0000 2017',
      text: 'Everybody rent in new York finna be $8700 a month.',
      hashtags: [],
      image_url: ''
    },
    {
      date: 'Fri Jun 16 16:20:53 +0000 2017',
      text: 'RT @fatalitiess: A Dominican from New York is calling Black Americans leeches? Y\'all whole existence is a leech off of Black Americans in y…',
      hashtags: [],
      image_url: ''
    },
    {
      date: 'Fri Jun 16 16:20:52 +0000 2017',
      text: '#nowplaying Cris Cab - Englishman In New York on Hit Party #hitparty https://t.co/AJq4ZAzxmU',
      hashtags: ['nowplaying', 'hitparty'],
      image_url: ''
    },
    {
      date: 'Fri Jun 16 16:20:52 +0000 2017',
      text: 'Teenager Who Urged Friend to Kill Himself Is Guilty of Manslaughter - New York Times: New… https://t.co/X1wbUR9fz3',
      hashtags: [],
      image_url: ''
    },
    { date: 'Fri Jun 16 16:20:49 +0000 2017',
      text: 'RT @Eugene_Scott: Lynne Patton will now be in charge of distributing billions as head of the NY branch of the US Department of Housing http…',
      hashtags: [],
      image_url: '' },
    { date: 'Fri Jun 16 16:20:49 +0000 2017',
      text: 'RT @acidshowers: this is the most New York video I\'ve ever seen https://t.co/wmrxvQT7HH',
      hashtags: [],
      image_url: 'http://pbs.twimg.com/ext_tw_video_thumb/839951869271089152/pu/img/OIVqYAKc-DPrI5I8.jpg' },
    { date: 'Fri Jun 16 16:20:48 +0000 2017',
      text: 'Friend telling me about his misspent youth/dating in New York: "I did a lot of South America then. I wish I\'d got to travel too". Oh! #tart',
      hashtags: [ 'tart' ],
      image_url: '' },
    { date: 'Fri Jun 16 16:20:48 +0000 2017',
      text: 'THE NEW YORK TIMES - Helmut Kohl, Chancellor Who Reunited a Divided Germany, Dies at 87 https://t.co/v4CUceRPEe #PaginaNuova #Press',
      hashtags: [ 'PaginaNuova', 'Press' ],
      image_url: '' },
    { date: 'Fri Jun 16 16:20:47 +0000 2017',
      text: '#Luxury Christie\'s: 48 Haights Cross Road\nChappaqua, New York &amp;#124; $17,900,000 https://t.co/aBoNNLTN2u',
      hashtags: [ 'Luxury' ],
      image_url: '' },
    { date: 'Fri Jun 16 16:20:46 +0000 2017',
      text: 'RT @camerondallas: Can\'t wait to meet some people tomorrow in New York 😊',
      hashtags: [],
      image_url: '' },
    { date: 'Fri Jun 16 16:20:45 +0000 2017',
      text: 'RT @WorIdTravels: New York City 😍✈️ https://t.co/NWQkuLiF0A',
      hashtags: [],
      image_url: 'http://pbs.twimg.com/media/DBWwq_VU0AA3lxe.jpg' },
  ]

  handleSearchFormSubmit = (city) => {
    this.setState({
      city: city,
    })

    Client.search(city, (tweets) => {
      this.setState({
        data: {
          twitter: this.tweets,
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
