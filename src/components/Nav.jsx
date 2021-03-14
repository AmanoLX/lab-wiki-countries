import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Nav extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="primary" className="mb-3">
        <Navbar.Brand to="/">WikiCountries</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Nav;
