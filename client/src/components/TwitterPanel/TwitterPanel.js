import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
import Tweet from './components/Tweet'
import './TwitterPanel.css'

class TwitterPanel extends React.Component {

  render() {

    const {
      tweets
    } = this.props

    return (
      <div className="twitter-panel">
        <Accordion>
          <Panel header='Twitter Activity'>
            <div className="content-inner">
              {
                tweets.map((cheep, index) => (
                  <Tweet
                    key={index}
                    userName={cheep['user_name']}
                    screenName={cheep['screen_name']}
                    text={cheep['text']}
                    hashTags={cheep['hashtags']}
                    date={cheep['date']}
                    imageUrl={cheep['image_url']}
                    profileImageUrl={cheep['profile_image_url']}
                  />
                ))
              }
            </div>
          </Panel>
        </Accordion>
      </div>
    )
  }
}

export default TwitterPanel

