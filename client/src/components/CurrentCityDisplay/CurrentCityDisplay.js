import React from 'react'

class CurrentCityDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.city}</h2>
      </div>
    )
  }
}

export default CurrentCityDisplay
