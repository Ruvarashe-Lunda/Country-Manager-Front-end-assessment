import React, { useState } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([
    { id: 1, name: 'Country 1' },
    { id: 2, name: 'Country 2' },
    { id: 3, name: 'Country 3' }
  ]);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleViewMore = (countryId) => {
    // Fetch the country details from an API using the countryId
    // Replace the fetchCountryDetails function with your own API call
    fetchCountryDetails(countryId)
      .then((countryData) => {
        setSelectedCountry(countryData);
      })
      .catch((error) => {
        console.error('Error fetching country details:', error);
      });
  };

  const fetchCountryDetails = (countryId) => {
    // Simulating an asynchronous API call using a Promise
    return new Promise((resolve, reject) => {
      // Replace this with your own API endpoint
      setTimeout(() => {
        // Simulated country data
        const countryData = { id: countryId, name: `Country ${countryId}`, population: 1000000 };
        resolve(countryData);
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Country List</h1>
      {countries.map((country) => (
        <div key={country.id}>
          <p>{country.name}</p>
          <button onClick={() => handleViewMore(country.id)}>View More</button>
        </div>
      ))}
      {selectedCountry && (
        <div>
          <h2>Country Details</h2>
          <p>ID: {selectedCountry.id}</p>
          <p>Name: {selectedCountry.name}</p>
          {/* Display additional country details */}
          <p>Population: {selectedCountry.population}</p>
        </div>
      )}
    </div>
  );
};

export default CountryList;
