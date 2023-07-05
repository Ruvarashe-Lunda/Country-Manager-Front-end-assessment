import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryService from './CountryService';

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const countryData = await CountryService.getCountryById(id);
      setCountry(countryData);
    };

    fetchData();
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};


export default CountryDetails;