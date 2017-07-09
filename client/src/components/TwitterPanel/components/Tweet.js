/**
 * Created by you on 5/26/17.
 */
import moment from 'moment'
import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './Tweet.css'

class Tweet extends React.Component {

  processText = (text) => {

  }

  processDate = (date) => {
    const newDate = moment(date)
    return newDate.format('MMMM Do YYYY, h:mm:ss a')
  }

  render() {

    const screenNameLink = 'https://twitter.com/' + this.props.screenName

    return (
      <blockquote className="twitter-tweet">
        <div className="tweet-header">
          <Row>
            <Col md={2}>
              <Image src={this.props.profileImageUrl} rounded />
            </Col>
            <Col md={4}>
              <Row>
                <p id="user-name">{this.props.userName}</p>
              </Row>
              <Row>
                <a id="screen-name" target="_blank" href={screenNameLink}>@{this.props.screenName}</a>
              </Row>
            </Col>
          </Row>
        </div>
        <p>{this.props.text}</p>
        <p>{this.props.hashTags.map((tag, index) => (
          <a key={index} target="_blank" href={`https://twitter.com/hashtag/${tag}?src=hash`}>#{tag} </a>
        ))}</p>
        <time className="tweet-date-time">{this.processDate(this.props.date)}</time>
        <img role="presentation" className="image" src={this.props.imageUrl} />
      </blockquote>
    )
  }
}

export default Tweet