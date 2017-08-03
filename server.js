const express = require('express')
const fs = require('fs')
import Twitter from './data/Twitter/Twitter'
import Weather from './data/Weather/Weather'
import Meetup from './data/Meetup/Meetup'
import { getGeoCoordinates, getCityID } from './data/helpers/dataHelpers'

const app = express()

app.set('port', (3001))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public/build'))
}

app.get('/api/city', (req, res) => {
  const param = req.query.q
  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    })
  } else {

    // const {
    //   coord,
    //   name,
    //   id,
    // } = cityList.find((city, param) => city.name === param)

    // const {
    //   lat,
    //   lon,
    // } = coord

    const {
      lat,
      lon,
    } = getGeoCoordinates(param)

    const {
      id,
    } = getCityID(param)

    Promise.all([Twitter.fetchTweets(lat, lon), Weather.fetchWeather(id), Meetup.fetchEvents(lat, lon)])
      .then(([tweets, weather, events]) => {
        res.send([tweets, weather, events])
      })
      .catch(err => console.log(err))
  }
})

export default app