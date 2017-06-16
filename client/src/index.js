import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

const rootEL = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootEL
)

if(module.hot){
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp/>,
      rootEL
    )
  })
}