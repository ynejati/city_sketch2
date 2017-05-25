/**
 * Created by you on 3/13/17.
 */
const express = require('express')
const fs = require('fs')
const twiiter = require('./data/Twitter/Twitter')

const app = express()

app.set('port', (process.env.API_PORT || 3001))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public/build'))
}

app.get ('/api/city', (req, res) => {
  const param = req.query.q

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    })
    return
  }
  res.json(twiiter(param))
})

export default app