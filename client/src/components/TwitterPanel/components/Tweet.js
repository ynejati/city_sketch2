/**
 * Created by you on 5/26/17.
 */
import React from 'react'
import {} from 'react-bootstrap'
import './Tweet.css'

class Tweet extends React.Component {

  render(){
    return(
      <blockquote className="twitter-tweet">
        <p>{this.props.text}</p>
      </blockquote>
    )
  }
}

export default Tweet
