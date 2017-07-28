import moment from 'moment'
import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './Tweet.css'


const parseURL = (text) => {
  // Source: http://www.simonwhatley.co.uk/parsing-twitter-usernames-hashtags-and-urls-with-javascript
  return text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, (url) => {
    return url.link(url)
  })
}

const parseUsername = (text) => {
  // Source: http://www.simonwhatley.co.uk/parsing-twitter-usernames-hashtags-and-urls-with-javascript
  return text.replace(/[@]+[A-Za-z0-9-_]+/g, (u) => {
    const username = u.replace('@', '')
    return u.link(`http://twitter.com/${username}`)
  })
}

const parseHashtag = (text) => {
  // Source: http://www.simonwhatley.co.uk/parsing-twitter-usernames-hashtags-and-urls-with-javascript
  return text.replace(/[#]+[A-Za-z0-9-_]+/g, (t) => {
    const tag = t.replace('#', '%23')
    return t.link(`http://twitter.com/search?q=${tag}`)
  })
}

const parseTweetDate = (date) => {
  const newDate = moment(date)
  return newDate.format('MMMM Do YYYY, h:mm:ss a')
}

const getScreenNameLink = (screenName) => (`https://twitter.com/${screenName}`)

class Tweet extends React.Component {

  // Not pretty but gets the job done. Find a better solution.
  renderText = (text) => {

    let newText = parseURL(text)
    newText = parseUsername(newText)
    newText = parseHashtag(newText)

    return { __html: newText }
  }

  renderImage = (imageUrl) => {
    if (imageUrl) {
      return (
        <img role='presentation' className='image' src={imageUrl} />
      )
    }
  }

  renderProfileImage = (profileImage) => {
    return (
      <Image src={profileImage} rounded />
    )
  }

  render() {

    const {
      imageUrl,
      screenName,
      profileImageUrl,
      userName,
      text,
      hashTags,
      date,
    } = this.props

    return (
      <blockquote className="twitter-tweet">
        <div className="tweet-header">
          <Row>
            <Col xs={12}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {this.renderProfileImage(profileImageUrl)}
                    </td>
                    <td className='tweet-userinfo-cell'>
                      <text id="user-name">{userName}</text>
                      <br />
                      <a id="screen-name" target="_blank" href={getScreenNameLink(screenName)}>@{screenName}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
        <p dangerouslySetInnerHTML={this.renderText(text)} />
        <p>{hashTags.map((tag, index) => (
          <a key={index} target="_blank" href={`https://twitter.com/hashtag/${tag}?src=hash`}>#{tag} </a>
        ))}</p>
        <time className="tweet-date-time">{parseTweetDate(date)}</time>
        {this.renderImage(imageUrl)}
      </blockquote>
    )
  }
}

export default Tweet