import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './MeetupPanel.css'

class MeetupPanel extends Component {
  render () {
    return (
      <Accordion>
        <Panel header='Meetup Panel'>
          Meetup feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default MeetupPanel