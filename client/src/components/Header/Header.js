/**
 * Created by you on 3/3/17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Button, FormControl, FormGroup } from 'react-bootstrap'
import headerLogo from './city_sketch2_navbar_logo.png'
import s from './Header.css'

class Header extends React.Component {
    state = {
      city: ''
    }
  handleInputChange = (event) => {
    this.setState({city: event.target.value})
    // this.props.onInputChange(this.state.city)
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.city)
    ReactDOM.findDOMNode(this.refs.form).value = ''
  }

  render () {
    return (
      <div className='App-header'>
        <Navbar className={s.navbar}>
          <Navbar.Header>
            <Navbar.Brand >
              <a href='#'><img src={headerLogo} alt='city sketch2 logo' /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <form onSubmit={this.handleSubmit}>
              <Navbar.Form pullRight>
                <FormGroup controlId='search'>
                  <FormControl ref='form' onChange={this.handleInputChange} type='text' placeholder='Search available cities' />
                </FormGroup>
                {' '}
                <Button bsStyle='success' type='submit'>Submit</Button>
              </Navbar.Form>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
