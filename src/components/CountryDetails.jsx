import React, { Component } from 'react';
import countries from './../countries.json';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.ccn3 !== previousProps.match.params.ccn3) {
      this.loadCountry();
    }
  }

  loadCountry = () => {
    const countryCode = this.props.match.params.ccn3;
    const country = countries.find((item) => item.ccn3 === countryCode);
    this.setState({
      country: country,
    });
  };

  render() {
    const country = this.state.country;
    return (
      <div>
        <h1>{this.props.match.params.countryCode}</h1>

        {country && (
          <div>
            <h1>{country.name.common}</h1>
            <h3>{country.capital}</h3>
            <h3>{country.subregion}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
