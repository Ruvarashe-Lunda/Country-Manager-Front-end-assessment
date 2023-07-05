import React, { useEffect, useState } from 'react';
import CountryService from './CountryService';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countryData = await CountryService.getListOfCountries();
      setCountries(countryData);
    };

    fetchData();
  }, []);


  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};



export default CountryList;