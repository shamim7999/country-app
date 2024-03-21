import React from "react";
import Button from "react-bootstrap/Button";

import "../css/country.css";

const Country = (props) => {

  const { id, country } = props;

  const { name, flags, capital, population, area } = country;
  
  const handleRemoveCountry = (e) => {
        e.preventDefault();
        props.handleRemove(name.common);
  }
  
  return (
    <article className="country">
      <div>
        <img src={flags.png} alt={name.common} className="flag" />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Captial: {capital}</h3>
        <h3>Area: {area}</h3>
        <Button variant="primary" onClick={handleRemoveCountry} >Remove</Button>
      </div>
    </article>
  );
};

export default Country;
