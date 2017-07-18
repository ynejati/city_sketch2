import React from 'react'
import { Navbar, Button, FormControl, FormGroup, Glyphicon } from 'react-bootstrap'
import headerLogo from './city_sketch2_navbar_logo.png'
import s from './Header.css'

class Header extends React.Component {
  state = {
    city: ''
  }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value })
  }

  onSearchSubmit = (event) => {
    const city = this.state.city
    this.props.onSearchFormSubmit(city)
    this.setState({ city: '' })
    event.target.reset()
    event.preventDefault()
  }

  render() {
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
            <form onSubmit={this.onSearchSubmit}>
              <Navbar.Form pullRight>
                <FormGroup controlId='search'>
                  <FormControl onChange={this.handleInputChange} autoComplete='on' type='text'
                    placeholder='Search cities....' />
                </FormGroup>
                {' '}
                <Button bsStyle='success' type='submit'>
                  <Glyphicon glyph="search" />
                </Button>
              </Navbar.Form>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
