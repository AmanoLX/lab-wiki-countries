import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const CountriesList = ({ countries }) => {
  return (
    <div>
      <ul>
        <ListGroup as="ul">
          {countries.map((country) => (
            <ListGroup.Item as="li" key={country.ccn3}>
              <Link to={`/country/${country.ccn3}`}>
                <i>{country.flag}</i>
                {country.name.common}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ul>
    </div>
  );
};

export default CountriesList;
