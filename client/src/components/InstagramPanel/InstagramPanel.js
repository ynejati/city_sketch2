/**
 * Created by you on 3/4/17.
 */

import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './InstagramPanel.css'

class InstagramPanel extends Component {
  render () {
    return (
      <Accordion>
        <Panel header='Instagram Panel'>
          {/* Populate with feed based on search query */}
          Instagram feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default InstagramPanel
