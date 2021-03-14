import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from './components/Nav';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    countries: countries,
  };

  render() {
    return (
      <Router>
        <Nav />
        <Container fluid>
          <Row>
            <Col xs={5}>
              <CountriesList countries={countries} />
            </Col>
            <Col xs={7}>
              <Switch>
                <Route
                  path="/country/:ccn3"
                  component={CountryDetails}
                  exact
                ></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
