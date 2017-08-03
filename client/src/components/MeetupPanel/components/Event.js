import React from 'react'
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'
import './Event.css'

class Event extends React.Component {

  processEventDate = (time, utcOffset) => {
    const day = moment(time).utcOffset(utcOffset)
    return day.format('MMMM DD')
  }

  render() {

    const {
      dateTime,
      description,
      rsvpCount,
      groupName,
      groupWho,
      location,
      utcOffset,
    } = this.props

    return (
      <div className="meetup-event">
        <Row>
          <Col xs={4} sm={4}>
            <div className='event-time-container'>
              <text id='event-time'>{this.processEventDate(dateTime, utcOffset)}</text>
            </div>
          </Col>
          <Col xs={8} sm={8}>
            <h5 id='event-groupname'>{groupName}</h5>
            <h4 id='event-description'>{description}</h4>
            <p>{location}</p>
            <p>{rsvpCount} {groupWho} going</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Event