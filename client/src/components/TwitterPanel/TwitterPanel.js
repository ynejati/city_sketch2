/**
 * Created by you on 3/4/17.
 */
import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './TwitterPanel.css'

class TwitterPanel extends React.Component {
  render () {
    return (
      <Accordion>
        <Panel header='Twitter Panel'>
          {/* Populate with feed based on search query */}
          Twitter feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default TwitterPanel
