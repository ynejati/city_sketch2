import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import './Event.css'

class Event extends React.Component {

  render() {

    const {
      eventLink,
      time,
      utcOffset,
      duration,
      description,
      rsvpCount,
      waitlistCount,
      groupName,
      groupWho,
      location,
      lat,
      long
    } = this.props

    return (
      <div className="meetup-event">
        <Row>
          <Col sm={2}>
            <p>{time}</p>
            <p>{utcOffset}</p>
          </Col>
          <Col sm={8}>
            <h4>{groupName}</h4>
            <p>{groupWho}</p>
            <p>{description}</p>
            <p>{rsvpCount}</p>
            <p>{waitlistCount}</p>
            <p>{location}</p>
            <p>{lat}</p>
            <p>{long}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Event