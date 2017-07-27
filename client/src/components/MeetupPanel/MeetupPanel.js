import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap'
import Event from './components/Event'
import s from './MeetupPanel.css'

class MeetupPanel extends Component {
  render() {
    const {
      events
    } = this.props
    if (Object.keys(events).length !== 0 && events.constructor !== Object) {
      return (
        <div className='meetup-panel'>
          <Accordion>
            <Panel header='Meetup Panel'>
              <div className='content-inner'>
                {
                  events.map((event, index) => (
                    <Event
                      key={index}
                      eventlink={event.link}
                      time={event.time}
                      utcOffset={event['utc_offset']}
                      duration={event.duration}
                      description={event.description}
                      rsvpCount={event['yes_rsvp_count']}
                      waitlistCount={event['waitlist_count']}
                      groupName={event.group.name}
                      groupWho={event.group.who}
                      location={event.group.location}
                      lat={event.group.lat}
                      lon={event.group.lon}
                    />
                  ))
                }
              </div>
            </Panel>
          </Accordion>
        </div>
      )
    } else {
      return (
        <div className='meetup-panel'>
          <Accordion>
            <Panel header='Meetup Panel'>
              <div className='content-inner'>
              </div>
            </Panel>
          </Accordion>
        </div>
      )
    }
  }
}

export default MeetupPanel