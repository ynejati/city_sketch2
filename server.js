/**
 * Created by you on 3/13/17.
 */
const express = require('express')
const fs = require('fs')
import Twitter from './data/Twitter/Twitter'
import Weather from './data/Weather/Weather'

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
    Promise.all([Twitter.search(param), Weather.getWeather(param)])
      .then(([tweets, weather]) => {
         res.send([tweets, weather])
      })
      .catch(err => console.log(err))
  }
})

export default app