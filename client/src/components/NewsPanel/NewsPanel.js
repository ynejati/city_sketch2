import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
// import s from './NewsPanel.css'

class NewsPanel extends React.Component {
  render() {
    return (
      <Accordion>
        <Panel header='News Panel'>
          {/* Populate with feed based on search query */}
          News feed goes here
        </Panel>
      </Accordion>
    )
  }
}

export default NewsPanel
