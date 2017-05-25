/**
 * Created by you on 3/4/17.
 */

import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './SnapPanel.css'

class SnapPanel extends React.Component {
  render () {
    return (
      <Accordion>
        <Panel header='Snapchat Panel'>
          { /* Populate with feed based on search query */ }
          Snapchat feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default SnapPanel
