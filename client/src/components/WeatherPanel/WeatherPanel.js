/**
 * Created by you on 3/4/17.
 */

import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './WeatherPanel.css'

class WeatherPanel extends React.Component {
  render () {
    return (
      <Accordion>
        <Panel header='Weather Panel'>
          {/* Populate with feed based on search query */}
          Weather feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default WeatherPanel
